"use strict";

const {question, answer} = message;

switch(question) {
    case "What is Node.js?":
        correctAnswer = "JavaScript runtime";
        break;
        default:
            correctAnswer = "";
}

if(answer === correctAnswer){
    process.send({result: "Correct!"});
}else{
    process.send({result: "Incorrect"})
}