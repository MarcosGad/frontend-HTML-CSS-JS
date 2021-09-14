/*global console*/ 
//console.log(myText[4]); // lo 3eza atb3a masln 7arf o 

var myText = 'Hello gays', 
    i = 0,
    myButton = document.getElementById('button'); 

myButton.onclick = function () {
    'use strict'; 
    
    var typeWriter = setInterval(function () { // bola kol 200 hy7sla tkrora ll code 
        
        document.getElementById('type').textContent += myText[i]; 
        
        i = i + 1; // w hna hegab al 7olrfa al myText wra b3da 
        
        if(i > myText.length - 1) {  // -1 3ashn e7sba 3dad 7rofa al myText kolha 
            
            clearInterval(typeWriter); // 3ashn lma y5las al text my3mlash unf...
        }
        
    }, 200); 
    
}; 


