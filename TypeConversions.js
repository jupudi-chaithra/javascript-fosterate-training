let value = true
console.log(typeof(value));

value = String(value)
console.log(typeof(value));


console.log("6" / "2");

let str = "123"
console.log(typeof(str));
str = Number(str)
console.log(typeof(str));


let age = Number("an arbitrary string instead of a number");
console.log(age)


console.log( Number("   123   "));
console.log( Number("123z") );
console.log( Number(true) );
console.log( Number(false) );



console.log( Boolean(1) );
console.log( Boolean(0) );

console.log( Boolean("hello") );
console.log( Boolean("") );


element = "3"
console.log(typeof(element));
element = (+element)
console.log(typeof(element));

element = true
console.log(typeof(element));
element = (+element)
console.log(typeof(element), element);
