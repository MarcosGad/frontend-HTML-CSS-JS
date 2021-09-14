$(function(){
    
    var scrollButton = $("#scroll-up"); // caching the button 
    
    // window scrolling 
    
    $(window).scroll(function(){
        
     //$(this).scrollTop(); //bm2na b2ola ana 3amlt scrollTop mn this aly hya window kam 
      //console.log($(this).scrollTop()); // n3rfa ad ah 
        
        /*if($(this).scrollTop() >= 500) {
            
            scrollButton.show(); // e3na lo wasl 500 azhro 
        }else {
            
            scrollButton.hide(); // lo mt72a2sh al shart a5faa
        }*/
        
$(this).scrollTop() >=500 ? scrollButton.show() : scrollButton.hide();
        
        
        scrollButton.click(function(){
            
            $("html,body").animate({ scrollTop : 0 },600); 
            
            // lma adosa click atl3a lfo2a la html,body fa 600ms
            
        }); 
        
    }); 
    
    
    
    
}); 