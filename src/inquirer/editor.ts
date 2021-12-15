import inquirer, { EditorQuestion } from 'inquirer';

const questions: EditorQuestion[] = [
  {
    type: 'editor',
    name: 'bio',
    message: 'Please write a short bio of at least 3 lines.',
    validate(text: string) {
      if (text.split('\n').length < 3) {
        return 'Must be at least 3 lines.';
      }
      return true;
    },
  },
];

void inquirer.prompt(questions).then((answers) => {
  console.log(JSON.stringify(answers, null, '  '));
});
