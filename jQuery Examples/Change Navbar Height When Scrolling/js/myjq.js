$(document).ready(function(){
    
    $(window).scroll(function(){
        
        
        var scroll = $(window).scrollTop(); // 440 mkdar al scrollTop
        
        if ( scroll > 440 ) {
            
            
            $("header").removeClass("large").addClass("small"); 
            
        }else{
            
            $("header").removeClass("small").addClass("large"); 
            
        }
        
    }); 
   
    
   // console.log($(window).scrollTop()); // n2dra n3rf 3mlna ad ah scroll top 
    
}); 