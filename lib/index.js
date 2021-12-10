'use strict';
//juejin.cn/post/6901552013717438472#heading-19
//https://github.com/tj/commander.js#commands
Object.defineProperty(exports, '__esModule', { value: true });
const commander_1 = require('commander');
// import pkg from '../package.json';
// import pkg from './package.json';
console.log(process.env.npm_package_version);
// console.log(pkg.version);
commander_1.program
  .version('0.0.1')
  .option('-d, --debug', 'output extra debugging')
  .option('-s, --show-log <version>', '我最厉害', '2');
commander_1.program.parse(process.argv);
console.log(process.argv);
const options = commander_1.program.opts();
const args = commander_1.program.args;
console.log(args);
console.log(commander_1.program.getOptionValue('debug'));
console.log(options);
