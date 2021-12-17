import Bar, { X } from './declarationFileCombination.js';
import x from './tsProvide.js';

console.log(Bar.a.count);
console.log(x);
console.log('X');
console.log(X);
console.log(X.xx);

const test: X.X = {
  xx: 2,
};

console.log(test);
