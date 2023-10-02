const questions = [
    {
        question: "Given below are some reasons to study history in present world. Select the one that is not applicable to study of history",        
        answers: [
            {text:"Since future is moulded on the basis of past events, it is important to study History ",correct:false},
            {text:"History is all about finding out how things have changed over a period ot time ",correct:false},
            {text:"History is a catalogue of events , to understand about people, their customs , traditions etc",correct:false},
            {text:"History is a record of people, places ,  events of the present arranged in chronological order",correct:true}

        ]
    },

    {
        question: "Historians belived that time does not have ________ dates in terms of a particular year or month ",        
        answers: [
            {text:"Imprecise",correct:false},
            {text:"Ambiguous",correct:false},
            {text:"Precise",correct:true},
            {text:"Abstruse",correct:false}

        ]
    },
    {
        question: "Fascinated by dates, who often debated about the dates on which the rulers were crowned, or battles were fought etc",        
        answers: [
            {text:"Administrative rulers",correct:false},
            {text:"Common Man",correct:false},
            {text:"Historians",correct:true},
            {text:"Kings",correct:false}

        ]
    },
    {
        question: "From a laymans ? point of view , which one of the following option is synonymous with the study of History and very difficult to memorise?",        
        answers: [
            {text:"Dates",correct:true},
            {text:"Census",correct:false},
            {text:"Artefacts",correct:false},
            {text:"Surveys",correct:false}

        ]
    },
    {
        question: "History is considered to be study of__________",        
        answers: [
            {text:"The future",correct:false},
            {text:"The Present",correct:false},
            {text:"Comparisons",correct:false},
            {text:"The past",correct:true}

        ]
    },
    {
        question: "Historians often compared Past with the Present and always referred to __________i.e Before and After.",        
        answers: [
            {text:"Phase",correct:false},
            {text:"Period",correct:false},
            {text:"Time",correct:true},
            {text:"Event",correct:false}

        ]
    },
    {
        question: "A few interesting statements with respect to historians are given below. Pick out the one that is not TRUE.",        
        answers: [
            {text:"Historians were not fascinated by dates.",correct:true},
            {text:"Historians debated about the dates on which the battles were won ",correct:false},
            {text:"Historians debated about the dates on which the rulers were crowned. ",correct:false},
            {text:"Historians found out how things were in the past and how things have changed. ",correct:false}

        ]
    },
    {
        question: "Fill up and complete the sentence with respect to History: It is belived that all historical questions refer us back to notions of ___________.",        
        answers: [
            {text:"Belifs",correct:false},
            {text:"Customs ",correct:false},
            {text:"Philosophies ",correct:false},
            {text:"Time",correct:true}

        ]
    },

];

const questionElement = document.getElementById("question"); 
const answerButtons = document.getElementById("answer-buttons")
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0 ;
let score = 0 ; 
 function startQuiz(){
    currentQuestionIndex = 0 ; 
    score = 0 ; 
    nextButton.innerHTML = "Next";
    showQuestion();
 }



 function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    })
 }

 function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
 }

function selectAnswer(e){
    const selectedBtn = e.target; 
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;

    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;

    });

    nextButton.style.display = "block"
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display  = "block"

}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();

