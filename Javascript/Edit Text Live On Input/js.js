/*global console*/ 

var myTitle = document.getElementById('title'), 
    myContent = document.getElementById('content'),
    myTitleLive = document.getElementById('title-live'),
    myContentLive = document.getElementById('content-live'); 

myTitle.onkeyup = function () {
    
    'use strict'; 
    
    myTitleLive.textContent = this.value; // wna w ana bktba fa input title yzhra t7ta al shkla b5osa title-live
    
}; 

myContent.onkeyup = function () {
    
    'use strict'; 
    
    myContentLive.textContent = this.value; // wna w ana bktba fa input Content yzhra t7ta al shkla b5osa content-live
    
}; 


