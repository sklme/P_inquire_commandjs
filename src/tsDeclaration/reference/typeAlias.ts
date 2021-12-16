/// <reference path="typeAlias.d.ts" />

function getGreeting() {
  return 'howdy';
}

greet('hello');
greet(getGreeting);
greet(new MyGreeter());
