from PIL import Image, ImageDraw
from pathlib import Path
files = sorted(Path('.tmp-karten').glob('card-*.png'))
for start in range(0, len(files), 8):
    canvas = Image.new('RGB', (1600, 1500), '#ddd8cf')
    for i, filename in enumerate(files[start:start+8]):
        with Image.open(filename) as source:
            source.thumbnail((390, 710))
            x, y = (i % 4) * 400, (i // 4) * 750
            canvas.paste(source, (x, y+25))
            ImageDraw.Draw(canvas).text((x+5, y+5), filename.stem, fill='black')
    canvas.save(f'.tmp-karten/contact-{start//8}.jpg')
