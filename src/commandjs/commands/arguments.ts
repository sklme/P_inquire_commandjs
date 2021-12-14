// 传递arguments

import { program } from 'commander';

// 1. 直接写在command之中的办法
program
  .command('clone <source> [destination]')
  .description('clone a repository into a newly created directory')
  .action((source: string, destination: string | undefined) => {
    console.log('source:', source);
    console.log('destination:', destination);
    console.log('clone command called');
  });

// 2. 分别使用argument方法添加
program
  .command('clone2')
  .description('克隆一个仓库')
  .argument('<source>', 'repo的来源')
  .argument('[destination]', '目的地', 'dist')
  .action((source: string, destination: string | undefined) => {
    console.log('source:', source);
    console.log('destination:', destination);
    console.log('clone command called');
  });

// 3. variadic argument
program
  .version('1.0.0')
  .command('rmdir')
  .argument('<dirs...>')
  .action((dirs: string[]) => {
    dirs.forEach((dir) => {
      console.log('rmdir %s', dir);
    });
  });
/**
 * 测试
 *  $ node arguments.js rmdir a b c
 */

// 4. convenience method to add multiple arguments
program
  .command('uap')
  .description('username and password')
  .arguments('<username> [password]')
  .action((u: string, p: string) => {
    console.log(u);
    console.log(p);
  });

/**
 * 测试
 *  $ node arguments.js uap myuername mypassword
 */

program.parse();
