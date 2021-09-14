$(document).ready(function(){
    
    $("div").css("display","block");
    
    // azhra a2wla div 
    $("h3").click(function(){
       
        $(this).next().slideToggle(1000); 
        
        // w hna lma adosa 3la h3 al 3onsra aly b3doa etft7a w et2fla 
        
        //$("div").not($(this).next()).slideUp(1000); 
        
        // lo ho b3eda 3n al code al div al sabk arf3wa e3na ay 7ga 9er ale f al div code al2ola arf3a 
        
    }); 
    
    
}); 