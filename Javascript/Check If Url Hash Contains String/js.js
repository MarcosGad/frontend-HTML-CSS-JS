/*global console*/ 
 
 /* method 1 


if(window.location.hash) { // fa f al link # wla l2 
    
    if (window.location.hash.indexOf('osa') === 1) { // babhca 3na osa mn 2ol index 1 
        
        console.log('good');  
    }
    
}else {
    
    console.log('bad there no hash in link'); 
}  */





// method 2 

if(window.location.hash) { // fa f al link # wla l2 
    
    var hash = window.location.hash.substring(1); // 3ashn e2t3a mn 2ola al o
    
   if ( hash === 'osa') { // babhca 3na osa mn 2ol index 1 
        
        console.log('good');  
    }
    
    
}else {
    
    console.log('bad there no hash in link'); 
}



