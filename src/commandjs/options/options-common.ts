import { program } from 'commander';

program
  .option('-d, --debug', 'output extra debugging')
  .option('-s, --small', 'small pizza size')
  .option('-p, --pizza-type <type>', 'flavour of pizza');

// parser options
program.parse(process.argv);

// 获取parse之后的options
const options = program.opts();

console.log('所有参数：');
console.log(options);

//
if (options.debug) console.log(options);

//
if (options.small) console.log('- small pizza size');

//
if (options.pizzaType) console.log(`- ${options.pizzaType as string}`);

// 测试：
//    node options-common.js -d
//    node options-common.js -p
//    node options-common.js -d -s -p vegetarian
//    node options-common.js --pizza-type=cheese
