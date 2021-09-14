/*global $, alert, console*/ 
$(function(){

    'use strict'; 
    
 // nice scroll 
    $("body").niceScroll({
        
        cursorcolor :'#f7600e',
        cursorwidth : 10,
        cursorborderradius: 0,
        cursorborder: '1px solid #f7600e'
        
        
    });
    
    
// header hight 
    
   $('.header').height($(window).height()); 
    
// go to scroll features 
    
$('.header .arrow i').click(function(){
    
    $('html , body').animate({
        
        scrollTop: $('.features').offset().top
        
    },1000);
    
});
    
// hire button lma ados 3la ywden ly our team  
    
$('.hire').click(function(){
    
    
    $('html , body').animate({
        
        scrollTop: $('.our-team').offset().top 
        
    },1000);
    
}); 
    
    
//show hidden photo from work 
    
    $('.show-more').click(function(){
      
        $('.our-work .hidden').fadeIn(2000); 
        
    }); 
    
// check myslider 
    
    var leftArrow = $('.testim .fa-chevron-left'),
        
        rightArrow = $('.testim .fa-chevron-right'); 
    
    
    function checkclients() {
        
        if ($('.client:first').hasClass('active')) {
            
            leftArrow.fadeOut(); 
            
        } else {
            
            leftArrow.fadeIn(); 
        }
        
        $('.client:last').hasClass('active') ? rightArrow.fadeOut() : rightArrow.fadeIn();
         // hza shkla dalt if bltr2a al mo5tsra w a7na 3mlna beha b2eta al fun 
    }
    
    checkclients();  
    
    
    // turn myslider 
    
    $('.testim i').click(function(){
        
        if ($(this).hasClass('fa-chevron-right')) {
            
            $('.testim .active').fadeOut(100, function(){
                
                $(this).removeClass('active').next('.client').addClass('active').fadeIn(); 
                
               checkclients(); //hsh9la al fun tany 3ashn kol me7rka fun yrg3a y sheck 3la al2shom 
                
            }); 
            
        } else {
            
                $('.testim .active').fadeOut(100, function(){
                
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn(); 
                
               checkclients(); //hsh9la al fun tany 3ashn kol me7rka fun yrg3a y sheck 3la al2shom 
            
            }); 
        }
        
    }); 
    
}); 
