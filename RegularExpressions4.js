console.log("Mop Top".match(/[tm]op/gi))

console.log("Voila".match(/V[oi]la/));

console.log("alice15@gmail.com".match(/[^\d\sA-Z]/gi));


let regexp = /[-().^+]/g;
console.log( "1 + 2 - 3".match(regexp) );

console.log("I'm 12345 years old".match(/\d{5}/));
console.log("I'm not 12, but 1234 years old".match(/\d{3,5}/))
console.log("I'm not 12, but 345678 years old".match(/\d{3,}/));


let str = "+7(903)-123-45-67"
let numbers = str.match(/\d{1,}/g);
console.log(numbers);

str = "Should I write color or colour?";

console.log( str.match(/colou?r/g));

console.log("100 10 1".match(/\d0*/g));


console.log('Gogogo now!'.match(/(go)+/ig));

str = "I love JavaScript";

let result = str.match(/Java(Script)/);

console.log( result[0] );
console.log( result[1] );
console.log( result.length );

console.log( result.index );
console.log( result.input );



str = "I love JavaScript";

result = str.match(/Java(Script)/g);

console.log( result[0] );
console.log( result.length ); 