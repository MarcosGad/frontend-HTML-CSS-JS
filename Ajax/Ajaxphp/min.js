
var mRequest = new XMLHttpRequest(); 

mRequest.onreadystatechange = function(){

	var mDiv = document.getElementById('words'); 

	if(this.readyState == 4 && this.status == 200){

		mDiv.innerHTML = "<h2>Done</h2>"; 
		mDiv.innerHTML += mRequest.responseText; 

	}else if (this.readyState < 4 && this.readyState > 0){

		mDiv.innerHTML = "<img src='lg.dual-ring-loader.gif'>"; 
	}else{

		mDiv.innerHTML = "<h1>your Request is not done</h1>"
	}

}

mRequest.open("GET","info.php"); 

mRequest.send(); 



// Network --> XHR (file ajax aly at7mlta fa al page)










