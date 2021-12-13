//juejin.cn/post/6901552013717438472#heading-19
//https://github.com/tj/commander.js#commands

import { Command, program } from 'commander';
// import pkg from '../package.json';

// import pkg from './package.json';
console.log(process.env.npm_package_version);
// console.log(pkg.version);

program
  .version('0.0.1')
  .option('-d, --debug', 'output extra debugging')
  .option('-s, --show-log <version>', '我最厉害', '2');

program.parse(process.argv);
console.log(process.argv);

const options = program.opts();
const args = program.args;
console.log(args);
console.log(program.getOptionValue('debug'));

console.log(options);
