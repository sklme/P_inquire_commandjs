// Example program using the command configuration option isDefault to specify the default command.

import { program } from 'commander';

program
  .command('build')
  .description('build website for deployment')
  .action(() => {
    console.log('build');
  });

program
  .command('deploy')
  .description('deploy website to production')
  .action(() => {
    console.log('deploy');
  });

// 默认子命令
program
  .command('serve', {
    isDefault: true,
  })
  .description('launch web server')
  .option('-p, --port <pn>', 'web_port', '8080')
  .action((options) => {
    console.log(options);
    console.log(`server on port ${options.port as string}`);
  });

program.parse();
