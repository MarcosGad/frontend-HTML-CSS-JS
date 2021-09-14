// Get Slider Items  |  Array.form [ES6 Feature]
var sliderImages = Array.from(document.querySelectorAll('.slider-container img')); 
var paginationCreatedUl = Array.from(document.querySelectorAll('#pagination-ul li'));
//console.table(sliderImages); 


// Get Number of slides
var  slidesCount = sliderImages.length; 
//console.log(slidesCount); 


// Set Current Slide 
var currentSlide = 1; 


//Slide Number Element
var slideNumberElement = document.getElementById('slide-number'); 


// previous and Next Buttons 
var nextButton = document.getElementById('next'); 
var prevButton = document.getElementById('prev');  


// Handle Click on Previous and Next Buttons
nextButton.onclick = nextSlide; 
prevButton.onclick = prevSlide; 


//Create the Main UL Element 
//var paginationElement = document.createElement('ul'); 

//Set ID On Created Ul Element 
//paginationElement.setAttribute('id', 'pagination-ul'); 

// Loop Through All Bullets Items

for (var i = 0; i < paginationCreatedUl.length; i++){

	paginationCreatedUl[i].onclick = function () {

		currentSlide = parseInt( this.getAttribute('data-index'));
		 theChecker(); 
	}
}


// trigger the Checker
 theChecker(); 





//Create List Items Based On Slides Count 
//for(var i = 1; i <= slidesCount; i++) {

		// Create the li 
		//var paginationItem = document.createElement('li');

		// Set Custom Attribute 
		//paginationItem.setAttribute('data-index', i); 

		// Set Item Content
		//paginationItem.appendChild(document.createTextNode(i)); 

		// Append Items To The Main Ul List 
		//paginationElement.appendChild(paginationItem); 
//}


// Add The Created Ul Element to The page 
//document.getElementById('indicators').appendChild(paginationElement); 

// Get The New Created UL 
//var paginationCreatedUl = document.getElementById('pagination-ul'); 






// Next Slide Function 
function nextSlide() {
	
	if (nextButton.classList.contains('disabled')) {

			// Do Nothing

			return false; 

	}else {

		currentSlide++;  
	    theChecker(); 

	}
}

// previous Slide Function 
function prevSlide() {
	
	if (prevButton.classList.contains('disabled')) {

			// Do Nothing

			return false; 

	}else {

		currentSlide--;  
	    theChecker(); 

	}
} 



// Create The Checker Function 
function theChecker(){

	// Set The Slider Number 
	slideNumberElement.textContent = 'slide #' + (currentSlide) + ' of ' + (slidesCount); 


	// Remove All Active Classes 
	removeAllActive(); 

	// Set Active Class On Current Slide 
	sliderImages[currentSlide - 1].classList.add('active'); 
	
	// Set Active Class on Current pagination Item
	paginationCreatedUl[currentSlide - 1].classList.add('active'); 


	// Check if Current Slide is the First 
	if (currentSlide == 1){

		// Add Disabled Class on Previous Button 
		prevButton.classList.add('disabled');

	}else{

		// Remove Disabled Class from Previous Button 
		prevButton.classList.remove('disabled'); 
	}


	// Check if Current Slide is the Last 
	if (currentSlide == slidesCount){

		// Add Disabled Class on Next Button 
		nextButton.classList.add('disabled');

	}else{

		// Remove Disabled Class from Next Button 
		nextButton.classList.remove('disabled'); 
	}


} 


// Remove All Active Classes From Images and pagination Bullets 

function removeAllActive(){

	// Loop Thgough Images 

	sliderImages.forEach(function (img){

		img.classList.remove('active'); 
	});

	// Loop Through pagination Bullets 

	paginationCreatedUl.forEach(function (bullet){

		bullet.classList.remove('active'); 

	}); 
}






