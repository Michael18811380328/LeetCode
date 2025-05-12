// This script generates random images with random colors and saves them to a specified directory.
// npm install sharp: "^0.33.5"
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const util = require('util');
 
const mkdir = util.promisify(fs.mkdir);
const writeFile = util.promisify(fs.writeFile);
 
const IMAGE_WIDTH = 1600; // 图片宽度
const IMAGE_HEIGHT = 800; // 图片高度
const IMAGE_COUNT = 1000; // 图片数量
const OUTPUT_DIR = 'random_images'; // 输出目录
 
async function createRandomImage(filename) {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
 
  const image = await sharp({
    create: {
      width: IMAGE_WIDTH,
      height: IMAGE_HEIGHT,
      channels: 4,
      background: { r: red, g: green, b: blue, alpha: 255 }
    }
  });
 
  await image.toFile(filename);
}
 
async function main() {
  try {
    await mkdir(OUTPUT_DIR, { recursive: true });
 
    for (let i = 0; i < IMAGE_COUNT; i++) {
      const filename = path.join(OUTPUT_DIR, `${i}.png`);
      await createRandomImage(filename);
    }
  } catch (error) {
    console.error(error);
  }
}
 
main();