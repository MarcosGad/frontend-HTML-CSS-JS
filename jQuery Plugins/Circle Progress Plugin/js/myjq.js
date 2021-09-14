$(document).ready(function(){
    
   $(".circle").circleProgress({
       
       value: .75,              //start mnen w end mnen fa al dyraa w default-> 0 a5rha-> 1 
       
       
       size: 250,             // hgma al dyraa  default-> 100
       
       
       startAngle:4,         // al 7rka tbd2a mnen default-> -Math.PI (3.14) ana momkn a5tar (1,2,3,4,....)
       
       
       reverse:true,        // default->false bymsha m3 3karb al s3aa w true-> 3ksa 3karb al s3aa
       
       
       thickness:50,        // somka al dyraa default->auto momkn nktba (10,20,50,.....)
       
       
       lineCap:"round",    //bdyta shkla al line default->"butt" momkn ykon ("round" or "square")
       
       
       //fill: { image: "http://i.imgur.com/pT0i89v.png" },// color al line w tdrga al alon m3 b3d momkn {gradient: ["red","green","blue"]}
       
       
       //emptyFill:  //color aly byt7rka fyha al line default->rgba(0, 0, 0, .1)
       
       
       animation:{duration:1000}, //w2ta al t7rka w al default->duration: 1200, easing: "circleProgressEasing"
       
       
       animationStartValue:0.2, // bybd2a mnen sor3ta al 7rka default->0.0
           
             
   }); 
    
}); 