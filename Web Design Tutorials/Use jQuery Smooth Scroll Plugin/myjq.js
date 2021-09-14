/*global $, smoothscroll*/

$(function () {
    
    'use strict'; 
    
    $("div").height($(window).height()); //ay div al height bta3o ad height al window
    
    //Initialize Smooth Scroll
    
   var scroll = new SmoothScroll('a[href*="#"]', { // al code aly 3la GitHub
        
        
      speed: 5000,
      // easing:'easeInOutCubic'  // w fa kza option mn easing mogwd f al get 
      offset: 500 // w ho al makn aly yo2fa fa al link e3na momkn a7dad al mkan aly to2f fa 
        
        
        // w fa opthin kter a5ra 
       
       // var scroll = new SmoothScroll('a[href="#about"]' w da lo hnfzha 3la link mo3en 
    
    }); 
    
    
    
   
    
    
}); 