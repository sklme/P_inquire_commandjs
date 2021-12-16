import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

spawn('node', ['input.js'], {
  cwd: __dirname,
  stdio: 'inherit',
});
