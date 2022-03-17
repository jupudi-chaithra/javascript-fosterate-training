let x = 3
if(x == 3)
    console.log("hello");
else
    console.log("hi");


let year = 2022
if(year == 2021)
    console.log("Yes it is 2021");
else if(year == 2000)
    console.log("No it is 2000");
else
    console.log("Its neither 2000 nor 2021");


let z = 1
let result = (z > 2) ? "That's true" : "Oh oops, wrong answer"

console.log(z, result)


let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

console.log(message)