/*gloobal $*/

$(function(){
    
    'use strict'; 
    
    var mexText = $('textarea').attr('maxlength'),
        
        mage = $('.message'); 
    
    mage.html('<span>' + mexText + '</span> Characters Remaining'); // w hna b3mla rsla 3ashn lma aktba mexText f html otmtka ytktba f alrsla bt3tna 
    
    $('textarea').keyup(function(){
        
        var textLenght = $(this).val().length,
            
    // console.log(textLenght); // w hna hegbla kol 7arf hktob h3do fa val al textarea
            
            remText = mexText - textLenght; // w hna 50 - kol 7arf hktbo
        
         mage.html('<span>' + remText + '</span> Characters Remaining');
        
     // ygdad al mage w yktba al 3dad al gded 
        
    }); 
    
    console.log(mexText); // 3ashn a3rfa maxlenght ad ah 
    
}); 

