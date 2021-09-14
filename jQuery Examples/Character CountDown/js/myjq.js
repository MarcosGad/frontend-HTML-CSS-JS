$(document).ready(function(){
    
    'use strick'; 
    
    var max = 100; 
    
    $('textarea').keyup(function(){
        
        var lenght = $(this).val().length;  // this -> textarea 3dad al 7rofa aly atktbta fihaa mn val 
        
        var character = max - lenght ; 
        
        $("#char").text(character); // print now in span 
        
    }); 
}); 