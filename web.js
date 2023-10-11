const fs = require('fs');
const gm = require('gm');
const path = require('path');

const inputDirectory = 'output';  // Replace with the folder containing your input images
const outputDirectory = 'web-output'; // Replace with the folder where you want to save the resized and compressed images

const maxWidth = 1500; // Set the maximum width for the resized images
const quality = 80;  // Set the image quality (0-100, higher values mean better quality)

fs.readdir(inputDirectory, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  files.forEach((file) => {
    const inputFilePath = path.join(inputDirectory, file);
    const outputFilePath = path.join(outputDirectory, file);

    gm(inputFilePath)
      .resize(maxWidth) // Resize the image to the specified width while maintaining aspect ratio
      .quality(quality) // Set the quality of the output image
      .write(outputFilePath, (err) => {
        if (err) {
          console.error('Error processing', file, ':', err);
        } else {
          console.log('Image resized and compressed:', outputFilePath);
        }
      });
  });
});