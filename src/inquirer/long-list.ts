import inquirer from 'inquirer';

const choices: any[] = Array.apply(0, new Array(26)).map((x, y) =>
  String.fromCharCode(y + 65),
);
choices.push('Multiline option 1\n  super cool feature \n  more lines');
choices.push('Multiline option 2\n  super cool feature \n  more lines');
choices.push('Multiline option 3\n  super cool feature \n  more lines');
choices.push('Multiline option 4\n  super cool feature \n  more lines');
choices.push('Multiline option 5\n  super cool feature \n  more lines');
choices.push(new inquirer.Separator());
choices.push({
  name: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.',
  value: 'foo',
  short: 'The Long Option',
});

void inquirer
  .prompt([
    {
      type: 'list',
      name: 'letter',
      message: "What's your favorite letter?",
      loop: false,
      choices,
    },
    {
      type: 'checkbox',
      name: 'name',
      message: 'Select the letter contained in your name:',
      choices,
    },
  ])
  .then((answers) => {
    console.log(answers);
  });
