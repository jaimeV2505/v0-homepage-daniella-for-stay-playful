const fs = require('fs');
const path = require('path');

const projectRoot = '/vercel/share/v0-project';
const nextDir = path.join(projectRoot, '.next');

function deleteFolderRecursive(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.readdirSync(dirPath).forEach((file) => {
      const curPath = path.join(dirPath, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        deleteFolderRecursive(curPath);
      } else {
        try {
          fs.unlinkSync(curPath);
          console.log('Deleted file:', curPath);
        } catch (e) {
          console.log('Could not delete:', curPath, e.message);
        }
      }
    });
    try {
      fs.rmdirSync(dirPath);
      console.log('Deleted directory:', dirPath);
    } catch (e) {
      console.log('Could not delete directory:', dirPath, e.message);
    }
  }
}

console.log('=== FORCE REBUILD: Clearing ALL .next cache ===');
console.log('Target:', nextDir);

if (fs.existsSync(nextDir)) {
  deleteFolderRecursive(nextDir);
  console.log('✓ .next directory completely removed');
} else {
  console.log('✓ .next directory does not exist (already clean)');
}

// Also clear any turbopack-specific cache
const turbopackCache = path.join(projectRoot, '.turbo');
if (fs.existsSync(turbopackCache)) {
  deleteFolderRecursive(turbopackCache);
  console.log('✓ .turbo directory removed');
}

console.log('=== Cache cleared. Next request will trigger full rebuild ===');
