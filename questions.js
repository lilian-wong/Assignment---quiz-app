'use strict';

const scoreCard = {
    correct: 0,
    wrong: 0,
    total: 0,
    getCorrect(){return scoreCard.correct},
    getWrong(){return scoreCard.wrong},
    addCorrect(){ scoreCard.correct++;},
    addWrong(){scoreCard.wrong++;}
}

//Set of preloaded quiz questions and answers.
const quizQuestions = [
    {
        quizID: cuid(), 
        question:"Q1. FICO Scores are used in over __% of U.S. lending decisions.Select one of the following.", 
        choice:[
        "10%",
        "82%",
        "60%",
        "90%"],
        answer:"90%",
        ansID:"D"
    },
    {   
        quizID: cuid(), 
        question:"Q2. Where to get your free credit reports online?", 
        choice:[
        "GetYourAnnualCreditReport.com",
        "AnnualCreditReport.com",
        "FreeCreditReport.com",
        "FreeCreditScores.com"],
        answer:"AnnualCreditReport.com",
        ansID:"B"
    },
    {
        quizID: cuid(), 
        question:"Q3. Which one of the following is true about improving your FICO Score?", 
        choice:[
        "Pay bills on time.",
        "Open a lot of accounts at once.",
        "Do not pay bills on time.",
        "Increase the amount of debts you owe."],
        answer:"Pay bills on time.",
        ansID:"A"
    },
    {
        quizID: cuid(), 
        question:"Q4. Which of the following statement is true?", 
        choice:[
        "Credit report can be transfered from European Countries to the US credit bureaus.",
        "Credit histories can be transfered from the US credit bureaus to Cananda.",
        "Credit report can be transfered from country to country.",
        "Credit report and credit histories do not transfer from country to country."],
        answer:"Credit report and credit histories do not transfer from country to country.",
        ansID:"D"
    },
    {
        quizID: cuid(), 
        question:"Q5. How long will negative information remain on my credit report in public record?", 
        choice:[
        "7 years",
        "5 years",
        "12 months",
        "72 months"],
        answer:"7 years",
        ansID:"A"
    
    },
    {
        quizID: cuid(), 
        question:"Q6. New credit determines __% of a FICO ®Score.Choose one of the following", 
        choice:[
        "25%",
        "10%",
        "35%",
        "8%"],
        answer:"10%",
        ansID:"B"
    },
    {
        quizID: cuid(), 
        question:"Q7. Is it OK to request and check your own credit report?", 
        choice:[
        "It will impact your credit score negatively.",
        "Checking your credit report won't affect your FICO Scores",
        "Checking your credit report only affect your FICO Scores one time.",
        "No, your credit report must be requested by a business company."],
        answer:"Checking your credit report won't affect your FICO Scores",
        ansID:"B"
    },
    {
        quizID: cuid(), 
        question:"Q8. In order to receive a valid FICO® Score, the credit report must have:", 
        choice:[
        "At least one account opened for six months or more",
        "At least one account that has been reported to the credit bureau within the past six months",
        "No indication of deceased on the credit report.",
        "All of the above."],
        answer:"All of the above.",
        ansID:"D"
    },
    {
        quizID: cuid(), 
        question:"Q9. Which of the following statements is true?", 
        choice:[
        "When you become married your spouse's credit habits and profile will not have an impact on yours.",
        "Your Spouse's Poor Credit Will Hurt your Credit Scores.",
        "Married couples don't have a joint FICO® score,they each have individual scores.",
        "Married couples have a joint FICO® score."],
        answer:"Married couples don't have a joint FICO® score,they each have individual scores.",
        ansID:"C"
    },
    {
        quizID: cuid(), 
        question:"Q10. What are the ways to build your credit history?", 
        choice:[
        "Apply for and open one new credit cards when you already have many credit cards.",
        "Keep high balances.",
        "Skip payments as long as you pay off your balance at some points.",
        "Keep low balances and pay off your balance each month and never miss a payment."],
        answer:"Keep low balances and pay off your balance each month and never miss a payment.",
        ansID:"D"
    }
];