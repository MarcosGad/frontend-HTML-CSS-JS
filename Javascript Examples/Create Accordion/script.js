var heading = document.getElementsByClassName('accordion'); 
var i; 

//console.log(heading[0]); 


for(i = 0; i < heading.length; i++) {
    //console.log("a");  3 mart 3la 3dad al btn
    
    
    heading[i].addEventListener('click' , function(){
        
        
        this.classList.toggle('active'); 
        
        
        
        var desc = this.nextElementSibling; // hat al 3osora al b3dya 
        //console.log(desc); 
        
        
        //console.log(desc.scrollHeight);  height p 
        
        if( desc.style.maxHeight ) {
            
           desc.style.maxHeight = null; /* 3ashn y3mla loop */ 
            
        }else {
            
            desc.style.maxHeight = desc.scrollHeight + "px";
        }
        
        
    }); 
}