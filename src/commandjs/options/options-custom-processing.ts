import { Command, InvalidArgumentError } from 'commander';

const program = new Command();

function myParseInt(value: string) {
  const praserValue = parseInt(value, 10);

  if (isNaN(praserValue)) {
    throw new InvalidArgumentError('Not a Number.');
  }

  return praserValue;
}

function increaseVerbosity(dummyValue: string, previous = 0) {
  return previous + 1;
}

function collect(value: string, previous: string[] = []) {
  return previous.concat(value);
}

function commaSeparatedList(value: string) {
  return value.split(',');
}

program
  .option('-f, --float <number>', 'float argument', parseFloat)
  .option('-i, --integer <number>', 'integer arguments', myParseInt)
  .option('-v, --verbose', 'verbose that can be increase', increaseVerbosity, 0)
  .option('-c, --collect <value>', 'repeatable value', collect, [])
  .option('-l, --list <items>', 'comma, sperated list', commaSeparatedList)
  .parse();

console.log('所有参数：', program.opts());

/**
 * 测试
 *  node options-custom-processing --integer 2
 *  node options-custom-processing -v -v -v
 *  node options-custom-processing -c a -c b -c c
 *  node options-custom-processing --list x,y,z
 */
