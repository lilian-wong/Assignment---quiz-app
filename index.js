'use strict';

/*This quiz app loads preset questions to the screen. Once a user click start button, it will reload the form and display question in order. 
All choices are set to be unchecked by default. The user can select only one of the answers. When the submit button is clicked,
the user's selection is passed to be checked. If the answer match to the correct answer, "Correct" in green will be printed next to the selected answer, 
else "Incorrect" and the correct answer is printed next to the selected answer. At the end the user 
*/

//set initial score
let questionIndex = 0;
let numOfQuestion = 1;
const totalQuestion = quizQuestions.length;

//function to start quiz,generate questions,update quiz form
function startQuiz(){
    scoreCard.total =totalQuestion;
    $('.scoreTracker').hide();
    $('.quiz-content').on('click','.startButton', function(event){
        event.preventDefault();
        $('.quiz-title').hide();
        $('.resultMessage').hide();
        $('.quizformClipArt').hide();
       loadQuestions();
    });
}

//Dispay quiz main screen
function displayQuizMain(){
    $('.picture').append(`<p><h3 class="totalQuizQuestions"> Total Questions:${totalQuestion} </h3><p>`);
    $('.scoreTracker').html(`<p class="currentScore">Current Score: ${scoreCard.getCorrect()} correct, ${scoreCard.getWrong()} incorrect</p>`);
}

//Move to the next question
function updateQuestion(){
    questionIndex++;
    numOfQuestion++;
}

//Update score element
function updateScoreElement(){
    $('.scoreTracker').html(`<p class="currentScore">Current Score: ${scoreCard.getCorrect()} correct, ${scoreCard.getWrong()} incorrect</p>`);
}

//load questions screen
function loadQuestions(){
    $('.creditScore-quizApp-form').html(getQuestionsElement(quizQuestions[questionIndex]));
    updateScoreElement();   
}

//Create multiple choices Elements
function getChoiceElement(choiceItem){
    let choiceElements = '';
    let choiceLetter = ['A','B','C','D'];
    let i = 0;
    choiceItem.forEach(function(choice){
    choiceElements +=`<input type="radio" class="radioChoices" name="choice" required value=${choiceLetter[i]}>
    <label for="choice"> ${choiceLetter[i]}. ${choice} </label><br>`;
    i++;});
    return choiceElements;
}

//Create quiz questions
function getQuestionsElement(questionItem){
    let choice = questionItem.choice;
    let formElement = `
    <fieldset class="quiz-content">
        <section class="number-of-question">
            <p id= q_${questionItem.quizID}>Question ${numOfQuestion} of 10</p>
        </section>
        <section class="question">
            <p>${questionItem.question}</p>
        </section>
        <section class="choices">
            <p>${getChoiceElement(choice)}</p>
        </section>
            <button type="submit" class="submitButton">Submit</button>
        <section class="scoreTracker"></section>   
    </fieldset>
    `;
    return formElement;
}

//Generate html element for submit screen
function submitAnswer(){
    $('.creditScore-quizApp-form').on('submit', function (event) {
        event.preventDefault();
        let selected= $('input:checked');
        let selectedChoice = selected.val();
        //Correct
        if(checkAnswer(selectedChoice)===true){
            scoreCard.addCorrect();
            $('.radioChoices:checked').next().append('<span class="correct-msg"> Correct </span>');
        }
        //Wrong
        else{
            scoreCard.addWrong();
            $('.radioChoices:checked').next().append(`<span class="wrong-msg"> Incorrect 
            - The correct answer is ${quizQuestions[questionIndex].ansID}, ${quizQuestions[questionIndex].answer}</span>`);
        }
        updateScoreElement();
        if(questionIndex<totalQuestion-1){
            $('.submitButton').replaceWith(`<button type="button" class="nextButton">Next</button>`);
        }
        else{
            $('.submitButton').replaceWith(`<button type="button" class="finalButton">Get your Final Score</button>`);
        }
        $('.radioChoices').attr('disabled',true);
        $('.resultMessage').html(`<p class="currentScore"> </p>`);
    });
}

//Check answer
function checkAnswer(selectedChoice){
    let ans = quizQuestions[questionIndex].ansID;
    if(selectedChoice===ans){return true;}
    else{return false;}
}

//Update screen for next screen
function getNext(){
    $('.creditScore-quizApp-form').on('click', '.nextButton', function(event){
        event.preventDefault();
        updateQuestion();
        $('fieldset').replaceWith(getQuestionsElement(quizQuestions[questionIndex]));
        updateScoreElement();
        loadQuestions();
    });
}

//Print final score
function getFinalScore(){
    $('.creditScore-quizApp-form').on('click', '.finalButton', function(event){
        event.preventDefault();
        $('.creditScore-quizApp-form').html(`
        <fieldset class="quiz-content">
            <section class="subTitle">
                <h2 class="quiz-title">Your Final Score: ${scoreCard.getCorrect()} out of ${totalQuestion}</h2>
            </section>
            <section class="picture">
                <img src="images/creditScore_istockphoto.jpg" class="quizformClipArt" height="380" width="500" alt="credit score clipart">
            </section>
                <button type="button" class="restartButton">Retake quiz</button>
        </fieldset>`);
    });  
}
//function to restart quiz
function restartQuiz(){
    $('.creditScore-quizApp-form').on('click', '.restartButton', function(event){
        event.preventDefault();
        location.reload();
    });
}

function loadQuiz(){
    displayQuizMain();
    startQuiz();
    submitAnswer();
    getNext();
    getFinalScore();
    restartQuiz();
}

$(loadQuiz);
