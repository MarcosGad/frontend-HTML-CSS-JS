$(document).ready(function(){
    
    'use strict'; 
    
    var eventDate = Date.parse('15 January 2018') / 1000;  // Date.parse yakon 3la he2ta arkam bla ms // 1000-> s
    var currentDate = Math.floor( jQuery.now() / 1000 );    // jQuery.now() = $.now() 
    var sec = eventDate - currentDate ; 
    var days = Math.floor(sec / (60 * 60 * 24)); 
    
    //alert(eventDate); 
    //alert(days);
    
    $('#days').text('Only ' + days + ' days until the event'); 
    
    
}); 