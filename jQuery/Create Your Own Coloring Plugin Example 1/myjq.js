/*global console, $*/

$(function (){
    
    'use strict'; 
    
    $.fn.makeRed = function () {
        
    $(this).css('color','#F00'); // g3la lon al 3onsor red
        
    return $(this); // rg3wa tany 3ashn a3rfa asht9la by 3ltoll 
        
    }
    
    
    // bn3ml fn a5tsar prototype zma nktob asma al ex aly 3eza kol mktbo enfza cose mo3en 
    
    $('.our-test').makeRed(); // 3ashn ast5dm al ex al fa fun bt3ty 
}); 