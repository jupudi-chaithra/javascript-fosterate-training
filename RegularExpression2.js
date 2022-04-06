let str = "+7(903)-123-45-67"
let regexp = /\d/
console.log(str.match(regexp));

regexp = /\d/g
console.log(str.match(regexp));
console.log(str.match(regexp).join(''));


str = "Is there4 CSS4"
regexp = /CSS\d/
let regexp2 = /4\s\w/ig

console.log(str.match(regexp));
console.log(str.match(regexp2));


console.log("I love HTML5!".match(/\s\w\w\w\w\d/));



str = "+7(903)-123-45-67";
console.log(str.match(/\D/ig));
console.log(str.replace(/\D/g, ""));

console.log("Z".match(/./));


regexp = /CS.4/;
console.log("CSS4".match(regexp));
console.log("CS-4".match(regexp));
console.log("CS 4".match(regexp));
console.log("CS4".match(/CS.4/))


console.log("A\nB".match(/A.B/));
console.log("A\nB".match(/A.B/s));

