import inquirer, {
  InputQuestion,
  ConfirmQuestion,
  ListQuestion,
  ExpandQuestion,
  RawListQuestion,
} from 'inquirer';

console.log('Hello, welcome to Ndoe Pizza');

const questions: [
  ConfirmQuestion,
  InputQuestion,
  ListQuestion,
  InputQuestion,
  ExpandQuestion,
  RawListQuestion,
  InputQuestion,
  ListQuestion,
] = [
  {
    type: 'confirm',
    name: 'toBeDelivered',
    message: 'Is this for delivery?',
    default: false,
  },
  {
    type: 'input',
    name: 'phone',
    validate(userInput, answers) {
      console.log('phone validate answers：');
      console.log(answers);
      const pass = (userInput as string).match(
        /^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/,
      );

      return pass ? true : 'Please enter a valid phone number';
    },
  },
  {
    type: 'list',
    name: 'size',
    message: 'What size do you want?',
    choices: ['Large', 'Medium', 'Small'],
  },
  {
    type: 'input',
    name: 'quantity',
    message: 'How many do you need?',
    filter: Number,
    validate(userInput) {
      const valid = !isNaN(parseFloat(userInput));
      return valid || 'Please enter a number';
    },
  },
  {
    type: 'expand',
    name: 'toppings',
    message: 'What about the toppings?',
    choices: [
      {
        key: 'p',
        name: 'Pepperoni and cheese',
        value: 'PepperoniCheese',
      },
      {
        key: 'a',
        name: 'All dressed',
        value: 'alldressed',
      },
      {
        key: 'w',
        name: 'Hawaiian',
        value: 'hawaiian',
      },
    ],
  },
  {
    type: 'rawlist',
    name: 'beverage',
    message: 'You also get a free 2L beverage',
    choices: ['Pepsi', '7up', 'Coke'],
  },
  {
    type: 'input',
    name: 'comment',
    message: 'Any comments on your purchase experience?',
    default: 'Nope, all good!',
  },
  {
    type: 'list',
    name: 'prize',
    message: 'For leaving a comment, you get a freebie',
    choices: ['cake', 'fries'],
    when(answers) {
      return answers.comments !== 'Nope, all good!';
    },
  },
];

void inquirer.prompt(questions).then((answers) => {
  console.log('\nOrder receipt:');
  console.log(answers);
  console.log(JSON.stringify(answers, null, ' '));
});
