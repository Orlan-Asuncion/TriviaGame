alert("connected");

//psuedo coding
//create a trivia game with ten question.
//player is given 20 seconds to answer all questions.
//checked answer right or wrong
//initialize question variables
// var questionArray = [
//     "What does CSS means?",
//     "The web is based on",
//     "What does HTML stands for?",
//     "What symbol indicates a tag?",
//     "Which of these is a genuine tag?",
//     "What is the newest version of HTML?"
// ];
// console.log(questionArray);

// var answerArray=[
//     ["Cascading Style Sheet","Cool Stylus Sheet","Column Style Sheet"],
//     ["Images", "Text", "Information", "HTML"],
//     ["Hyper Tag Markup language","Hyper Text Markup Language","Hyperlinks Text Mark laguage","Hyper Text Marking Language"],
//     ["Angle bracket e.g.","Curved brakets e.g.{,}","Commas e.g.','", "Exclamation marks e.g.!"]
//     ["header", "bold", "body", "image"],
//     ["HTML4", "HTML3", "HTML5","There is only one HTML"]
// ];

// var rigthAnswers = [0, 3, 1, 0, 0, 2];


// //console.log("rigthAnswers[0]");
// backgroundImage
function check(){

var question1 = document.test.question1.value;
var question2 = document.test.question2.value;
var question3 = document.test.question3.value;
var correct = 0;

    if (question1 == "Cascading Style Sheet"){
        correct++;
    }
    if (question2 == "HTML5"){
        correct++;
    }
    if (question3 == "Header"){
        correct++;
    }
var messages = ["Great job!", "That's just okay", "You need to do better than that!"];
var pictures = ["","",""]
var range;
if ( correct < 1){
    range = 2;
}
if (correct > 0 && correct < 3){
    range = 1;
}
if (score > 2){
    range = 0;
}


    document.getElementById("after_submit").style.visibility = "visible";

    document.getElementById("message").innerHTML = messages[Range];
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
    document.getElementById("picture").src = pictures[range];
}






















