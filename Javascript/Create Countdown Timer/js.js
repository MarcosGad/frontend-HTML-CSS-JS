/*global console*/ 

var seconds = 12,    // al seconds 
    
    countDiv = document.getElementById('count-down'),
    
    countDown = setInterval(function () { // setInterval lltsh9la w al f7sa kol 1000ms 
        
        'use strict'; 
        
           secondsPass(); // tsht9la kol 1000 ms 
              
        
    }, 1000); 

function secondsPass() {
    
     'use strict'; 
    
    var minutes = Math.floor(seconds / 60), // 3ashn a7sba al minute 
        
        remSeconds = seconds % 60; // w hna bakya al ksma 
    
    if (seconds < 10) {
        
        remSeconds = "0" + remSeconds; // 3ashn lma yb2a mn 9 ed3a 2blha 0 
        
    }
    
    countDiv.innerHTML = minutes + ':' + remSeconds; 
    
    if(seconds > 0) {
        
        seconds = seconds - 1; // n2sa 1 kol 1000 ms 
        
    }else {
        
        clearInterval(countDown); // lma ywsla lla 0 w2fa setInterval
        
        countDiv.innerHTML = "Done"; 
    }
    
}


