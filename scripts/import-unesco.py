"""Build the video catalogue from UNESCO DataHub ich001 (Python standard library)."""
import argparse
from concurrent.futures import ThreadPoolExecutor
import json
from pathlib import Path
import re
import sys
import time
import unicodedata
from urllib.error import HTTPError, URLError
from urllib.parse import urlencode
from urllib.request import urlopen

ROOT = Path(__file__).resolve().parents[1]
EXPORT = "https://data.unesco.org/api/explore/v2.1/catalog/datasets/ich001/exports/json?"
FIELDS = "ich_public_ref,title_en,http_url_en,videos,concepts_primary_names,concepts_secondary_names,type_acronym"
MUSIC = {
    "Vocal music", "Instrumental music", "Popular music", "Religious music",
    "Musical styles", "Musical performances", "Choir singing", "Polyphonic singing",
    "Throat singing", "Work songs", "Orchestras", "Opera", "Bard", "Duet",
    "Musicians", "Musical instruments", "Percussion instruments", "Body percussion",
    "Idiophones", "String instruments", "Plucked string instruments", "Wind instruments",
    "Bowed string instruments", "Struck string instruments", "Woodwind instruments",
}
# UNESCO sometimes indexes the ritual, the game or the guild as the main subject.
MUSIC_TITLE = re.compile(r"\b(?:music\w*|singing|singers?|songs?|chants?|drumming|ballads?|lyre|bell ringing)\b", re.I)
# Apply only to the erroneous pair. A corrected ID in a later export passes through.
REPLACEMENTS = {
    ("00005", "B3-IkdWzNBs"): "C8-Y6HdnQlk",  # Gbofe, not Oxherding in Costa Rica
    ("00111", "IgZV9nR-m2o"): "4UtXF9uRB-s",  # El Güegüense, not Chopi Timbila
}
SHARED_FILMS = {"l6KtHuy5Lvg": {"02224", "02474"}}  # Hezhen Yimakan and its safeguarding programme
TRANSLATED_TITLES = {
    "xq6wYI0HXkg": "La danse rituelle au tambour royal",
    "VyEidlsVqFA": "La Eshuva, cantos rezados Harákmbut de la etnia Huachipaire (Perú)",
}


def distinctive_words(title):
    text = unicodedata.normalize("NFKD", title.casefold().replace("’", "").replace("'", ""))
    text = "".join(c for c in text if not unicodedata.combining(c))
    common = {"a", "of", "the", "and", "in", "de", "la", "le", "les", "du", "des",
              "for", "to", "art", "on", "music", "traditional", "dance", "song", "tradition"}
    return set(re.findall(r"\w+", text)) - common


def catalogue(records):
    videos = {}
    for record in sorted(records, key=lambda r: int(r["ich_public_ref"])):
        name = record["title_en"]
        if not (MUSIC.intersection(record["concepts_primary_names"] or []) or MUSIC_TITLE.search(name)):
            continue
        items = record["videos"] or []
        if isinstance(items, str):
            items = json.loads(items)
        if not items:
            print("Ohne Video-ID:", record["http_url_en"], name, file=sys.stderr)
        for item in items:
            ref = str(record["ich_public_ref"]).zfill(5)
            video = REPLACEMENTS.get((ref, item["youtube_videoID"]), item["youtube_videoID"])
            if not re.fullmatch(r"[A-Za-z0-9_-]{11}", video):
                raise ValueError(f"Invalid video ID for {name}: {video!r}")
            if video in videos:
                previous = videos[video][2].rsplit("/", 1)[-1]
                if previous != ref and {previous, ref} != SHARED_FILMS.get(video):
                    raise ValueError(f"Review shared video {video}: {previous}, {ref}")
            videos.setdefault(video, [video, name, record["http_url_en"]])
    if not videos:
        raise ValueError("UNESCO returned no matching video records")
    return videos


def available(row):
    video, name, _ = row
    url = "https://www.youtube.com/oembed?" + urlencode({
        "url": f"https://www.youtube.com/watch?v={video}", "format": "json"})
    for attempt in range(3):
        try:
            with urlopen(url, timeout=25) as response:
                player = json.load(response)
                if "/embed/" + video not in player["html"]:
                    raise ValueError(f"Unexpected player for {video}")
                expected = TRANSLATED_TITLES.get(video, name)
                if not distinctive_words(expected).intersection(distinctive_words(player["title"])):
                    raise ValueError(f"Review film title for {video}: {name} / {player['title']}")
            return True
        except HTTPError as error:
            if error.code in (401, 403, 404, 410):
                print(f"YouTube {error.code}: {video}", file=sys.stderr, flush=True)
                return False
            if attempt == 2:
                raise
        except (TimeoutError, URLError):
            if attempt == 2:
                raise
        time.sleep(2 ** attempt)


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--input", type=Path, help="Local copy of the DataHub JSON export")
    args = parser.parse_args()
    if args.input:
        records = json.loads(args.input.read_text(encoding="utf-8-sig"))
    else:
        with urlopen(EXPORT + urlencode({"select": FIELDS}), timeout=60) as response:
            records = json.load(response)
    videos = catalogue(records)
    with ThreadPoolExecutor(max_workers=5) as pool:
        rows = [row for row, ok in zip(videos.values(), pool.map(available, videos.values())) if ok]
    if len(rows) < len(videos) * .9:
        sys.exit("Too many unavailable videos. Existing catalogue preserved.")
    body = ",\n".join("  " + json.dumps(row, ensure_ascii=False) for row in rows)
    output = ROOT / "media-map.js"
    temporary = output.with_suffix(".js.tmp")
    temporary.write_text("// UNESCO DataHub ich001 · scripts/import-unesco.py\n"
                         "window.KARTEN_UNESCO_VIDEOS = [\n" + body + "\n];\n", encoding="utf-8")
    temporary.replace(output)
    print(f"{len(records)} UNESCO entries, {len(videos)} video IDs, {len(rows)} embeddable videos.")
