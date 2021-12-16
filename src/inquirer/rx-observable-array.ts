import inquirer from 'inquirer';
import { from } from 'rxjs';
const questions = [
  { type: 'input', name: 'first_name', message: "What's your first name" },
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
    name: 'phone',
    message: "What's your phone number",
    validate() {
      return true;
    },
  },
];

console.log(questions);
const observable = from(questions);

inquirer.prompt(observable as any).ui.process.subscribe(
  (ans) => {
    console.log('Answer is: ', ans);
  },
  (err) => {
    console.log('Error: ', err);
  },
  () => {
    console.log('Completed');
  },
);
