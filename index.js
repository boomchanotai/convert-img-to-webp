// Convert image in folder to webp format
// Usage: node index.js <folder>
// Example: node index.js images
// Output: images/webp

const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const folder = ".";
const imagesFolder = `${folder}/images`;
const webpFolder = `${folder}/webp`;

if (!fs.existsSync(webpFolder)) {
  fs.mkdirSync(webpFolder);
}

fs.readdir(imagesFolder, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  files.forEach((file) => {
    const ext = path.extname(file);
    if (ext === ".jpg" || ext === ".jpeg" || ext === ".png") {
      const name = path.basename(file, ext);
      sharp(`${imagesFolder}/${file}`)
        .webp()
        .toFile(`${webpFolder}/${name}.webp`, (err, info) => {
          if (err) {
            console.error(err);
            return;
          }
          console.log(info);
        });
    }
  });
});

// Run: node index.js images
// Output: images/webp
