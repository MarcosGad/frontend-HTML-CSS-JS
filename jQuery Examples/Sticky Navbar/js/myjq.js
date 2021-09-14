$(document).ready(function(){
    
   'use strict'; 
    
    var nav = $('nav'),
        
        image = $('.container img'); 
    
    $(window).scroll(function(){
        
        var windowScroll = $(window).scrollTop(); 
        
        //console.log(windowScroll); // nazlt ad ah mn al top 
        
        if(windowScroll >= image.outerHeight()){
            
           nav.addClass('fixed'); 
            
           // nav.addClass('fixed').slideDown(); // try2a ynzla bla slide 
            
        }else {
            
            nav.removeClass('fixed'); 
        }
    }); 
}); 