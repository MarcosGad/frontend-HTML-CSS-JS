$(document).ready(function(){
    
    $("#my-tabs li").click(function () {
        
        // cache id (li)
        
        var myId = $(this).attr("id") // cash lla id bt3a li 
        
        //console.log(myId); 
        
        // remove class inactive from li and id it to siblings 
        
        $(this).removeClass("inactive").siblings().addClass("inactive"); 
        
      
        // b3mla removeclass 3ashn eshyla al color aly a7na 3mlino 
        // w siblings adlhom al class f yt9er lonhom kolhom 
        
        // hide all divs 
        
        $(".my-container div").hide(); 
        
        
        // a2oln kol div a5fyha 
        
        // get the id from the same li id  and add -Content
        
       $("#" + myId + "-Content").fadeIn("3000"); 
        
       // console.log($("#" + myId + "-Content")); 
        
        // 2oln b3mla # + id li 3ashn ykona class masln #tab3-Content w b3da kd a5fa fadein 
    }); 
    
    
}); 