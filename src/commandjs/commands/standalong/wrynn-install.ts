import { program } from 'commander';

program.description('安装程序').option('-f, --force', 'force installation');

program.parse();

const pkgs = program.args;

if (!pkgs.length) {
  console.error('packages required');
  process.exit(1);
}

console.log();
if (program.opts().force) console.log('force: install');
pkgs.forEach((pkg) => {
  console.log('   install: %s', pkg);
});
console.log();
