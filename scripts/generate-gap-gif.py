"""Erzeugt ausschließlich assets/gifs/ein-freies-feld.gif."""
from pathlib import Path
from PIL import Image, ImageDraw


def generate():
    size, cell, gap, origin = 360, 92, 7, 35
    ring = [(0, 0), (1, 0), (2, 0), (2, 1), (2, 2), (1, 2), (0, 2), (0, 1)]
    tiles = []
    for number in range(7):
        tile = Image.new("RGB", (cell, cell), "#e8d8ba")
        draw = ImageDraw.Draw(tile)
        # Jeder Stein trägt ein anderes Fragment eines imaginären Schaltplans.
        for offset in range(3):
            y = 20 + offset * 19
            draw.line((0, y, 35, y, 57, cell - y, cell, cell - y), fill="#29454c", width=4)
        draw.ellipse((36, 36, 56, 56), fill="#ad4d34")
        tiles.append(tile.rotate(90 * (number % 4)))
    state = [None, *range(7)]
    frames = []
    for move in range(56):
        empty, following = move % 8, (move + 1) % 8
        moving = state[following]
        for step in range(4):
            t = step / 4
            t = t * t * (3 - 2 * t)
            frame = Image.new("RGB", (size, size), "#243439")
            draw = ImageDraw.Draw(frame)
            draw.rectangle((origin + cell + gap, origin + cell + gap,
                            origin + 2 * cell + gap, origin + 2 * cell + gap),
                           outline="#879491", width=1)
            draw.ellipse((174, 174, 186, 186), fill="#c39153")
            for position, tile in enumerate(state):
                if tile is None or position == following:
                    continue
                x, y = ring[position]
                frame.paste(tiles[tile], (origin + x * (cell + gap), origin + y * (cell + gap)))
            x0, y0 = ring[following]
            x1, y1 = ring[empty]
            frame.paste(tiles[moving], (round(origin + (x0 + (x1 - x0) * t) * (cell + gap)),
                                        round(origin + (y0 + (y1 - y0) * t) * (cell + gap))))
            frames.append(frame.quantize(colors=24, dither=Image.Dither.NONE))
        state[empty], state[following] = moving, None
    assert state == [None, *range(7)], "Der Ablauf muss wieder am Anfang enden."
    output = Path(__file__).resolve().parents[1] / "assets/gifs/ein-freies-feld.gif"
    output.parent.mkdir(parents=True, exist_ok=True)
    frames[0].save(output, save_all=True, append_images=frames[1:], duration=55,
                   loop=0, disposal=2, optimize=True)


if __name__ == "__main__":
    generate()
