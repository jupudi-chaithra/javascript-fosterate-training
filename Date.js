let d = new Date()
console.log(d);

d = new Date(2020, 6, 13)
console.log(d);

d = new Date(15000000000000)
console.log(d);

d = new Date(2018, 11, 24, 10, 33);
console.log(d);

d = new Date(2018, 11, 24);
console.log(d);

d = new Date(2018, 11);
console.log(d);

d = new Date("October 13, 2014 11:13:00");
console.log(d);

d = new Date(-1648605866029)
console.log(d);

d = new Date()
console.log(d.getTime());
console.log(d.getFullYear());
console.log(d.getDate());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getMilliseconds());
console.log(d.getTime());
console.log(d.getDay());


const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

d = new Date();
let month = months[d.getMonth()];
console.log(month);

console.log(d.getUTCHours());