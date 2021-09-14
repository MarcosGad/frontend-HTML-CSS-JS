$(document).ready(function(){
    
   function translate(){
       
       var width = $(window).width(); 
       
       var height = $(window).height();
       
       var w_div = $('div').width(); 
       
       var h_div = $('div').height(); 
       
       $("div").css({
           
           left: (width /2) - (w_div / 2) ,
           top : (height /2) - (h_div / 2)
           
       }); 
   }
    
    translate()
    
    
    $(window).resize(function(){
        
        translate(); 
        
    }); 
}); 
