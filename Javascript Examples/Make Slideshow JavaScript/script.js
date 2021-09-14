// array contain all images 
// function slideshow 


var i = 0; 
var slidesImage = ["image/1.jpg" , "image/2.jpg" , "image/3.jpg"]; 


// expression function 

var slideshow = function () {
    
    document.slideshow.src = slidesImage[i];
    
    if (i < slidesImage.length - 1 ) { // w hna btr7a 1 3ashn ygab al index 0 1 2 fkta mash 3 kamn 

        i++; 
        
        }else {
            
            i = 0; 
        }
    
    setTimeout("slideshow()" , 2000); 
}
    
slideshow(); 



//console.log(document.slideshow); 