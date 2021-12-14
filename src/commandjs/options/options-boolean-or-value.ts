import { program } from 'commander';

/**
 * You can specify an option which may be used as a boolean option but may optionally take an option-argument
 * (declared with square brackets like --optional [value]).
 */
program.option('-c, --cheese [value]', 'Add cheese with optional type').parse();

const options = program.opts();
console.log('所有参数：', options);
if (options.cheese === undefined) console.log('no cheese');
else if (options.cheese === true) console.log('add cheese');
else console.log(`add cheese type ${<string>options.cheese}`);
