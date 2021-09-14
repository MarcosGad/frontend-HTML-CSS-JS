/*global $*/ 

$(function(){
    
    'use strict'; 
    
    for(var i = 1960; i <= 2017 ; i++) {
        
        //console.log(i); // hna nl2ya tb3a al snen f al consle 
        
        $("<option>" , {value : i , text : i}).appendTo($("#years")); 
        
        // w hna ana bd3wo fa option m3 t7dyda al val w text bt3wto w aydan adfto btry2at al appendTo
    }
    
    
}); 