// get the modal 
// get the content of the modal 
// get the close btn 
// when click on close hide the modal 
// when click on esc btn hide the modal



// get the modal 

var modal = document.getElementById("the-modal"),
    img = document.getElementById("the-img"); 

// get the content of the modal 

var modalImg = document.getElementById("img"), 
    modalCaption = document.getElementById("caption"); 

    img.onclick = function () {
        
        modal.style.display = "block"; 
        modalImg.src = this.src; 
        modalCaption.innerHTML = this.alt; 
    }
    

// get the close btn  
    
    
    var cloes = document.getElementsByClassName("close")[0]; 

    
// when click on close hide the modal 

 cloes.onclick = function () {
     
     
     modal.style.display = "none"; 
 }
    
    
 
 // when click on esc btn hide the modal
 
    document.onkeydown = function (ev) {
        
        if (ev.keyCode == "27") {
            
           modal.style.display = "none"; 

        }
    }
    
    