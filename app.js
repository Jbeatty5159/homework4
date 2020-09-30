function populate(){
    if(quiz.isEnded()) {
         showScores();
    }
    else {
        //  show question;
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show choices
        var choices = quiz.getQuestionIndex().choices;
        for (let i = 0; i< choices.length; i++) {
            console.log(choices[i])
            var btn= document.querySelector(`#btn${i}`);
            btn.textContent=choices[i];
            guess('btn' + i, choices[i]);

            
        }

        showProgress();
    }

};

function guess(id,guess) {
    var button = document.getElementById(id);
    button.onclick = function(){
        quiz.guess(guess);
        populate();
    }
};

function showProgress(){
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById('progress');
    element.innerHTML = 'Question' + currentQuestionNumber + "of" + quiz.questions.length;
}

function showScores() {
    var gameOverHtml= "<h1>Result</h1>";
    gameOverHtml += "<h2 id='score'> Your Scores: = "+quiz.score+"  </h2>";
    var element= document.getElementById('quiz');
    element.innerHTML = gameOverHtml;
}
console.log(showScores)

function Question(text, choices, answer){
    this.text=text;
    this.choices=choices;
    this.answer=answer;
}

Question.prototype.correctAnswer= function(choice){
    return choice === this.answer;
}


    var question0=new Question("Which language is used for styling web pages?", ["HTML", "JQuery","CSS","XML"], "CSS");
    var question1=new Question("Which one is not an object oriented programming language?", ["Java","C#","C++","C"], "C");
    var question2= new Question("There are ____ main components of object oriented programming.", ["1", "6", "2", "4"], "4");
    var question3= new Question("Which language is used for web apps?", ["PHP", "Python", "Javascript", "All"], "All");
    var question4=new Question("MVC is a _____.", ["Language", "Library", "Framework", "All"], "Framework");
var questions=[
    question0,
    question1,
    question2,
    question3,
    question4,
    
    
];
console.log(questions)

function Quiz (questions) {
    this.score = 0;
    this.questions= questions;
    this.questionIndex= 0;
};

Quiz.prototype.getQuestionIndex = function(){
    return this.questions[this.questionIndex];
};
Quiz.prototype.isEnded = function(){
    return this. questions.length === this.questionIndex;
};

Quiz.prototype.guess = function(answer){


 if(this.getQuestionIndex().correctAnswer(answer)) {
    this.score++;
 }
console.log(this.score)
    this.questionIndex++;
};
var quiz = new Quiz(questions);
console.log(quiz.score)
populate();