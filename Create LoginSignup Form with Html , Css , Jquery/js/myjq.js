$(document).ready(function(){
    
   $('.header h1 span').click(function () {
       
       'use strict'; 
       
       $(this).addClass('active').siblings().removeClass('active'); 
       $('.header form').hide(); 
       $('.' + $(this).data('class')).fadeIn(1000); 
       
   }); 
    
}); 