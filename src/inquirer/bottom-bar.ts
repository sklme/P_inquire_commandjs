import BottomBar from 'inquirer/lib/ui/bottom-bar';
import { spawn } from 'child_process';
// const cmdify = require('cmdify');
import cmdify from 'cmdify';

const loader = [
  '/ Installing',
  '| Installing',
  '\\ Installing',
  '- Installing',
];
let i = 4;
const ui = new BottomBar();

setInterval(() => {
  ui.updateBottomBar(loader[i++ % 4]);
}, 300);

// const cmd = spawn(cmdify('npm'), ['-g', 'install', 'inquirer'], {
//   stdio: 'pipe',
// });
// cmd.stdout.pipe(ui.log);
// cmd.on('close', () => {
//   ui.updateBottomBar('Installation done!\n');
//   process.exit();
// });
