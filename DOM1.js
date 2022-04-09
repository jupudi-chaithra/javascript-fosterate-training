/*document.getElementById("demo").innerHTML = "Hello world!"

document.body.style.background = "skyblue"

setTimeout(() => document.body.style.background = "white", 5000)


console.log("--------------------------------------------");
for(let i = 0; i < document.body.childNodes.length; i++)
    console.log(document.body.childNodes[i]);
console.log("--------------------------------------------");

console.log(document.body.firstChild);
console.log("--------------------------------------------");
*/


let elem = document.getElementById("demo2")
elem.style.background = "yellow"


let elements = document.querySelectorAll('ul > li:last-child')

for(let elem of elements)
    console.log(elem.innerHTML);

let chapter = document.querySelector('.chapter')
console.log(chapter);

console.log(chapter.closest('.book'));
console.log(chapter.closest('.contents'));

console.log(chapter.closest('h1'));



let inputs = table.getElementsByTagName('input');

for (let input of inputs) {
  console.log( input.value + ': ' + input.checked );
}