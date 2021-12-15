import inquirer, { InputQuestion } from 'inquirer';
import chalkPipe from 'chalk-pipe';

const questions: InputQuestion[] = [
  {
    type: 'input',
    name: 'first_name',
    message: "What's your first name",
  },
  {
    type: 'input',
    name: 'last_name',
    message: "What's your last name",
    default() {
      return 'Doe';
    },
  },
  {
    type: 'input',
    name: 'fav_color',
    message: "What's your favorite color",
    transformer(color, answers, flags) {
      const text: string = chalkPipe(color)(color);
      if (flags.isFinal) {
        return text + '!';
      }

      return text;
    },
  },
];

void inquirer.prompt(questions).then((answers) => {
  console.log(JSON.stringify(answers, null, '  '));
});
