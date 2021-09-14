// Letters
const letters = "abcdefghijklmnopqrstuvwxyz";
let lettersArray = Array.from(letters);

// Select letters container and generate 
let lettersContainer = document.querySelector(".letters");
lettersArray.forEach(letter => {
  let span = document.createElement("span");
  let theLetter = document.createTextNode(letter);
  span.appendChild(theLetter);
  span.className = 'letter-box';
  lettersContainer.appendChild(span);
});


// Object of words + categories 
const words = {
    programming: ["php","javascript","go","scala","fortran","r","mysql","python"],
    movies: ["Face","Coco","Up","Memento"],
    people: ["Albert Einstein","Hitchcock","Alexander","Cleopatra"],
    countries: ["Syria","Yemen","Egypt","Bahrain","Qatar"]
}

// Get Random Property
let allKeys = Object.keys(words);
let randomPropNumber = Math.floor(Math.random() * allKeys.length);
let randomPropName = allKeys[randomPropNumber];
let randomPropValue = words[randomPropName];

let randomValueNumber = Math.floor(Math.random() * randomPropValue.length)
let randomValueValue = randomPropValue[randomValueNumber];

// Set category info
document.querySelector(".game-info .category span").innerHTML = randomPropName;


// Letters Guess element
let lettersGuessContainer = document.querySelector(".letters-guess");
let lettersAndSpace =  Array.from(randomValueValue);
lettersAndSpace.forEach(letter => {
    let emptySpan = document.createElement("span");
    if (letter === ' ') {
      emptySpan.className = 'with-space';
    }
    lettersGuessContainer.appendChild(emptySpan);
});

// Select Guess Spans 
let guessSpans = document.querySelectorAll(".letters-guess span");

// Set wrong attempts
let wrongAttempts = 0

// Select the draw element
let theDraw = document.querySelector(".hangman-draw");

// Handle clicking on letters
document.addEventListener("click", (e) => {

    // Set the chose status
    let theStatus = false;

    if(e.target.className === 'letter-box') {
        e.target.classList.add("clicked");
        let theClickedLetter = e.target.innerHTML.toLowerCase();

        // The chosen word
        let theChosenWord = Array.from(randomValueValue.toLowerCase())

        theChosenWord.forEach((wordLetter, wordIndex) => {
           if(theClickedLetter == wordLetter){

             theStatus = true
             guessSpans.forEach((span, spanIndex) => {
                if(wordIndex === spanIndex) {
                    span.innerHTML = theClickedLetter;
                }
             })

           }
        });

        // If letter is wrong
        if (theStatus !== true) {
            wrongAttempts++;
            theDraw.classList.add(`wrong-${wrongAttempts}`);
            //document.getElementById("fail").play();
            if(wrongAttempts == 8) {
              endGame();
              lettersContainer.classList.add("finished");
              
            }
        }else {
            //document.getElementById("success").play();
        }

    }
});

function endGame(){
  let div = document.createElement("div");
  let divText = document.createTextNode(`Game Over, The word Is ${randomValueValue}`);
  div.appendChild(divText);
  div.className = "popup";
  document.body.appendChild(div);
}

