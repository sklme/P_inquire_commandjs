// You may specify a required (mandatory) option using .requiredOption.

import { program } from 'commander';

program.requiredOption('-c, --cheese <type>', 'pizza must have cheese').parse();

console.log('所有参数', program.opts());

// 测试
//    node options-required.js
//    node options-required.js -cblur
