const fs = require('fs');
const path = require('path');

const nextDir = path.join(__dirname, '..', '.next');

function deleteFolderRecursive(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.readdirSync(dirPath).forEach((file) => {
      const curPath = path.join(dirPath, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        deleteFolderRecursive(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(dirPath);
  }
}

console.log('Clearing Next.js cache...');
if (fs.existsSync(nextDir)) {
  deleteFolderRecursive(nextDir);
  console.log('.next directory deleted successfully');
} else {
  console.log('.next directory does not exist');
}
console.log('Cache cleared. The dev server will rebuild on next request.');
