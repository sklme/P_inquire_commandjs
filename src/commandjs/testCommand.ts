import { Command, Argument } from 'commander';
const program = new Command();

// 测试arguments
program
  .version('1.0.0')
  .argument('<username>', 'user to login')
  .argument('<password>', 'password for user, if required')
  .argument('[numbers...]', '测试的数据')
  .description('example for arguments test')
  .option('-d, --dest', '编译的目标目录', 'dist')
  .action((username, password, numbers, options) => {
    //
    console.log('username:', username);
    console.log('password:', password);
    console.log('numbers', numbers);
    console.log('options', options);
  });

// program.parse();

//  node testCommand.js color 123 2 33 33 1 65 -d 045967

// 测试子命令
program
  .command('tst')
  .argument('<username>', 'user to login')
  .argument('<password>', 'password for user, if required')
  .action((username, password) => {
    //
    console.log('username:', username);
    console.log('password:', password);
  });

program.command('tst2 <username> [password]').action((username, password) => {
  //
  console.log('tst2');
  console.log('username:', username);
  console.log('password:', password);
});

// 使用arguments
// 使用Argument类
program
  .command('arguments')
  .addArgument(
    new Argument('<drink-size>', 'drink cup size').choices([
      'small',
      'medium',
      'large',
    ]),
  )
  .arguments('<arg1> <arg2>')
  .option('-t, --test <value>', '参数', 'test')
  .action((size, a1, a2, options) => {
    console.log('command: arguments');
    console.log(size);
    console.log(a1);
    console.log(a2);
    console.log(options);
  });
program.parse();

// node testCommand.js arguments  arg1  arg2 -t 这是一个测试
