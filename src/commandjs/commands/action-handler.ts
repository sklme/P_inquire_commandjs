// command的action handler

import { program } from 'commander';

program
  .argument('<name>')
  .option('-t, --title <honorific>', 'title to use before name')
  .option('-d, --debug', 'display some debugging')
  .action((name, options, command) => {
    if (options.debug) {
      console.error('Called %s with options %o', command.name(), options);
    }
    const title = options.title ? `${options.title as string} ` : '';
    console.log(`Thank-you ${title}${name as string}`);
  })
  .parse();

// Try the following:
//   node action-handler.js John
//   node action-handler.js Doe --title Mr
//   node action-handler.js --debug Doe --title Mr
