$(document).ready(function(){
    
    $(".but1").click(function(){
        
        show_div('The content is saved'); 
        
    }); 
    
    
     $(".but2").click(function(){
        
        show_div('The content is deleted');
        
    }); 
    
    
     $(".but3").click(function(){
        
        show_div('The content is changed');
        
    }); 
    
    
    function show_div(text){
        
        $("div").html("<h4>"+ text  +"</h4>").slideDown().delay(1500).slideUp(); 
        
    }
   
}); 