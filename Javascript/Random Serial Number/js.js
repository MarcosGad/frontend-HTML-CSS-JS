/*global console*/ 

function generateserial() {
    
    'use strict'; 
    
    var chars = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
        
        serialLength = 20, // 3dad 7rofa al serial
        
        randomSerial = '', // t3rfha 
        
        i, // t3rfha 
        
        randomNum; // t3rfha
        
        
        
    
    
    for (i = 0; i < serialLength; i++) { // i = i + 1 
        
        randomNum = Math.floor(Math.random() * chars.length); // l2ntag randomNum
        
        randomSerial += chars.substring(randomNum , randomNum + 1);  // hefdla + w = tol ma al loop sh9al 
        
        // substring() aly b7dad mnha al mkan aly b2t3a mno f al string w hna al bdya htkon takm randomNum w b3d kd hy2t3a 1 w b3den al for 
        
    }
    
    document.getElementById('serial').innerHTML = randomSerial; 
}

