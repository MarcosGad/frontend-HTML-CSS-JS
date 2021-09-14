/*global $*/ 

$(function () {
    
    'use strict'
    
    var ourCountdown = setInterval(function () { // setInterval anha tsht9la w rfrash kol 1000
        
        var counter = parseInt($('.countdown').html()); // parseInt yhol al text al number
        
        if(counter !== 0) {
            
            $(".countdown").html(counter - 1); // kol 1000ms n2sa 1 
            
        } else {
            
            clearInterval(ourCountdown); // yw2fa setInterval
            
            $(".countdown").html('Done'); // ytl3a rsalt Done w momkn msln a7ola 3la mkan a3ml 7ga tatlon al body y7slo 7ga 
            
            
        }
        
        
    }, 1000); 
    
    
}); 