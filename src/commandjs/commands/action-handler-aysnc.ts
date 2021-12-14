// 异步的action handler

import { program } from 'commander';

async function main() {
  console.log('--- start ---');
  program
    .command('run')
    .argument('[name]', '程序的名字', '北风')
    .action(async (name: string) => {
      return new Promise((r) => {
        setTimeout(() => {
          console.log(`${name}已经执行完毕！`);
          r();
        }, 1000);
      });
    });
  await program.parseAsync(process.argv);
  console.log('--- end ---');
}

void main();

/**
 * 测试
 *  node action-handler-aysnc.js run
 *  node action-handler-aysnc.js run 测试
 */
