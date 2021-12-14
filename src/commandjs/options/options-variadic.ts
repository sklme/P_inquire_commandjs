//You may make an option variadic by appending ... to the value placeholder when declaring the option.
// On the command line you can then specify multiple option-arguments, and the parsed option value will be an array.

import { program } from 'commander';

program
  .option('-n, --number <numbers...>', 'sepecify numbers')
  .option('-l, --letter [letters...]', 'specify letters')
  .parse();

console.log('所有参数：', program.opts());
console.log('remaining argyments', program.args);

/**
 * 测试
 *  node options-variadic.js -n 1 2 3 --letter a b c
 *  node options-variadic.js --letter=A -n80 operand
 *  node options-variadic.js --letter -n 1 -n 2 3 -- operand
 */
