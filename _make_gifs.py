from pathlib import Path
from PIL import Image

SOURCE = Path(r"C:\Users\Stephan\.codex\generated_images\01a04d43-874f-70f1-a8c0-da4999e65644")
WORK = Path(__file__).resolve().parent
PREVIEW = WORK / "_gif_previews"
PREVIEW.mkdir(exist_ok=True)

for source in SOURCE.glob("*.png"):
    with Image.open(source) as image:
        image.thumbnail((800, 800))
        image.save(PREVIEW / f"{source.stem}.jpg", quality=88)
