//let func = (args) => expression;

let sum = (a, b) => a + b;

console.log(sum(3, 5));

let age = prompt("What is your age?", 18);

let welcome = (age < 18) ? () => alert('Hello') : () => alert("Greetings!");

welcome();