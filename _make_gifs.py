from pathlib import Path
from PIL import Image
from PIL import ImageChops
from PIL import ImageDraw
import math

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

# Siebte Karte: Die Spitzen unterschiedlich hoher Stäbe werfen bei einer
# kreisenden Lichtquelle eine fortlaufend veränderte Schattenlinie.
frames = []
size = 320
post_x = [48, 84, 120, 160, 200, 238, 274]
post_h = [48, 88, 62, 112, 72, 96, 54]
for index in range(32):
    phase = index / 32 * 2 * math.pi
    light_x = 160 + 118 * math.cos(phase)
    light_y = 50 + 18 * math.sin(phase)
    frame = Image.new("RGB", (size, size), (239, 232, 214))
    draw = ImageDraw.Draw(frame, "RGBA")
    for grid in range(32, 320, 32):
        draw.line((grid, 28, grid, 292), fill=(49, 63, 65, 24), width=1)
        draw.line((28, grid, 292, grid), fill=(49, 63, 65, 24), width=1)
    draw.line((28, 224, 292, 224), fill=(35, 47, 49, 210), width=2)
    tips = []
    for x, height in zip(post_x, post_h):
        top_y = 224 - height
        denominator = max(18, top_y - light_y)
        shadow_x = x + (x - light_x) * height / denominator
        shadow_x = max(18, min(302, shadow_x))
        tips.append((shadow_x, 224))
        draw.polygon([(x - 3, 224), (x + 3, 224), (shadow_x + 4, 231), (shadow_x - 4, 231)], fill=(35, 47, 49, 70))
        draw.line((x, 224, x, top_y), fill=(30, 47, 50, 255), width=5)
        draw.ellipse((x - 5, top_y - 5, x + 5, top_y + 5), fill=(190, 70, 49, 255))
    draw.line(tips, fill=(190, 70, 49, 210), width=3)
    draw.ellipse((light_x - 9, light_y - 9, light_x + 9, light_y + 9), fill=(245, 178, 46, 255), outline=(133, 87, 22, 210), width=2)
    frames.append(frame.quantize(colors=64, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.NONE))

frames[0].save(
    OUTPUT / "schattenzeiger.gif",
    save_all=True,
    append_images=frames[1:],
    duration=90,
    loop=0,
    optimize=True,
    disposal=2,
)

# Zwei gegeneinander laufende Schlitzscheiben erzeugen nur an ihren
# Schnittpunkten kurze rote Lichtbögen.
frames = []
size = 320
for index in range(36):
    phase = index / 36 * 2 * math.pi
    frame = Image.new("RGB", (size, size), (239, 232, 214))
    draw = ImageDraw.Draw(frame, "RGBA")
    center = (160, 160)
    for radius, direction, color in [(112, 1, (31, 47, 49, 235)), (76, -1, (77, 90, 87, 210))]:
        for slot in range(9):
            angle = phase * direction + slot * 2 * math.pi / 9
            start = math.degrees(angle) - 12
            draw.arc((160-radius, 160-radius, 160+radius, 160+radius), start, start+24, fill=color, width=13)
    for slot in range(9):
        angle = phase + slot * 2 * math.pi / 9
        angle2 = -phase + slot * 2 * math.pi / 9
        delta = abs((angle-angle2+math.pi) % (2*math.pi)-math.pi)
        if delta < .32:
            x = 160 + 92 * math.cos((angle+angle2)/2)
            y = 160 + 92 * math.sin((angle+angle2)/2)
            draw.ellipse((x-9, y-9, x+9, y+9), fill=(182, 76, 53, 255))
    draw.ellipse((143, 143, 177, 177), fill=(239, 232, 214), outline=(31, 47, 49, 235), width=5)
    frames.append(frame.quantize(colors=48, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.NONE))

frames[0].save(
    OUTPUT / "phasenschnitt.gif",
    save_all=True,
    append_images=frames[1:],
    duration=85,
    loop=0,
    optimize=True,
    disposal=2,
)
