/* ********************************************************************************************************
var Frequest = new XMLHttpRequest(); 
console.log(Frequest.readyState); 
Frequest.open("GET" , "index.html");
Frequest.send(); 
console.log(Frequest.readyState); 



var Frequest = new XMLHttpRequest(); 
console.log(Frequest.readyState); 

Frequest.open("POST" , "data.php");
Frequest.setRequestHeader("Content-Type" , "application/x-www-form-urlencoded"); 
Frequest.send(); 


var req = new XMLHttpRequest(); // 0 --> create the request
req.open("GET" , "data.php"); // 1 --> add open to request
req.send(); // 2 --> send the request 
//4 --> Done 

// status : 200 / 404 
// 200 = 4 == Done  

var req = new XMLHttpRequest(); 
req.onreadystatechange = function(){
    
    if(req.readyState === req.DONE && req.status === 200){
        
       console.log(req.responseText); 
    }
    
}; 

req.open("GET" , "https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest"); 
req.send(); 

********************************************************************************************************* */ 


/*
var btn = document.querySelector("button#users"); 
btn.addEventListener('click', getUsers , false); 

function getUsers(){
    
    var req = new XMLHttpRequest(); 
    req.onreadystatechange = function(){
        
        if(req.readyState === req.DONE){
            
            var results = JSON.parse(req.response); //JSON.parse --> a2dra ashofha w at3ml m3haa
            console.log(results); 
            
        }
    }
    
    req.open('GET' , 'https://randomuser.me/api/?results=3'); 
    req.send(); 
}
*/



var btn = document.querySelector("button#users"); 
var usercont = document.querySelector("div.users-cont"); 
btn.addEventListener('click', getUsers , false); 

function getUsers(){
    
    var req = new XMLHttpRequest(); 
    req.onreadystatechange = function(){
        
        if(req.readyState === req.DONE){
            
            var usercontht = ''; 
            var results = JSON.parse(req.response); //JSON.parse --> a2dra ashofha w at3ml m3haa
            for(var i = 0 , ii = results.results.length ; i < ii ; i++){
                usercontht += '<div class="users.div">'+
                                    '<h3>User NO.' + (i+1) +'</h3>'+
                                   '<p>Name: <span>'+ results.results[i].name.first + ' ' + results.results[i].name.last+'</span></p>'+
                                   '<p>Gender: <span>'+ results.results[i].gender +'</span></p>'+
                                   '<p>Address: <span>'+ results.results[i].location.street+'</span></p>'+
                                '</div>'
            }
            
            usercont.innerHTML = usercontht; 
        }
    }
    
    req.open('GET' , 'https://randomuser.me/api/?results=4'); 
    req.send(); 
}


