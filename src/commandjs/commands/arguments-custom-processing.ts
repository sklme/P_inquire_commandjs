import { InvalidArgumentError, program } from 'commander';

function myParseInt(value: string) {
  // parseInt takes a string and a radix
  const parsedValue = parseInt(value, 10);
  if (isNaN(parsedValue)) {
    throw new InvalidArgumentError('Not a number.');
  }
  return parsedValue;
}

// The previous value passed to the custom processing is used when processing variadic values.
function mySum(value: string, total: number) {
  return total + myParseInt(value);
}

program
  .command('add')
  .argument('<first>', 'integer argument', myParseInt)
  .argument('[second]', 'integer argument', myParseInt, 1000)
  .action((first: number, second: number) => {
    console.log(`${first} + ${second} = ${first + second}`);
  });

program
  .command('sum')
  .argument('<value...>', 'values to be summed', mySum, 0)
  .action((total: number) => {
    console.log(`sum is ${total}`);
  });

program.parse();

// Try the following:
//    node arguments-custom-processing add --help
//    node arguments-custom-processing add 2
//    node arguments-custom-processing add 12 56
//    node arguments-custom-processing sum 1 2 3
//    node arguments-custom-processing sum silly
