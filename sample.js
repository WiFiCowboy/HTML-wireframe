const questions = [ 
    {
         question: "what is the answer to all life? ", 
         answer: "42", 
         options : ["33", "44", "42"] 
    }

]

let store = { currentQuestion : 0 }

function generateOptions(options){ console.log(options); }

generateOptions(questions[store.currentQuestion].options)