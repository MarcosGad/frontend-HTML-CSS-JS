function hoverButton() {
    
    document.getElementById("butt").style.backgroundColor = "#080"; 
}


function hover() {
    
    document.getElementById("butt").style.backgroundColor = "#00bc8a"; 
}


function show() {
    
    document.getElementById("butttwo").style.visibility = "visible"; 
}


function hide() {
    
    document.getElementById("butttwo").style.visibility = "hidden"; 
}


function clc() {
    
    document.getElementById("clics").style.color = "#f50"; 
    document.getElementById("clics").style.textDecoration = "underline"; 
}


function valid() {
    
    var t = prompt("Name ..."); 
    
    if (t == "marcos") {
        
        window.location = "index.html"; 
    }else {
        
        alert("Wrong!  ")
    }
}










