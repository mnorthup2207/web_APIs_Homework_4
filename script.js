var startBtn = document.querySelector(".startBtn");
var timerEl = document.querySelector(".timer");
var h1El = document.querySelector(".h1El")
var h2El = document.querySelector(".numInput")
var pEl = document.querySelector(".para")
var mainEl =document.querySelector(".main")

var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    ///etc.
];


// Timer function and variables
var secondsLeft = 60; // setting timer

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = "Seconds Left: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            // sendMessage();
        }

    }, 1000);
}

// function sendMessage() {
//     timeEl.textContent = " ";
  
//     var imgEl = document.createElement("img");
  
//     imgEl.setAttribute("src", "images/image_1.jpg");
//     mainEl.appendChild(imgEl);
  
//   }
  



startBtn.addEventListener("click", function(event) {
    event.preventDefault();
    setTime();
    firstQ()
    console.log(questions[0].title);

    function firstQ() {
        h1El.textContent = " ";
        pEl.textContent = " ";
        h2El.textContent = questions[0].title
        
        var olEl = document.createElement("ol")
        olEl.textContent = "Select One.";
        mainEl.appendChild(olEl);

        
    }


});

