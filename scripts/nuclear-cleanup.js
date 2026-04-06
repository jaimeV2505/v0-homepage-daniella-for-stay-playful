#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('[v0] Aggressive cache cleanup and rebuild...');

// Kill any running node processes that might hold locks
try {
  execSync('pkill -f "next dev" 2>/dev/null || true', { stdio: 'ignore' });
  console.log('[v0] Killed Next.js processes');
} catch (e) {
  // Ignore
}

// Wait a bit for processes to fully terminate
setTimeout(() => {
  const dirs = ['.next', '.turbo', 'node_modules/.turbopack'];
  
  for (const dir of dirs) {
    const fullPath = path.join('/vercel/share/v0-project', dir);
    if (fs.existsSync(fullPath)) {
      try {
        execSync(`rm -rf "${fullPath}"`, { stdio: 'pipe' });
        console.log(`[v0] Deleted ${dir}`);
      } catch (e) {
        console.error(`[v0] Failed to delete ${dir}: ${e.message}`);
      }
    }
  }
  
  console.log('[v0] Cache cleanup complete - server will rebuild on next request');
}, 500);
