let now = new Date();
console.log(now);



let Jan01_1970 = new Date(0);
console.log(Jan01_1970);

let Jan02_1970 = new Date(24 * 3600 * 1000);
console.log(Jan02_1970);


let Dec31_1969 = new Date(-24 * 3600 * 1000);
console.log(Dec31_1969);

let date = new Date("2017-01-26");
console.log(date);

new Date(2011, 0, 1, 0, 0, 0, 0); // 1 Jan 2011, 00:00:00
new Date(2011, 0, 1);



date = new Date();

// the hour in your current time zone
console.log( date.getHours() );

// the hour in UTC+0 time zone (London time without daylight savings)
console.log( date.getUTCHours() );


let x = new Date('August 19, 1975 23:15:30');
x.setFullYear(1969);
console.log(x.getFullYear());
x.setFullYear(0);
console.log(x.getFullYear());


x = new Date('August 19, 1975 23:15:30');
x.setMonth(3);
console.log(x.getMonth());
console.log(x);


x = new Date('August 19, 1975 23:15:30');
x.setDate(24);
console.log(x.getDate());
x.setDate(32);
console.log(x.getDate());

date = new Date(2013, 0, 32)
console.log(date)