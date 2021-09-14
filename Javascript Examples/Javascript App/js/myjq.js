var the_heading = document.getElementById("heading"), 
    the_ul = document.getElementById("list"), 
    the_button = document.getElementById("button"),
    the_li = document.getElementById("list").getElementsByTagName("li"),  // momkn msla tktba f al console the_li w hy2olk byshor 3la ah
    counter = 1 ;  


/*the_li[0].addEventListener("click" , function() {
    
    the_heading.innerHTML = the_li[0].innerHTML; 
    
}); */



    
    the_ul.addEventListener("click" , active) //click on the ul 
    
function active(e) {
    
   if(e.target.nodeName == "LI"){ // when click on li 
       
       
    the_heading.innerHTML = e.target.innerHTML; 
    
    for( var i = 0; i < e.target.parentNode.children.length ; i++ ) {
    
        e.target.parentNode.children[i].classList.remove("active"); 
    
      }
    
        e.target.classList.add("active"); 
       
       
   }
    
    
}

the_button.addEventListener("click" , Add); 

function Add() {
    
    the_ul.innerHTML += "<li> New " + counter + "</li>"; 
    counter ++; 
}
