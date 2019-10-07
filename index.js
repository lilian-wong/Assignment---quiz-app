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
const numOfQuestion = questionIndex + 1;
let numOfIncorrect = 0;

//Create multiple choices 
function getChoiceElement(choiceItem){
    let choiceElements = '';
    let choiceLetter = ['A','B','C','D'];
    let i = 0;
    choiceItem.forEach(function(choice){
    choiceElements +=`<input type="radio" name="choice" required value=${choice}>
    <label for="choice"> ${choiceLetter[i]}. ${choice} </label><br>`;
    i++;});
    return choiceElements;
}

//Create quiz questions
function getQuestionsElement(questionItem){
    let numOfCorrect = finalScore;
    let choice = questionItem.choice;
    let formElement = `
    <p id= ${questionItem.quizID}>Question 1 of 10</p>
    <p id='nthQuestion'>${questionItem.question}</p>
    ${getChoiceElement(choice)}
    <button type="submit" class="submitButton">Submit</button>
    <p class="currentScore">Current Score: ${numOfCorrect} correct, ${numOfIncorrect} incorrect</p>
    `;
    return formElement;
}

//response to submit
function updateQuizForm(){
    $('.submitButton').append('<p>testing</p>');
}
//Handle submit button
function handleSubmit(){
    $('#quiz-container').on('submit', function (event) {
        event.preventDefault();
        let selected= $('input:checked');
        let selectedChoice = selected.val();
        if(checkAnswer(selectedChoice)===true){
        }
        else{
        }
        updateQuizForm();
    });
}
//generate answers
function checkAnswer(selectedChoice){
    let ans = quizQuestions[questionIndex].answer;
    if(selectedChoice===ans){
        return true;
    }
    else{
        return false;
    }
}

//function to start quiz,generate questions,update quiz form
function startQuiz(){
    $('#quiz-container').on('click','#startButton', function(event){
    event.preventDefault();
    $('#quiz-title').hide();
    $('#quizformClipArt').hide();
    let questionItem = quizQuestions[questionIndex];
    $('fieldset').html(getQuestionsElement(questionItem));
});
}

//function to restart quiz
function restartQuiz(){
//generate questions  
    location.reload()
}


function loadQuiz(){
    startQuiz();
    handleSubmit();
}

$(loadQuiz);
