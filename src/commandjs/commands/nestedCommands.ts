// Commander supports nested subcommands.

import { Command, program } from 'commander';
import external from './nestedCommands-sub-module';

const brew = program.command('brew');

brew.command('tea').action(() => {
  console.log('brew tea');
});

brew.command('coffee').action(() => {
  console.log('brew coffee');
});
// 测试：
// $ node nestedCommands.js brew tea
// brew tea

// Add nested commands using `.addCommand().
// The command could be created separately in another module.
function makeHeatCommand() {
  const heat = new Command('heat');
  heat.command('jug').action(() => {
    console.log('heat jug');
  });
  heat.command('pot').action(() => {
    console.log('heat pot');
  });
  return heat;
}
program.addCommand(makeHeatCommand());
// 测试
// $ node nestedCommands.js heat jug
// heat jug

// 来自外部的命令
program.addCommand(external);
// 测试
// $ node nestedCommands.js external ext
// this command is from separate module

program.parse(process.argv);
