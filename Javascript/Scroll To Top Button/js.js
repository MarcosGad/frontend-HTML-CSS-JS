/*global console*/

var myButton = document.getElementById('go-up')

window.onscroll = function () {
    
    'use strict'; 
    
   // console.log(window.pageYOffset); // ad eh nazlt mn fo2 bla scroll
    
    if (window.pageYOffset >= 800) {
        
        myButton.style.display = 'block'; // azhra al Button
        
    } else {
        
         myButton.style.display = 'none'; // a5fia al Button
    }
    
    
}; 

 // click on button  

 myButton.onclick = function () {
     
     'use strict';
     
     window.scrollTo(0, 0); 
 }; 
 