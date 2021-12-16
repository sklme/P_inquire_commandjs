import inquirer, { Question } from 'inquirer';

const output: string[] = [];

const questions: Question[] = [
  { type: 'input', name: 'tvShow', message: "What's your favorite TV show?" },
  {
    type: 'confirm',
    name: 'askAgain',
    message: 'Want to enter another TV show favorite (just hit enter for YES)?',
    default: true,
  },
];

async function ask() {
  const answers = await inquirer.prompt(questions);
  output.push(answers.tvShow);
  if (answers.askAgain) {
    await ask();
  } else {
    console.log('Your favorite TV Shows:', output.join(', '));
  }
}

void ask();
