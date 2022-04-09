document.body.myData = {
    name: 'Caesar',
    title: 'Imperator'
};

console.log(document.body.myData.title);


document.body.sayTagName = function() {
  console.log(this.tagName);
};

document.body.sayTagName();

Element.prototype.sayHi = function() {
  console.log(`Hello, I'm ${this.tagName}`);
};

document.documentElement.sayHi();
document.body.sayHi();


document.body.style.backgroundColor = "lightyellow"


div.style.cssText = `
    color: red;
    width: 100px;
    text-align: center;
`

console.log(div.style.cssText);

