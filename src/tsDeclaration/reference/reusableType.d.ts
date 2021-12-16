interface GreetingSettings {
  greeting: string;
  duration?: number;
  color?: string;
}

declare function greet(g: GreetingSettings): void;
