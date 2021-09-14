/*global console, $ */ 

$(function (){
    
    'use strict';
    
   // $('ul li:eq(0)').css('color','#F00'); // 2OL li htkon red tay brdo lo 3amlt :first 
    
    $.extend($.expr[':'], {
             
      moreThan100px: function (element) {
        
        if($(element).height() > 100){
            
            return $(element); // lo akbra mn 100 rg3wa 
        }
        
    }
             
    }); 
    
    
    // ana b3mla fun ly b5set extend w aydn ktbta : aly ht3aml m3ha zoma asma fun mn a5tira w element aly fa fun ho aly htb2a 3la al fa7sa 
    
    $('ul li:moreThan100px').css('color','#F00');
    
    // w kd ana 3amlt fun bta3ty asm7a moreThan100px bt2ol lo akbar mn 100px a3mla .....
    
    
    
}); 

