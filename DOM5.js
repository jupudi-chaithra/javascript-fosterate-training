function changeText(id) {
  id.innerHTML = "Ooops!";
}


function upperCase() {
  const x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}

function mOver(obj) {
  obj.innerHTML = "Thank You"
}

function mOut(obj) {
  obj.innerHTML = "Mouse Over Me"
}


function mDown(obj) {
  obj.style.backgroundColor = "skyblue";
  obj.style.color = "black"
  obj.innerHTML = "Release Me";
}

function mUp(obj) {
  obj.style.backgroundColor="yellow";
  obj.innerHTML="Thank You";
}