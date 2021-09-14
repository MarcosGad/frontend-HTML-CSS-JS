/*global console, $*/ 

$(function (){
    'use strict'; 
    
   $.fn.center = function () {
       
       
        $(this).css({
        
        'position':'absolute',
        
        'left' : ($(window).width() - $('.our-test').width()) / 2,
        // hna 3aml 3mlya 7sbia lg3la al 3onsra f al montcfa ana btr7a alms7a kolha al window mn al 3onsora bta3y 3la 2 
        
        'top' : ($(window).height() - $('.our-test').height()) / 2
        // nfsa alfkra lakn la al height 
        
    }); 
       
   }
   
   $('.our-test').center(); /* nafza al fun bt3ty */ 
    
    /* ml7oza mt7otsh 3onsren ht centerhom m3 m3da fa group (,) l2 kol wa7d lw7do */ 
    
    
}); 