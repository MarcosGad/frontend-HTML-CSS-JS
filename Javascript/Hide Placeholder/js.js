/*global console*/ 

var myInput = document.getElementById('my-input');

myInput.onfocus = function () {
    
    'use strict'; 
    
    // store placeholder // hna ana 3amlt attr gded asmo data-place w htat fa al placeholder bt3na 
    this.setAttribute('data-place', this.getAttribute('placeholder'));
    
    // empty placeholder 
    
    this.setAttribute('placeholder', ' '); // kd ana 5alta al placeholder fady
};


// lma ab3da blmo2shra 

myInput.onblur = function () {
    
    'use strict'; 
    
    // b3ksa h5lya yageb m7to  placeholder aly m5znuno wyrg3w tany 
    
    this.setAttribute('placeholder', this.getAttribute('data-place'));
    
    // empty data-place 
    
    this.setAttribute('data-place', ' '); // kd ana 5alta al data-place fady
};



