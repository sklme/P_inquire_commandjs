import inquirer from 'inquirer';

void inquirer
  .prompt([
    {
      type: 'expand',
      message: 'Conflict on `file.js`: ',
      name: 'conflictAction',
      choices: [
        {
          key: 'y',
          name: 'Overwrite',
          value: 'overwrite',
        },
        {
          key: 'a',
          name: 'Overwrite this one and all next',
          value: 'overwrite_all',
        },
        {
          key: 'd',
          name: 'Show diff',
          value: 'diff',
        },
        new inquirer.Separator(),
        {
          key: 'x',
          name: 'Abort',
          value: 'abort',
        },
      ],
    },
  ])
  .then((answers) => {
    console.log(answers);
  });
