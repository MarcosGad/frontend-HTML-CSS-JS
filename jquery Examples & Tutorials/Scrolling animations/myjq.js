
var earth = $('.earth'),
    win = $(window); 

win.on('scroll',function(){
    
    var top = win.scrollTop() / 4; 
    earth.css('transform','rotate(' + top + 'deg)'); 
    
}); 