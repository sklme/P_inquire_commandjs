// You can add most options using the .option() method,
// but there are some additional features available by constructing an Option explicitly for less common cases.

import { Option, program } from 'commander';

program
  .addOption(new Option('-s, --secret').hideHelp())
  .addOption(
    new Option('-t, --timeout <delay>', 'timeout in seconds').default(
      60,
      'one minutes',
    ),
  )
  .addOption(
    new Option('-d, --drink <size>', 'drink size').choices([
      'small',
      'medium',
      'large',
    ]),
  )
  .addOption(new Option('-p, --port <number>', 'port number').env('PORT'))
  .parse();

console.log('所有参数: ', program.opts());

/**
 * 测试：
 *  node options-extra.js --help
 *  node options-extra.js --drink huge
 *  PORT=80 node options-extra.js
 */
