/*global console*/ 

function showTime () {
    
    'use strict'; 
    var now = new Date(),
    hours = now.getHours(),
    minutes = now.getMinutes(), 
    seconds = now.getSeconds(); 
    
    if (hours < 10) {
        
        hours = '0' + hours; 
        
    }
    
    if (minutes < 10) {
        
        minutes = '0' + minutes; 
        
    }
    
    if (seconds < 10) {
        
        seconds = '0' + seconds; 
        
    }


   // console.log(now); 
    
document.getElementById('clock').textContent = hours + ':' + minutes + ':' + seconds;
    
};



window.onload = function () { // w hna b2ol awla ma al page e3mla load sh9la al fun 3n tri2a setInterval w ho betlob al fun w al ms // e3na sh9la al fun da kol 500ms 
    
    'use strict';
    
    setInterval(showTime, 500); 
}; 

