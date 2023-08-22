const path = require('path')

// This specify the sepeartor symbol for your system  (\ for windows)
console.log(path.sep);

const filepath = path.join('/content', 'subfolder', 'test.txt')
console.log(filepath);

const base = path.basename(filepath);
console.log(base);

const absolutePath = path.resolve(__dirname, 'content', 'subfolder','test.txt');
console.log(absolutePath);