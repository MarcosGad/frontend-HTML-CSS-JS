/*global console, $ */ 

$(function (){
    
    'use strict';
    
     $.extend($.expr[':'], {
         
         
         redElement: function (element) {
             
             if($(element).css('color') === 'rgb(255, 0, 0)'){
                
                
                return $(element); // lo l2et kaemta al element al color bt3wa ... rg3li al 3onsora 
                
                }
         }
         
         
     });
    
    $('ul li:redElement').css('border','5px solid #00F'); 
    
    // w hna bst9dma al fun bt3ty redElement w btl3a al 3nasr al 7amra w a3mla 3lihom 5sa2s mo3ena 
    
}); 


 //console.log($('ul li:eq(1)').css('color')); // hna lm3rfta color al li al 2 