// You can define a boolean option long name with a leading no- to set the option value to false when used. Defined alone this also makes the option true by default.

import { program } from 'commander';

program
  .option('--no-sauce', 'Remove sauce')
  // 这里增加了cheese的默认值，当不给--no-cheese参数的时候，就会使用这个默认值
  .option('--cheese <flavour>', 'cheese flavour', 'mozzarella')
  .option('--no-cheese', 'plain with no cheese')
  .parse();

const options = program.opts();
console.log('所有参数：', options);

const sauceStr = options.sauce ? 'sauce' : 'no sauce';
const cheeseStr =
  options.cheese === false ? 'no cheese' : `${options.cheese as string} cheese`;
console.log(`You ordered a pizza with ${sauceStr} and ${cheeseStr}`);

// Try the following:
//    node options-negatable.js
//    node options-negatable.js --sauce
//    node options-negatable.js --cheese=blue
//    node options-negatable.js --no-sauce --no-cheese
