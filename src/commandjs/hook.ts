import { program } from 'commander';

const timeLabel = 'command duration';

// 计时的动作
program
  .option('-p, --profile', 'show how long command takes')
  .hook('preAction', (thisComannd) => {
    if (thisComannd.opts().profile) {
      console.time(timeLabel);
    }
  })
  .hook('postAction', (thisCommand) => {
    if (thisCommand.opts().profile) {
      console.timeEnd(timeLabel);
    }
  });

// trace
program
  .option('-t, --trace', 'display trace statements for commands')
  .hook('preAction', (thisCommand, actionCommand) => {
    if (thisCommand.opts().trace) {
      console.log('>>>>');
      console.log(
        `About to call action handler for subcommand: ${actionCommand.name()}`,
      );
      console.log('arguments: %O', actionCommand.args);
      console.log('options: %o', actionCommand.opts());
      console.log('<<<<');
    }
  });

// 同步方法
program
  .command('hello')
  .option('-e, --example')
  .action(() => console.log('Hello, world'));

// 异步的方法
program
  .command('delay')
  .option(
    '--message <value>',
    'custom message to display',
    'Thanks for waiting',
  )
  .argument('[seconds]', 'how long to delay', '1')
  .action(async (waitSeconds: string, options: { [k: string]: string }) => {
    await new Promise((resolve) =>
      setTimeout(resolve, parseInt(waitSeconds) * 1000),
    );
    console.log(options.message);
  });

// Some of the hooks or actions are async, so call parseAsync rather than parse.
void program.parseAsync();

// Try the following:
//  node hook.js hello
//  node hook.js --profile hello
//  node hook.js --trace hello --example
//  node hook.js delay
//  node hook.js --trace delay 5 --message bye
//  node hook.js --profile delay
