$(document).ready(function () {
    
    var ul = $("ul li"); 
    
    ul.eq(0).css({"background":"red",borderRadius:20});
    ul.eq(1).css("background","green");
    ul.eq(2).css("background","blue");
    ul.eq(3).css("background","black");
    
    ul.click(function () {
        
        $("div").css({"background":$(this).css("background"),
                      
                      "color":"#FFF"
                     
                     });  
        
        // bm3na 5lila background la div wa7d mn background ul lma a5troh w 9ern al color bardo 
        
        
    }); 
    
    
    
}); 