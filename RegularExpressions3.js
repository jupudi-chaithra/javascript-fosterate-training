console.log('😄'.length)
console.log('𝒳'.length);

let str = "A ბ ㄱ";
console.log(str.match(/\p{L}/gu));
console.log(str.match(/\p{L}/g));


regexp = /x\p{Hex_Digit}\p{Hex_Digit}/u;

console.log("number: xAF".match(regexp))


regexp = /\p{sc=Han}/gu;
str = `Hello Привет 你好 123_456`;
console.log( str.match(regexp) )


regexp = /\p{Sc}\d/gu;
str = `Prices: $2, €1, ¥9`;
console.log( str.match(regexp))

console.log("----------------------------------------------");

let str1 = "Mary had a little lamb"
console.log(/^Mary/.test(str1));
console.log(/^had/.test(str1));

console.log(/lamb$/.test(str1));
console.log(/had$/.test(str1));


let good = "12:34"
let bad = "12:345"


regexp = /^\d\d:\d\d$/

console.log(regexp.test(good));
console.log(regexp.test(bad));



str = `1st place: Winnie
2nd place: Piglet
3rd place: Eeyore`;

console.log( str.match(/^\d/gm) );
console.log( str.match(/^\d/g) );


str = `Winnie: 1
Piglet: 2
Eeyore: 3`;

console.log( str.match(/\d$/gm) );
console.log( str.match(/\d$/g) );



str = `Winnie: 1
Piglet: 2
Eeyore: 3`;

console.log( str.match(/\d\n/g) );


console.log("Hello, Java!".match(/\bJava\b/));
console.log("Hello, JavaScript!".match(/\bJava\b/));


console.log("Chapter 5.1".match(/\d\.\d/));
console.log("Chapter 511".match(/\d\.\d/));

console.log("Hello/".match(/\//));
console.log("Hello".match(/\//));