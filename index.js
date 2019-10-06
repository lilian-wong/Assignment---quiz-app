'use strict';

/*This quiz app loads preset questions to the screen
Once a user click start button, it will reload the form and display question in order.
All choices are set to be unchecked by default. The user can select only one of the answers. When the submit button is clicked,
the user's selection is passed to be checked. If the answer match to the correct answer, "Correct" in green
will be printed next to the selected answer; else "Incorrect"in read is printed next to the selected answer.
a response will then passed to a function to */


//set initial score and questions;
const finalScore = 0;
const questionIndex = 0;
let numOfIncorrect = 0;

//function get score
function getChoiceElement(choiceItem){
let choiceElements = '';
let choiceLetter = ['A','B','C','D'];
let i = 0;
choiceItem.forEach(function(choice){
choiceElements +=`<input type="radio" name="choice" value="choice"/>
<label for="choice"> ${choiceLetter[i]} ${choice} </label><br>`;
i++;});
console.log(choiceElements);
return choiceElements;
}

//generate questions
function getQuestionsElement(questionItem){
let numOfQuestion = questionIndex + 1;
let numOfCorrect = finalScore;
let choice = questionItem.choice;
return `
<p id= ${questionItem.quizID}>Question 1 of 10</p>
<p id='nthQuestion'>${questionItem.question}</p>
${getChoiceElement(choice)}
<button type="button" id="submitButton">Submit</button>
<p>Current Score: ${numOfCorrect} correct, ${numOfIncorrect} incorrect</p>
`
}

//Handle submit button
function handleSubmit(){
$('#submitButton').on('click', function(event){
    event.preventDefault();
});
}
//generate answers
function getAnswerElement(choiceItem){
    let listOfAnswers = '';
    choiceItem.forEach(choice => {
        
    });
}
//function to update quiz form
function updateQuizForm(){
//load Question nth of 10
//load generated questions
//load finalScore
}

//function to start quiz
function startQuiz(){
//generate questions
//update quiz form
$('#startButton').on('click',function(event){
    event.preventDefault();
    $('#quiz-title').hide();
    $('#quizformClipArt').hide();
    let questionItem = quizQuestions[questionIndex];
    $('fieldset').html(getQuestionsElement(questionItem));
});
}

//function to check answer
function checkAnswer(){}

//function to restart quiz
function restartQuiz(){
//generate questions  
    location.reload()
}


function loadQuiz(){
    startQuiz();
}

$(loadQuiz);
