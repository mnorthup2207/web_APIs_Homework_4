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

var timerEl = document.querySelector(".timer");

// Timer functon and variables
var secondsLeft = 60; // setting timer

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = "Seconds Left: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }

    }, 1000);
}

// function sendMessage() {
//     timeEl.textContent = " ";
  
//     var imgEl = document.createElement("img");
  
//     imgEl.setAttribute("src", "images/image_1.jpg");
//     mainEl.appendChild(imgEl);
  
//   }
  
  setTime();

