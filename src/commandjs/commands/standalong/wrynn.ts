// When .command() is invoked with a description argument, this tells Commander that you're going to use stand-alone executables for subcommands.

import { program } from 'commander';

program
  .version('1.0.0')
  .description('stand along commands test programs.')
  .command('install [name]', 'install one or more packages')
  .alias('i')
  .command('search [query]', 'search packages')
  .alias('s')
  .command('update ', 'update installed packages', {
    executableFile: 'update',
  })
  .command('list', 'list packages installed', { isDefault: true });

program.parse();
