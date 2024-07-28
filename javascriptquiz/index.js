// variables and Consts
const quiz = document.querySelector("#quiz");
const answerelm = document.querySelectorAll(".answer");
const [questionelm,option_1,option_2,option_3,option_4] = document.querySelectorAll("#question, .option_1 ,option_2 , .option_3 , option_4");
const submitbtn = document.querySelector("#submit");

let currentquiz = 0;
let score = 0;

// Load quiz data | make a function for loading quiz data 

const loadquiz = () =>{
    const {Question , Options} = jsquizData[currentquiz];
    // console.log(Options);
    questionelm.innerText = Question;  //to show the question on web and it's options
    Options.forEach((curoption , index )=> (window[`option_${index + 1}`].innerText = curoption));
};

loadquiz();

// get selected answer on clicking submit button 

const getselectedOption = () => {
    // let ans_index;
    // answerelm.forEach((curoption , index)=>{
    //     if (curoption.checked){
    //         ans_index = index;
    //     }
    // });
    // return ans_index;

    let answerElement = Array.from(answerelm); 
    return answerElement.findIndex((curElem)=> curElem.checked);
};

const deselectedAnswers= () => {
    return answerelm.forEach((curElem) => curElem.checked = false);
};

submitbtn.addEventListener('click', ()=>{
    const selectedOptionIndex = getselectedOption();
    // console.log(selectedOptionIndex);

    // to update the score if answer is correct

    if(selectedOptionIndex === jsquizData[currentquiz].Correct){
        score = score + 1;
    }
    // change the question when first question is submitted successfully

    currentquiz ++;

    if(currentquiz < jsquizData.length){
        deselectedAnswers();
        loadquiz();
    }else{
        quiz.innerHTML = `
        <div class="result">
        <h2> Your Score : ${score} / ${jsquizData.length} Correct Answers </h2>
        <p>Congratulations on Completing the Quiz </p>
        <button class="reload-button" onclick="location.reload()">PLAY AGAIN</button>
        </div>
    `;
    }
});

