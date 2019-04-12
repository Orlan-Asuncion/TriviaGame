
function check(){

var question1 = document.test.question1.value;
var question2 = document.test.question2.value;
var question3 = document.test.question3.value;
// var question4 = document.test.question4.value;
// var question5 = document.test.question5.value;
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
var pictures = [
    "assets/images/win.jpg",
    "assets/images/okay.jpg",
    "assets/immages/lose.jpg"
];
var range;

if ( correct < 1){
    range = 2;
}
 if (correct > 0 && correct < 3){
    range = 1;
}
if(score > 2){
    range = 0;
}    
    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("message").innerHTML = messages[range];
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
    document.getElementById("pictures").src = pictures[range];
};

function setBackgroundImage(myObject, imageUrl) {
    myObject.css({
                 "background-image": "url(" + imageUrl + ")",
                 "background-position": "center",
                 });
  }

  var body = $("body");
  var imageUrl = 'assets/images/circuit-wallpapers.jpg';
  setBackgroundImage(body, imageUrl);





















