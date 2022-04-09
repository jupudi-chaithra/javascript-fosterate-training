document.getElementById("demo").innerHTML = "Okay then"
document.getElementById("demo").style.color = "red"

let h2 = document.createElement("h2")
h2.innerHTML = "I'm back"
document.body.appendChild(h2)



function sample(){
    document.getElementById("demo").style.backgroundColor = "skyblue"
}

document.getElementById("btn").onclick = sample

let elem = document.getElementById("demo")

document.getElementById("intro").innerHTML = elem.innerHTML + " Welcome to DOM"




element = document.getElementsByTagName("p");
document.getElementById("demos").innerHTML = 'The text in first paragraph (index 0) is: ' + element[0].innerHTML;
document.getElementById("demos").innerHTML = 'The text in first paragraph (index 1) is: ' + element[1].innerHTML;
document.getElementById("demos").innerHTML = 'The text in first paragraph (index 2) is: ' + element[2].innerHTML;

console.log(element);

function changePicture(){
    document.getElementById("bird").src = "flower.jpg"
}

document.getElementById("btn2").onclick = changePicture


let count = 0 
function increment(){
    count++;
    console.log(count);
}
document.getElementById("btn3").onclick = increment


document.getElementById("sample").innerHTML = "Date : " + Date();




document.write("Hello")