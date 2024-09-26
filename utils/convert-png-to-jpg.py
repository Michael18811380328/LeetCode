from PIL import Image
import os

"""
convert pngs to jpgs in a folder use Pillow
"""
def convert_png_to_jpg(folder_path):
  for filename in os.listdir(folder_path):
    if filename.endswith('.png'):
      img_path = os.path.join(folder_path, filename)
      output_path = os.path.join(folder_path, filename[:-4] + '.jpg')

      with Image.open(img_path) as img:
        if img.mode == 'RGBA':
          img = img.convert('RGB')
        img.save(output_path, 'JPEG')

      print(f'Converted {filename} to {output_path}')

folder_path = 'path/to/your/png/folder'

convert_png_to_jpg(folder_path)
