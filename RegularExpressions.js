let regexp = /pattern/gmi

/*let tag = prompt("What tag do you want to find?", "h2");

regexp = new RegExp(`<${tag}>`);*/


let str = "We will, we will rock you"
console.log(str.match(/we/gi))
console.log(str.match(/we/g))
console.log(str.match(/we/))
console.log(str.match(/we/i))


res = str.match(/we/i)
console.log(res.length);
console.log(res[0]);
console.log(res.index);
console.log(res.input);

let matches = "Javascript"
console.log(matches.match(/we/gi));


console.log("We will, we will".replace(/we/i, "I"));
console.log("We will, we will".replace(/we/gi, "I"));
console.log("We will, we will".replace(/we/g, "I"));


console.log("I love HTML".replace(/HTML/, "$& and JavaScript"));


str = "I love JS"
let str2 = "hey"
regexp = /LOVE/i

console.log(regexp.test(str))
console.log(regexp.test(str2))
