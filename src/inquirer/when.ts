import inquirer from 'inquirer';

const questions = [
  {
    type: 'confirm',
    name: 'bacon',
    message: 'Do you like bacon?',
  },
  {
    type: 'input',
    name: 'favorite',
    message: 'Bacon lover, what is your favorite type of bacon?',
    when(answers: any) {
      return answers.bacon;
    },
  },
  {
    type: 'confirm',
    name: 'pizza',
    message: 'Ok... Do you like pizza?',
    when(answers: any) {
      return !likesFood('bacon')(answers);
    },
  },
  {
    type: 'input',
    name: 'favorite',
    message: 'Whew! What is your favorite type of pizza?',
    when: likesFood('pizza'),
  },
];

function likesFood(aFood: string) {
  return function (answers: any) {
    return answers[aFood];
  };
}

void inquirer.prompt(questions).then((answers) => {
  console.log(JSON.stringify(answers, null, '  '));
});
