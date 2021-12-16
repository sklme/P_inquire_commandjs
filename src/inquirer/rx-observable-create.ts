import inquirer from 'inquirer';
import { Observable } from 'rxjs';

const observe = Observable.create((obs: any) => {
  obs.next({
    type: 'input',
    name: 'first_name',
    message: "What's your first name",
  });

  obs.next({
    type: 'input',
    name: 'last_name',
    message: "What's your last name",
    default() {
      return 'Doe';
    },
  });

  obs.next({
    type: 'input',
    name: 'phone',
    message: "What's your phone number",
    validate() {
      return true;
    },
  });
  obs.complete();
});

void inquirer.prompt(observe).then((answers) => {
  console.log(JSON.stringify(answers, null, '  '));
});
