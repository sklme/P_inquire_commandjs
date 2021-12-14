// There are some additional features available by constructing an Argument explicitly for less common cases.

import { program, Argument } from 'commander';

program
  .description('使用Argument构造函数来新增arguments')
  .addArgument(
    new Argument('<drink-size>', 'drich cup size').choices([
      'small',
      'medium',
      'large',
    ]),
  )
  .addArgument(
    new Argument('[timeout]', 'timeout in seconds').default(60, 'one minute'),
  )
  .action((size, timeout) => {
    console.log('size: ', size);
    console.log('timeout: ', timeout);
  })
  .parse();

// Try the following:
//  node arguments-extra.js --help
//  node arguments-extra.js huge
//  node arguments-extra.js small
//  node arguments-extra.js medium 30
