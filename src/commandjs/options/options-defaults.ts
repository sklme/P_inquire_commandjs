import { program } from 'commander';

program.option(
  '-c, --cheese <type>',
  'add the specified type of cheese',
  'blue',
);

// 默认是参数是process.argv
program.parse();

console.log(`cheese: ${program.opts().cheese as string}`);
