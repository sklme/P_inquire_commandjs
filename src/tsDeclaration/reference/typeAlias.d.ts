// Anywhere a greeting is expected, you can provide a string, a function returning a string, or a Greeter instance.

declare class Greeter {}
declare class MyGreeter extends Greeter {}
type GreetingLike = string | (() => string) | MyGreeter;

declare function greet(g: GreetingLike): void;
