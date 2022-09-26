// Declare variables to grab elements by ID's and start time/score/question array at beginning
var time = 0;
var score = 0;
var liveQuestion = -1;
var startQuizBtn = document.querySelector("#startQuizBtn");
var showHighScore = document.getElementById("highscore-name-input");
var showQuestion = document.getElementById("quiz-box")

console.log(showQuestion);

// Array variable that contains all the questions, possible answer choices, and lastly the answer to the question
var questionsArray = [
  {
    Question: "Which one of the following symbols is used to inform the computer reading and running the code where a command ends AKA the terminator? ",
    Options: ["!", "?", "$", ";"],
    Answer: ";",
  },

  {
    Question: "Which of the following elements is used to incorporate JavaScript code into an HTML file? ",
    Options: ["<script>", "<main>", "<div>", "<section>"],
    Answer: "<script>",
  },

  {
    Question: "Also known as the building blocks of JavaScript, a '------' is a predefined action that we can call or invoke in our code. ",
    Options: ["property", "semantic element", "function", "wireframe"],
    Answer: "function",
  },

  {
    Question: "What is the name of the code in between curly braces { }? ",
    Options: ["method", "code block", "script", "expression"],
    Answer: "code block",
  },

  {
    Question: "A named location for a value that gets stored in the browser's memory when a program is run is called what? ",
    Options: ["operator", "localStorage", "variable", "DOM"],
    Answer: "variable",
  },
];

console.log(questionsArray);

// A function that starts the quiz for the user
function startQuiz() {
  time = 90;
  timer = setInterval(function() {
    document.getElementById("quiz-timer").innerHTML = time;
    time--;

    if (time <= 0) {
      clearInterval(timer);
      document.getElementById("quiz-timer").textContent = "0";
      endQuiz();
    }

  }, 1000);

  console.log(time);
  console.log(timer);

  startQuizBtn.remove();
  addQuestions();
}

// A function that displays quiz questions to the user and iterates through the questions until the final one. After that the quiz ends
function addQuestions() {
  liveQuestion++;

  if (liveQuestion < questionsArray.length && time > 0) {
    showQuestion.innerHTML = questionsArray[liveQuestion].Question;
    addChoiceBtns();
  } else {
    endQuiz();
  }

};

// A function that adds answer buttons to the page for the user to select
function addChoiceBtns() {
  var newBtns = document.createElement("div");

  for (var i = 0; i < questionsArray[liveQuestion].Options.length; i++) {
    var optionsBtn = document.createElement("button");
    optionsBtn.className = "button";
    optionsBtn.textContent = questionsArray[liveQuestion].Options[i];
    optionsBtn.appendChild(newBtns);
    console.log(newBtns);

    showQuestion.appendChild(optionsBtn);
    optionsBtn.setAttribute("onclick", "answerVerify(questionsArray[liveQuestion].answer, event.target.textContent)");
    
    console.log(optionsBtn);
  
  };
};

// A function that checks if the user-selected option is the same as the answer and increases score if correct
function answerVerify(answer, userSelection) {
  if (answer == userSelection) {
    score = score + 10;
  } else {
    wrongAnswer()
  }

  console.log(userSelection);
  addQuestions();
};

// A function that subtracts 10 from the time if the user-selected option is the incorrect answer
var wrongAnswer = function() {
  time -= 10;
  return;
};


// A function that ends the quiz for the user and displays the user's initials and score
function endQuiz() {
  time = 0;

  showQuestion.innerHTML = "<h2>You completed the quiz!</h2><p>You got a score of " + score + "/90!</p><div><input type=text id='name' placeholder='Enter Initials'><button class='button' id='finalScoreBtn' onclick='saveFinalScore()'>Save Score!</button></div>";

  console.log(showQuestion);
};

// A function that takes the user's quiz score and saves it to the local storage
function saveFinalScore() {
  localStorage.setItem("highscore-name-input", document.getElementById("name").value + " " + score + "points!");
  location.reload();
};

startQuizBtn.addEventListener("click", startQuiz);
