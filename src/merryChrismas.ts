#!/usr/bin/env node
import gradient from 'gradient-string';
import inquirer from 'inquirer';
const renderGradient = function (str: string) {
  console.log(
    gradient(['#feff00', '#fefe00']).multiline(str, {
      interpolation: 'hsv',
      hsvSpin: 'long',
    }),
  );
};

function ask() {
  inquirer
    .prompt([
      {
        type: 'confirm',
        name: 'q',
        message: '大胆是最厉害的狗吗？',
      },
    ])
    .then((answer) => {
      if (!answer.q) {
        console.log(gradient.fruit('本汪劝你再回答一次'));
        ask();
      } else {
        renderTree();
      }
    });
}

function renderTree() {
  let asciiTree = `
         |
        -+-
        /=\\               /\\  /\\    ___  _ __  _ __ __    __
      i/ O \\i            /  \\/  \\  / _ \\| '__|| '__|\\ \\  / /
      /=====\\           / /\\  /\\ \\|  __/| |   | |    \\ \\/ /
      /  i  \\           \\ \\ \\/ / / \\___/|_|   |_|     \\  /
    i/ O * O \\i                                       / /
    /=========\\        __  __                        /_/    _
    /  J   R  \\        \\ \\/ /        /\\  /\\    __ _  ____  | |
  i/ S   K   L \\i       \\  /   __   /  \\/  \\  / _\` |/ ___\\ |_|
  /=============\\       /  \\  |__| / /\\  /\\ \\| (_| |\\___ \\  _
  /  O   i   O  \\      /_/\\_\\      \\ \\ \\/ / / \\__,_|\\____/ |_|
i/ *   O   O   * \\i                
/=================\\                新的一年铲屎官们多挣钱
       | * |                    
       |___|  
`;

  renderGradient(asciiTree);
}

ask();
