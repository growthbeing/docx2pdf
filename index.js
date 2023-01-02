const fs = require('fs');
const { convert } = require('docx-pdf');

const inputFilename = process.argv[2];
const outputFilename = process.argv[3];

const file = fs.readFileSync(inputFilename);
convert(file).then(buffer => {
  fs.writeFileSync(outputFilename, buffer);
});
