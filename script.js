var startBtn = document.querySelector(".startBtn");
var nextBtn1 = document.querySelector(".nextHidden1");
var nextBtn2 = document.querySelector(".nextHidden2");
var nextBtn3 = document.querySelector(".nextHidden3");
var nextBtn4 = document.querySelector(".nextHidden4");
var nextBtn5 = document.querySelector(".nextHidden5");
var timerEl = document.querySelector(".timer");
var highScoreEl = document.querySelector(".highScores");

var h1El = document.querySelector(".h1El")
var h2El = document.querySelector(".numInput")
var pEl = document.querySelector(".para")
var mainEl = document.querySelector(".main")
var olEl = document.querySelector("ol")
var liEl1 = document.querySelector(".li1")
var liEl2 = document.querySelector(".li2")
var liEl3 = document.querySelector(".li3")
var liEl4 = document.querySelector(".li4")

// question array
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
    {
        title: "What does the keyword Typeof() return in the console.log",
        choices: ["returns 'number', 'string', or 'boolean' in reference to the data type.", "creates a for loop", "logs items into an array", "logs an array into localStorage."],
        answer: "returns 'number', 'string', or 'boolean' in reference to the data type."
    },
    {
        title: "Which example is the correct way to use a push method?",
        choices: ["push is not a valid method.", "<p></p>", "push.loop(array);", "array.push('item');"],
        answer: "parentheses"
    },
    {
        title: "What does the following line of code do? element.setAttribute('style', 'backgroundColor: Red;')",
        choices: ["changes the font red", "changes the rest of the page red", "is a function, waiting to be called", "changes the var element color red"],
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

// question functions
function firstQ() {
    h1El.textContent = " ";
    pEl.textContent = " ";
    h2El.textContent = questions[0].title;
    nextBtn1.setAttribute("class", "nextUnhidden");
    startBtn.setAttribute("class", "startHide");
    olEl.setAttribute("class", "olShow");

    liEl1.textContent = questions[0].choices[0];
    liEl2.textContent = questions[0].choices[1];
    liEl3.textContent = questions[0].choices[2];
    liEl4.textContent = questions[0].choices[3];

};
function secondQ() {
    h1El.textContent = " ";
    pEl.textContent = " ";
    h2El.textContent = questions[1].title;
    nextBtn1.setAttribute("class", "nextHidden1");
    nextBtn2.setAttribute("class", "nextUnhidden1");
    olEl.setAttribute("class", "olShow");

    liEl1.textContent = questions[1].choices[0];
    liEl2.textContent = questions[1].choices[1];
    liEl3.textContent = questions[1].choices[2];
    liEl4.textContent = questions[1].choices[3];

};
function thirdQ() {
    h1El.textContent = " ";
    pEl.textContent = " ";
    h2El.textContent = questions[2].title;
    nextBtn2.setAttribute("class", "nextHidden2")
    nextBtn3.setAttribute("class", "nextUnhidden2")
    olEl.setAttribute("class", "olShow");

    liEl1.textContent = questions[2].choices[0]
    liEl2.textContent = questions[2].choices[1]
    liEl3.textContent = questions[2].choices[2]
    liEl4.textContent = questions[2].choices[3]

};
function fourthQ() {
    h1El.textContent = " ";
    pEl.textContent = " ";
    h2El.textContent = questions[3].title;
    nextBtn3.setAttribute("class", "nextHidden3")
    nextBtn4.setAttribute("class", "nextUnhidden3")
    olEl.setAttribute("class", "olShow");

    liEl1.textContent = questions[3].choices[0]
    liEl2.textContent = questions[3].choices[1]
    liEl3.textContent = questions[3].choices[2]
    liEl4.textContent = questions[3].choices[3]

};
function fifthQ() {
    h1El.textContent = " ";
    pEl.textContent = " ";
    h2El.textContent = questions[4].title;
    nextBtn4.setAttribute("class", "nextHidden4")
    nextBtn5.setAttribute("class", "nextUnhidden4")
    olEl.setAttribute("class", "olShow");

    liEl1.textContent = questions[4].choices[0]
    liEl2.textContent = questions[4].choices[1]
    liEl3.textContent = questions[4].choices[2]
    liEl4.textContent = questions[4].choices[3]

};
function sixthQ() {
    h1El.textContent = " ";
    pEl.textContent = " ";
    h2El.textContent = questions[5].title;
    nextBtn4.setAttribute("class", "nextHidden1")
    nextBtn5.setAttribute("class", "nextUnhidden1")
    olEl.setAttribute("class", "olShow");

    liEl1.textContent = questions[5].choices[0]
    liEl2.textContent = questions[5].choices[1]
    liEl3.textContent = questions[5].choices[2]
    liEl4.textContent = questions[5].choices[3]

};
function highScores() {
    h1El.textContent = " ";
    pEl.textContent = " ";
    h2El.textContent = "High Scores!";
    olEl.setAttribute("class", "olShow");
    olEl.textContent = " ";
    liEl1.textContent = "Name: "
    liEl2.textContent = "Name: "
    liEl3.textContent = "Name:"
    liEl4.textContent = "Name: "
}

//
//
// button event listeners
startBtn.addEventListener("click", function (event) {
    event.preventDefault();
    setTime();
    firstQ()
    olEl.setAttribute("class", "olShow")
    // console.log(questions[0].title);
});

nextBtn1.addEventListener("click", function (event) {
    event.preventDefault();
    secondQ();
});
nextBtn2.addEventListener("click", function (event) {
    event.preventDefault();
    thirdQ();
});
nextBtn3.addEventListener("click", function (event) {
    event.preventDefault();
    fourthQ();
});
nextBtn4.addEventListener("click", function (event) {
    event.preventDefault();
    fifthQ();
});
nextBtn5.addEventListener("click", function (event) {
    event.preventDefault();
    sixthQ();
});
highScoreEl.addEventListener("click", function (event) {
    event.preventDefault();
    highScores()
});

