$(document).ready(function(){
    
    'use strict'; 
     
     $('#agree').attr('disabled','disabled'); 
    
     $('#words').scroll(function(){
         
         var textarea_h = $(this)[0].scrollHeight; //textareaHeight
         var scroll_h = textarea_h - $(this).innerHeight(); // textareaHeight - pageHeight
         var scroll_top = $(this).scrollTop(); 
         
         if(scroll_top == scroll_h){
             
              $('#agree').removeAttr('disabled'); 
         }
         
        
        // $('#info').text(scroll_h); 
     }); 
    
    
    
}); 