// CLI script to encode a string or file to base64
const fs = require('fs');

const encode = (input) => Buffer.from(input).toString('base64');

if (process.argv.length < 3) {
  console.log('Usage: node encodeToBase64.js <text_or_file_path>');
  process.exit(1);
}

const input = process.argv[2];
try {
  const content = fs.existsSync(input) ? fs.readFileSync(input) : input;
  console.log(encode(content));
} catch (e) {
  console.error('Error:', e.message);
}
