/*global console*/ 
 
                 // w da al hadfa mno 3ashn anfza al fun 3la ay mkan l sora ana 3ezo 
var myElement = document.getElementById('my-img'),
    
    myImgs = [
        
        '1.jpg',    // index 0 
        '2.jpg',    // index 1 
        '3.png',    // index 2
        '4.jpg'     // index 3 
    ];

   

//console.log(myRandomNum); 
//console.log(myImgs[myRandomNum]); //0 or 1 or 2 or 3 

function changeImage (myElement , myImgs) { // 5da 7gtan al 3onsr bt3ya aly momkn et9er b3onsra tany 3ashn tatnfza f mkan tany w imgs btw3ya
    
    'use strict'; 
    
  setInterval(function () { // setInterval 3ashn yanfza al fun kol 3dad ms 
        
 var myRandomNum = Math.floor(Math.random() * myImgs.length); // rakm 3sho2a * 4 w n2rab 
        
 myElement.src = myImgs[myRandomNum]; // y9er al src blrakm 
        
    }, 1000);
    
}

changeImage(myElement, myImgs); 


