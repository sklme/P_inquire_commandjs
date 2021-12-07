// https://juejin.cn/post/6901552013717438472#heading-15
import { Command, program } from 'commander';
import pkg from '../package.json';

// import pkg from './package.json';
// console.log(process.env.npm_package_version);
console.log(pkg.version);

program.version('0.0.1');
