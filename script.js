var startBtn = document.querySelector(".startBtn");
var nextBtn = document.querySelector(".nextHidden");
var timerEl = document.querySelector(".timer");
var h1El = document.querySelector(".h1El")
var h2El = document.querySelector(".numInput")
var pEl = document.querySelector(".para")
var mainEl = document.querySelector(".main")
var olEl = document.querySelector("ol")
var liEl1 = document.querySelector(".li1")
var liEl2 = document.querySelector(".li2")
var liEl3 = document.querySelector(".li3")
var liEl4 = document.querySelector(".li4")


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
};

// function sendMessage() {
//     timeEl.textContent = " ";

//     var imgEl = document.createElement("img");

//     imgEl.setAttribute("src", "images/image_1.jpg");
//     mainEl.appendChild(imgEl);

//   }




startBtn.addEventListener("click", function (event) {
    event.preventDefault();
    setTime();
    firstQ()
    olEl.setAttribute("class", "olShow")
    // funcNextBtn()
    // console.log(questions[0].title);
});

function firstQ() {
    h1El.textContent = " ";
    pEl.textContent = " ";
    h2El.textContent = questions[0].title;
    nextBtn.setAttribute("class", "nextUnhidden")
    startBtn.setAttribute("class", "startHide")

    liEl1.textContent = questions[0].choices[0]
    liEl2.textContent = questions[0].choices[1]
    liEl3.textContent = questions[0].choices[2]
    liEl4.textContent = questions[0].choices[3]


};
// console.log(questions[0].choices[0]);

nextBtn.addEventListener("click", function (event) {
    event.preventDefault();
    secondQ()


    function secondQ() {
        h1El.textContent = " ";
        pEl.textContent = " ";
        h2El.textContent = questions[1].title;

        liEl1.textContent = questions[1].choices[0]
        liEl2.textContent = questions[2].choices[1]
        liEl3.textContent = questions[3].choices[2]
        liEl4.textContent = questions[4].choices[3]

    };
    // console.log(questions[0].choices[0]);
});

