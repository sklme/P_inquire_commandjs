import inquirer, { InputQuestion } from 'inquirer';

interface MyInputQuestion extends InputQuestion {
  filteringText?: string;
  validatingText?: string;
}

const questions: MyInputQuestion[] = [
  {
    type: 'input',
    name: 'first_question',
    message: 'Question with filtering and validating text',
    async validate() {
      await new Promise((r) => setTimeout(r, 3000));
      return true;
    },
    async filter(answer: string) {
      await new Promise((r) => setTimeout(r, 3000));
      return `filtered${answer}`;
    },
    filteringText: 'Filtering your answer...',
    validatingText: 'Validating what you wrote...',
  },
  {
    type: 'input',
    name: 'second_question',
    message: 'Question without filtering and validating text',
    validate: async () => {
      await new Promise((r) => setTimeout(r, 3000));
      return true;
    },
    filter: async (answer: string) => {
      await new Promise((r) => setTimeout(r, 3000));
      return `filtered${answer}`;
    },
  },
];

void inquirer.prompt(questions).then((answers) => {
  console.log(JSON.stringify(answers, null, '  '));
});
