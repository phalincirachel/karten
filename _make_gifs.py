from pathlib import Path
from PIL import Image
from PIL import ImageChops

SOURCE = Path(r"C:\Users\Stephan\.codex\generated_images\01a04d43-874f-70f1-a8c0-da4999e65644")
WORK = Path(__file__).resolve().parent
OUTPUT = WORK / "assets" / "gifs"
OUTPUT.mkdir(parents=True, exist_ok=True)

FILES = {
    "exec-079a3e95-9d6b-4a4d-9b13-b3bb3e85e810.png": "moireatmung.gif",
    "exec-e6e1648a-bd39-4a33-a11d-511f25eb313f.png": "kippkoerper.gif",
    "exec-1d240e9f-e98a-40cf-8b14-a32eb1d4ee68.png": "farbfenster.gif",
    "exec-4102b3db-2f99-4306-be55-278d64183d07.png": "faltendes-raster.gif",
    "exec-adbc395d-e0e4-424c-9ca8-0a429a992088.png": "pendelspur.gif",
}

for source_name, output_name in FILES.items():
    with Image.open(SOURCE / source_name) as sheet:
        xs = [round(i * sheet.width / 4) for i in range(5)]
        ys = [round(i * sheet.height / 2) for i in range(3)]
        frames = []
        for row in range(2):
            for column in range(4):
                frame = sheet.crop((xs[column], ys[row], xs[column + 1], ys[row + 1]))
                side = min(frame.size)
                left = (frame.width - side) // 2
                top = (frame.height - side) // 2
                frame = frame.crop((left, top, left + side, top + side))
                frame = frame.quantize(colors=96, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.FLOYDSTEINBERG)
                frames.append(frame)
        frames[0].save(
            OUTPUT / output_name,
            save_all=True,
            append_images=frames[1:],
            duration=170,
            loop=0,
            optimize=True,
            disposal=2,
        )

# Sechste Karte: Ein einzelnes erzeugtes Ausgangsbild wird als ruhige,
# geschlossene Membranbewegung animiert.
membrane_source = Path(r"C:\Users\Stephan\.codex\generated_images\01a04d43-874f-70f1-a8c0-da4999e65644\exec-fa8a74bd-07db-4979-be9f-fb276b2d9c3d.png")
with Image.open(membrane_source) as image:
    image = image.convert("RGB").resize((320, 320), Image.Resampling.LANCZOS)
    frames = []
    count = 18
    for index in range(count):
        phase = index / count
        dx = round(12 * __import__("math").sin(phase * 2 * __import__("math").pi))
        dy = round(8 * __import__("math").sin(phase * 4 * __import__("math").pi))
        shifted = ImageChops.offset(image, dx, dy)
        scale = 1 + 0.025 * __import__("math").sin(phase * 2 * __import__("math").pi)
        side = round(320 * scale)
        transformed = shifted.resize((side, side), Image.Resampling.BICUBIC)
        if side >= 320:
            left = (side - 320) // 2
            transformed = transformed.crop((left, left, left + 320, left + 320))
        else:
            canvas = Image.new("RGB", (320, 320), (246, 239, 222))
            left = (320 - side) // 2
            canvas.paste(transformed, (left, left))
            transformed = canvas
        frames.append(transformed.quantize(colors=48, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.NONE))
    frames[0].save(
        OUTPUT / "membranlauf.gif",
        save_all=True,
        append_images=frames[1:],
        duration=120,
        loop=0,
        optimize=True,
        disposal=2,
    )
