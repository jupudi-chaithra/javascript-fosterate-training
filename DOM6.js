document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("demo").innerHTML = "hello there!"
}

let count = 1
document.getElementById("change").addEventListener("click", function(){
    console.log(count);
    if(count % 2 == 0)
    {
        toFlower();
        count++
    }
    else
    {
        toBird()
        count++
    }
});

function toFlower(){
    if(count % 2 == 0){
        document.getElementById("image").src = "bird.jpg"
    }
}

function toBird(){
    if(count % 2 != 0){
        document.getElementById("image").src = "flower.jpg"
    }
}



var x = document.getElementById("myBtn2");
x.addEventListener("mouseover", myFunction);
x.addEventListener("click", mySecondFunction);
x.addEventListener("mouseout", myThirdFunction);

function myFunction() {
  document.getElementById("demo2").innerHTML += "Moused over!<br>";
}

function mySecondFunction() {
  document.getElementById("demo2").innerHTML += "Clicked!<br>";
}

function myThirdFunction() {
  document.getElementById("demo2").innerHTML += "Moused out!<br>";
}


const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);
const element = document.getElementById("div1");
element.appendChild(para);

