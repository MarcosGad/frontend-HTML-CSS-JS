
var TheDiv = document.getElementById("myDiv");   /* global */ 

function openDiv(){
    
    TheDiv.style.transform = "scale(1)"
    
}


// scale 1 = open      scale 0 = close 


function closeDiv(){
    
    
    TheDiv.style.transform = "scale(0)"
    
}