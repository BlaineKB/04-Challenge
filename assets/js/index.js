// Declare variables to grab elements by ID's and start time/score/question array at beginning
var time = 0;
var score = 0;
var question = -1;
var startQuizBtn = document.querySelector("#startQuizBtn");
var showHighScore = document.getElementById("highscore-name-input");
var showQuestion = document.getElementById("quiz-box")

console.log(showQuestion);

// Array variable that contains all the questions, possible answer choices, and lastly the answer to the question
var questionsArray = [
  {
    Question: "Which one of the following symbols is used to inform the computer reading and running the code where a command ends AKA the terminator?",
    Options: ["!", "?", "$", ";"],
    Answer: ";",
  },

  {
    Question: "Which of the following elements is used to incorporate JavaScript code into an HTML file?",
    Options: ["<script>", "<main>", "<div>", "<section>"],
    Answer: "<script>",
  },

  {
    Question: "Also known as the building blocks of JavaScript, a '------' is a predefined action that we can call or invoke in our code",
    Options: ["property", "semantic element", "function", "wireframe"],
    Answer: "function",
  },

  {
    Question: "What is the name of the code in between curly braces { }?",
    Options: ["method", "code block", "script", "expression"],
    Answer: "code block",
  },

  {
    Question: "A named location for a value that gets stored in the browser's memory when a program is run is called what?",
    Options: ["operator", "localStorage", "variable", "DOM"],
    Answer: "variable",
  },
];

console.log(questionsArray);

// A function that starts the quiz for the user
function startQuiz() {
  time = 90;
  timer = setInterval(function () {
    document.getElementById("quiz-timer").innerHTML = time;
    time--;

    if (time <= 0) {
      clearInterval(timer);
      document.getElementById("quiz-timer").textContent = "0";
      endQuiz();
    }
  }, 1000);

  console.log(timer);

  startQuizBtn.remove();
  addQuestions();
}


