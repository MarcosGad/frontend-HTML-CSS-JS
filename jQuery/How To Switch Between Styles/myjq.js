$(document).ready(function (){
    
    // click on the Bt to switch style 
    
    $("button").click(function () {
        
       // $("link").remove(); // hna text lo dosta 3la al bt heshla al links bta3t style kolha 
        
        $("link[href*='theme']").attr("href","css/"+$(this).val()+ ".css"); 
        
        // whna b7ada al link aly 3ezoha klamt theme mogwad f al link w b3da kda a9er attr llya ana 3ezo w hna $(this).val()+ ".css" 3ashn agybo mn bt 3ltoll 
        
        
        
    }); 
    
    
    
}); 