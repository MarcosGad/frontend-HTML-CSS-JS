$(function () {
    
    'use strict'; 
    
    $('.switch-colors li').on('click', function() {
        
        $(':root').css('--maincolor', $(this).data('color')); 
        
    }); 
        
    
}); 