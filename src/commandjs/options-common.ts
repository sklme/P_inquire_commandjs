import { program } from 'commander';

program
  .option('-d, --debug', 'output extra debugging')
  .option('-s, --small', 'small pizza size')
  .option('-p, --pizza-type <type>', 'flavour of pizza');

// parser options
program.parse(process.argv);

// 获取parse之后的options
const options = program.opts();
console.log(options);
