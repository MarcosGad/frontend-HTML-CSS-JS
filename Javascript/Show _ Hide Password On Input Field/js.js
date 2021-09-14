/*global console*/

var myButton = document.getElementById('my-button'),
    
    myInput = document.getElementById('my-input');

myButton.onclick = function () {
    
    'use strict'; 
    
    if (this.textContent === 'Show Password') { // lo al buuton mktob fa Show Password
    
    myInput.setAttribute('type' , 'text'); // w hna ha7ola type al input ali text 
    
    this.textContent = 'Hide Password' // 5lyla ale mktob 3la button Hide Password
    
    } else {
        
       myInput.setAttribute('type' , 'password'); // w hna ha7ola type al input ali pw
    
       this.textContent = 'Show Password' // 5lyla ale mktob 3la button Show Password
    }
}; 

 