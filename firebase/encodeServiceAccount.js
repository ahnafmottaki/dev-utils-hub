// Encode Firebase service account JSON to base64
const fs = require('fs');

const encodeFileToBase64 = (filePath) => {
  const content = fs.readFileSync(filePath);
  return Buffer.from(content).toString('base64');
};

console.log(encodeFileToBase64('path/to/serviceAccount.json'));
