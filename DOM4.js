function validate(){
    let x = document.forms["Sample"]["fname"].value;
    let text
    if(x == ""){
        let h5 = document.createElement("h5")
        h5.innerHTML = "Name needs to be filled"
        h5.style.color = "red"
        
        text = h5
    }

    else{
        let h3 = document.createElement("h3")
        h3.innerHTML = document.forms["Sample"]["fname"].value;
        //document.getElementById("demo").innerHTML = "Name: " + h3.innerHTML

        text = h3
    }

    document.getElementById("demo").innerHTML = text

}

document.getElementById("p2").style.color = "blue";
document.getElementById("p2").style.fontFamily = "Arial";
document.getElementById("p2").style.fontSize = "larger";