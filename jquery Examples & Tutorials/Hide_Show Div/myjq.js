$(document).ready(function(){
    
    'use strict'; 
    
    $('#hideshow').click(function(){
        
        if($('#hideshow').text == ('Hide')){
            
           $('#Hdiv').toggle(1000); 
            
        } else{
            
            $('#Hdiv').toggle(1000);
        }
        
    }); 
    
    
    
}); 