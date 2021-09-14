$(function(){
    
   /* $('div.awsemoe img').mousemove(function(){
        
        $('.overlay').hide(); 
        
    }); */
    
    
    
    
    
  
    $('.first').click(function(){
        
        $('.js2 .one').show().siblings().hide(); 
        
    }); 
    
       $('.second').click(function(){
        
        $('.js2 .two').show().siblings().hide();
        
    }); 
    
    
    
    
    
    
    
    
    $(window).scroll(function(){
        
        var scroll = $(this).scrollTop();
        
        //console.log(scroll); 
        
        if(scroll > 500){
            
            $('.header').slideDown(); 
            
        }else {
            
            $('.header').slideUp(); 
        }
        
    }); 
    
 
    
    
    
    $('.one').css('display','block'); 
    
    
    $('div.acordion h3').click(function(){
        
        $(this).next().slideToggle();
        
        $('div.acordion p').not($(this).next()).slideUp();
        
        
        
    }); 
    
    
    
      $('.download').click(function(){
          
          $('.timer').countTo();
          
      }); 
      
    
    
var mixer = mixitup('.all-images');


    
    
    $("body").niceScroll();
    
    
    
    
    
    
    
    
    
    
    
    
    
}); 