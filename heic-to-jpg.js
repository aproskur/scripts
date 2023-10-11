const fs = require('fs');
const gm = require('gm');
const path = require('path');

const inputDirectory = 'input'; // Replace with the directory path containing your HEIC files
const outputDirectory = 'output'; // Replace with the directory where you want to save the JPG files

// Ensure the output directory exists
if (!fs.existsSync(outputDirectory)) {
  fs.mkdirSync(outputDirectory, { recursive: true });
}

// List all files in the input directory
fs.readdir(inputDirectory, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  // Filter and convert HEIC files to JPG
  files.forEach((file) => {
    if (path.extname(file).toLowerCase() === '.heic') {
      const inputPath = path.join(inputDirectory, file);

      // Remove ".heic" from the file name
      const newFileName = path.basename(file, '.HEIC') + '.jpg';
      const outputPath = path.join(outputDirectory, newFileName);

      // Perform the conversion
      gm(inputPath)
        .write(outputPath, (err) => {
          if (err) {
            console.error('Error converting', file, 'to JPG:', err);
          } else {
            console.log('Converted', file, 'to JPG as', newFileName);
          }
        });
    }
  });
});
