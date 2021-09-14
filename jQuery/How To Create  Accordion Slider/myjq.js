$(function(){
    
   //show first info  
    
    $('.info').first().show().animate({width:'40%'});  // info al 2ola azhra m3 animate
    
    // show info on click 
    
    $('.item').click(function () {
        
        $(this).next().show().animate({width:'40%'}).siblings(".info").animate({width:'0'} ,
         // next al info aly gnboa azhra m3 animate // b2ola al siblings al shka2 aly mn no3a info a5fyhom 
                                                                               
            
        function () {
            
            $(this).hide(); // e5fa kalmt al info 
            
        }); 
        
       
        
    }); 
    
}); 