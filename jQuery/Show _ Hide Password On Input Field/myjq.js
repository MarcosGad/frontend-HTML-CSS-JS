/*global $*/ 

$(function(){
    
    'use strict'; 
    
    $("button").click(function(){
        
        $(this).toggleClass("active"); 
        
        if($(this).hasClass("active") ) { // b2ola lo al button 3ndha class active
           
           // $(this).prev("input").hide(); // test e3na b2lo al 3onsr input aly 2bla prev al button a5fia 
            
            $(this).text("Hide").prev("input").attr("type" , "text"); // hna b2ola 7ola al attr bt3a al input al nw3a text // w brdo bn9er al text ale mktob 
            
            
        }else {
            
            $(this).text("Show").prev("input").attr("type" , "password"); // hna b2ola 7ola al attr bt3a al input al nw3a password // w brdo bn9er al text ale mktob
            
        }
        
    }); 
    
    
}); 