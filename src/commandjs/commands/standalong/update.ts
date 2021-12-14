import { program } from 'commander';

program.description('更新所有的package').action(() => {
  console.log('所有的包都更新了！！！');
});

program.parse();
