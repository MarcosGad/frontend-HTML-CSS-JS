/*global console*/ 

var myTextarea = document.getElementById('my-text'), 
    
    mySpan = document.getElementById('my-span'); 


myTextarea.onkeyup = function () {
    
    'use strict'; 
    
    mySpan.textContent = 50 - this.value.length; // b2olo 50 - aly val btkatb fa textarea
    
    //mySpan.textContent < 0 ? mySpan.style.color = '#F00' : mySpan.style.color = '#000'; 
    
    if(mySpan.textContent < 0) {
        
        mySpan.style.color = '#F00'; 
        
    }else {
         mySpan.style.color = '#000'; 
        
    }
    
}; 
    
