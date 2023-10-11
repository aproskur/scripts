const fs = require('fs');
const path = require('path');

const directoryPath = 'output'; // Replace with the directory containing your files

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  files.forEach((file) => {
    if (file.match(/\.(HEIC|heic)\.jpg$/)) {
      const oldFilePath = path.join(directoryPath, file);
      const newFileName = file.replace(/\.(HEIC|heic)\.jpg$/, '.jpg');
      const newFilePath = path.join(directoryPath, newFileName);

      fs.rename(oldFilePath, newFilePath, (err) => {
        if (err) {
          console.error('Error renaming file:', err);
        } else {
          console.log(`Renamed ${file} to ${newFileName}`);
        }
      });
    }
  });
});