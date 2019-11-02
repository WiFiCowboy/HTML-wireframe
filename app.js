console.log('Script is connected!');

// const STORE = questions to render 
// **hint check samples provided to see how they structuyred data 
// ** else use and array object [{querstion: '?', answer: 'true || false'}]

function hideQuestions(){
    $('.questions').hide();
};

// Start the quiz 
// function start quiz {
//     listen for button click "start" and render quistions
//  **Hint** try and use show and hide methods vs fully rendering 
// }
function startQuiz() {
    // listen for button click #js-start-quiz and render quistions
    $('#js-start-quiz').on('click', function(){
        console.log('Start button clicked!')
        // render questions
        renderQuestion();
        $('.questions').show();
    });
};

// function render questions {
// }
function renderQuestion(){
    let question = STORE.questions
    [STORE.currentQuestion];
    //     display questions
    const quizQuestion = question.question;
    console.log(question.question);
    const questionDisplayed = $(`
    <li>${question.options[0]}</li>
    <li>${question.options[1]}</li>
    <li>${question.options[2]}</li>
    <li>${question.options[3]}</li>
    `);
    $('div.homePage').hide();
    $('.currentQuestion').text(quizQuestion);
    $('.displayQuestions').html(questionDisplayed);
};

// function keep score {
//     update score board based on correct or wrong answers 
// }

// function check answer {
//     on button click 'submit' 
//     listen for user answer 
//     check if user answer is equal to correct or wrong answer
// }
function checkAnswer(){
    $('ol').closest('li').on('click', function(){
        console.log(`li clicked!`);
    });
}

// function if correct/ wrong answer {
//     if check answer is correct answer 
//     render correct answer page 
//     if check answer is wrong answer 
//     render wrong answer page
// }

// function track questions {
//     keep track of questions 
//     iterate through questions until false aka no more questions
// }

// function end of quiz {
//     render end of quiz page
//     display final Score 
//     listen for try again and run start quiz () if clicked 
//     NOTE** might want to add a quite quiz button 
// }

// // function quiz controller {
//     place all functions to run quiz here 
// }
function quizController(){
    hideQuestions();
    startQuiz();
    checkAnswer();
};
// $(quiz controller);
$(quizController);