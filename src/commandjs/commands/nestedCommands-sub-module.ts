// command could be created separately in another module

import { Command } from 'commander';

const external = new Command('external');

external.command('ext').action(() => {
  console.log('this command is from separate module');
});

export default external;
