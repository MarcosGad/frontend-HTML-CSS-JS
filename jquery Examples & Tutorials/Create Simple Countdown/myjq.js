$(document).ready(function(){
    
    'use strict'; 
    
    var mycountdown = setInterval(function(){
        
         var count = parseInt($('.countdown').html()); 
         if(count !== 0){
             
             $('.countdown').html(count - 1); 
             
         }else{
             
             //clearInterval();   //hide done 
             clearInterval(mycountdown); 
             $('.countdown').html('Done'); 
         }
        
    },1000);
    
    
    
    
}); 