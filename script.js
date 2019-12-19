var startBtn = document.querySelector(".startBtn");
var nextBtn1 = document.querySelector(".nextHidden1");
var nextBtn2 = document.querySelector(".nextHidden2");
var nextBtn3 = document.querySelector(".nextHidden3");
var nextBtn4 = document.querySelector(".nextHidden4");
var nextBtn5 = document.querySelector(".nextHidden5");
var nextBtn6 = document.querySelector(".nextHidden6");
var nextBtn7 = document.querySelector(".nextHidden7");
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

var point = localStorage.getItem("point")
var names = localStorage.getItem("names")

var points = 0;
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
        answer: "array.push('item');"
    },
    {
        title: "What does the following line of code do? element.setAttribute('style', 'backgroundColor: Red;')",
        choices: ["changes the font red", "changes the rest of the page red", "is a function, waiting to be called", "changes the var element color red"],
        answer: "changes the var element color red"
    },
    ///etc.
];

// Timer function and variables
var secondsLeft = 60; // setting timer
var stop = 0;
function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = "Seconds Left: " + secondsLeft;

        if (secondsLeft === 0 || stop > 0) {
            clearInterval(timerInterval);
            // sendMessage();
        }
        if (secondsLeft < 25) {
            timerEl.setAttribute("id", "timer");
        };
        if (secondsLeft === 0) {
            h1El.textContent = " ";
            h2El.textContent = " ";
            olEl.textContent = " ";
            liEl1.textContent = " ";
            liEl2.textContent = " ";
            liEl3.textContent = " ";
            liEl4.textContent = " ";
            nextBtn1.setAttribute("class", "nextHidden4")
            nextBtn2.setAttribute("class", "nextHidden4")
            nextBtn3.setAttribute("class", "nextHidden4")
            nextBtn4.setAttribute("class", "nextHidden4")
            nextBtn5.setAttribute("class", "nextHidden4")
            nextBtn6.setAttribute("class", "nextUnhidden4")

            var imgEl = document.createElement("img");
            imgEl.setAttribute("src", "game_over.gif");
            mainEl.appendChild(imgEl);

            nextBtn6.addEventListener("click", function(event) {
                event.preventDefault();
                location.reload()

            })

        };

    }, 1000);
};

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
function highScores() {
    h1El.textContent = " ";
    pEl.textContent = " ";
    h2El.textContent = "High Scores: ";
    olEl.setAttribute("class", "olShow");
    olEl.textContent = " ";
    point = document.createElement("h5")
    point.textContent = point;
    h2El.appendChild(point);
};

function enterScore() {
    olEl.setAttribute("class", "olHide");
    liEl1.textContent = ""
    liEl2.textContent = ""
    liEl3.textContent = ""
    liEl4.textContent = ""
    h2El.textContent = "Enter High Score"
    var name = document.createElement("label");
    name.textContent = "Enter Name:       ";
    mainEl.appendChild(name)
    
    var nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("placeholder", "name");
    mainEl.appendChild(nameInput);
    nextBtn7.addEventListener("click", function() {
        localStorage.setItem("names", nameInput.textContent);
        localStorage.setItem("names", JSON.stringify(nameInput.text));
        localStorage.setItem("point", points);
        
        location.reload()
      
    })


};

//
//
// button event listeners
startBtn.addEventListener("click", function (event) {
    event.preventDefault();
    setTime();
    firstQ();
    
    
    liEl1.addEventListener("click", function (event) {
        event.preventDefault();
        secondsLeft -= 10;
        
        liEl1.textContent = "Sorry Wrong Answer";
        liEl2.textContent = "";
        liEl3.textContent = "";
        liEl4.textContent = "";
        
    });
    liEl2.addEventListener("click", function (event) {
        event.preventDefault();
        secondsLeft -= 10;
        
        liEl1.textContent = "";
        liEl2.textContent = "Sorry Wrong Answer";
        liEl3.textContent = "";
        liEl4.textContent = "";
        
    });
    liEl3.addEventListener("click", function (event) {
        event.preventDefault();
        points+=75
        
        liEl1.textContent = "";
        liEl2.textContent = "";
        liEl3.textContent = "Correct!!";
        liEl4.textContent = "";
        
    });
    liEl4.addEventListener("click", function (event) {
        event.preventDefault();
        secondsLeft -= 10;
        
        liEl1.textContent = "";
        liEl2.textContent = "";
        liEl3.textContent = "";
        liEl4.textContent = "Sorry Wrong Answer";
        
    });
    olEl.setAttribute("class", "olShow")
    // console.log(questions[0].title);
});

nextBtn1.addEventListener("click", function (event) {
    event.preventDefault();
    secondQ();
    
    liEl1.addEventListener("click", function (event) {
        event.preventDefault();
        
        
        liEl1.textContent = "Sorry Wrong Answer";
        liEl2.textContent = "";
        liEl3.textContent = "";
        liEl4.textContent = "";
        
    });
    liEl2.addEventListener("click", function (event) {
        event.preventDefault();
        
        
        liEl1.textContent = "";
        liEl2.textContent = "Sorry Wrong Answer";
        liEl3.textContent = "";
        liEl4.textContent = "";
        
    });
    liEl3.addEventListener("click", function (event) {
        event.preventDefault();
        
        liEl1.textContent = "";
        liEl2.textContent = "";
        liEl3.textContent = "Correct!!";
        liEl4.textContent = "";
        
    });
    liEl4.addEventListener("click", function (event) {
        event.preventDefault();
        
        
        liEl1.textContent = "";
        liEl2.textContent = "";
        liEl3.textContent = "";
        liEl4.textContent = "Sorry Wrong Answer";
        
    });
});
nextBtn2.addEventListener("click", function (event) {
    event.preventDefault();
    thirdQ();
    
    liEl1.addEventListener("click", function (event) {
        event.preventDefault();
        secondsLeft += 10;
        points+=75
        
        liEl1.textContent = "Correct!!";
        liEl2.textContent = "";
        liEl3.textContent = "";
        liEl4.textContent = "";
        
    });
    liEl2.addEventListener("click", function (event) {
        event.preventDefault();
        
        
        liEl1.textContent = "";
        liEl2.textContent = "Sorry Wrong Answer";
        liEl3.textContent = "";
        liEl4.textContent = "";
        
    });
    liEl3.addEventListener("click", function (event) {
        event.preventDefault();
        secondsLeft -= 10;
        points -=75
        liEl1.textContent = "";
        liEl2.textContent = "";
        liEl3.textContent = "Sorry Wrong Answer";
        liEl4.textContent = "";
    });
    liEl4.addEventListener("click", function (event) {
        event.preventDefault();
        
        
        liEl1.textContent = "";
        liEl2.textContent = "";
        liEl3.textContent = "";
        liEl4.textContent = "Sorry Wrong Answer";
        
    });
});
nextBtn3.addEventListener("click", function (event) {
    event.preventDefault();
    fourthQ();
    
    liEl1.addEventListener("click", function (event) {
        event.preventDefault();
        secondsLeft -= 10;
        points-=75
        liEl1.textContent = "Sorry Wrong Answer";
        liEl2.textContent = "";
        liEl3.textContent = "";
        liEl4.textContent = "";
        
    });
    liEl2.addEventListener("click", function (event) {
        event.preventDefault();
        
        
        liEl1.textContent = "";
        liEl2.textContent = "Sorry Wrong Answer";
        liEl3.textContent = "";
        liEl4.textContent = "";
        
    });
    liEl3.addEventListener("click", function (event) {
        event.preventDefault();
        points+=75
        
        liEl1.textContent = "";
        liEl2.textContent = "";
        liEl3.textContent = "Sorry Wrong Answer";
        liEl4.textContent = "";
    });
    liEl4.addEventListener("click", function (event) {
        event.preventDefault();
        secondsLeft += 10;
        points+=75
        
        liEl1.textContent = "";
        liEl2.textContent = "";
        liEl3.textContent = "";
        liEl4.textContent = "Correct!!";
        
    });
});
nextBtn4.addEventListener("click", function (event) {
    event.preventDefault();
    fifthQ();
    
    liEl1.addEventListener("click", function (event) {
        event.preventDefault();
        
        
        liEl1.textContent = "Sorry Wrong Answer";
        liEl2.textContent = "";
        liEl3.textContent = "";
        liEl4.textContent = "";
        
    });
    liEl2.addEventListener("click", function (event) {
        event.preventDefault();
        
        
        liEl1.textContent = "";
        liEl2.textContent = "Sorry Wrong Answer";
        liEl3.textContent = "";
        liEl4.textContent = "";
        
    });
    liEl3.addEventListener("click", function (event) {
        event.preventDefault();
        
        
        liEl1.textContent = "Sorry Wrong Answer";
        liEl2.textContent = "";
        liEl3.textContent = "";
        liEl4.textContent = "";
    });
    liEl4.addEventListener("click", function (event) {
        event.preventDefault();
        
        liEl1.textContent = "";
        liEl2.textContent = "";
        liEl3.textContent = "";
        liEl4.textContent = "Correct!!";
        
    });
});
nextBtn5.addEventListener("click", function (event) {
    event.preventDefault();
    enterScore()
    stop+=1
    var pointsEl = document.createElement("h4")
    pointsEl.textContent = `You got ${points} points!`
    mainEl.prepend(pointsEl);
    
    
    nextBtn5.setAttribute("class", "nextHidden5")
    nextBtn7.setAttribute("class", "show")
});

highScoreEl.addEventListener("click", function (event) {
    highScores()
    event.preventDefault();
    
});
