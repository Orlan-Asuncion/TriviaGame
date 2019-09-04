var startBtn = document.querySelector("#startBtn");
var game = document.getElementById("test");
var timeRemaining = document.getElementById("timer");
var counter = 30;
var timer;
game.style.display = "none";
var reset = document.getElementById("reset");
reset.addEventListener("click", function(){
   //restart game
   // timeUp();
    gameOver();
    location.reload();
});
function timeUp(){
    clearInterval(timer);
    alert("You're out of time! Play again!");
}
function gameOver(){
    clearInterval(timer);
    $("#test").hide();

}
function countDown(){
    counter--;
    $("#timer").html("Time Remaining " + counter + " seconds");
    if(counter === 0){
        timeUp();
        gameOver();
    }
}
startBtn.addEventListener("click", function(){
  //start clock timer
  counter = 30;
  timer = setInterval(countDown, 1000);
  //hide start button
  startBtn.style.display = "none";
  //show game/questions
  $("#test").show();
});
    
function check(){    
var question1 = document.test.question1.value;
var question2 = document.test.question2.value;
var question3 = document.test.question3.value;
var question4 = document.test.question4.value;
var question5 = document.test.question5.value;
var question6 = document.test.question6.value;
var question7 = document.test.question7.value;
var question8 = document.test.question8.value;
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
    if (question4 == "Java"){
        correct++;
    }
    if (question5 == "CSS"){
        correct++;
    }
    if (question6 == "All of the above"){
        correct++;
    }
    if (question7 == "Ctrl Z"){
        correct++;
    }
    if (question8 == "Print Screen"){
        correct++;
    }


    var messages = ["Great job!", "That's just okay", "You need to do better than that!"];
var pictures = ["assets/images/win.gif","assets/images/fair.gif","assets/images/lose.gif"];

var range;

if (correct == 8) {   
    range = 0;
} 
if ( correct < 1){
    range = 2;
}
if (correct > 0 && correct < 8){
    range = 1;
}
   
    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("message").innerHTML = messages[range];
    document.getElementById("pictures").src = pictures[range];
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct."; 
    clearInterval(timer);
}

// myObject.css({
//     "background-image": "url(" + imageUrl + ")",
//     "background-position": "center",
//     });    
//      var body = $("body");
//      var imageUrl = 'assets/images/vector-Stock.jpg';
//      setBackgroundImage(body, imageUrl);
//      transition-duration: .5s;       
$('body').css('background-image', 'url(assets/images/HD.jpg)');















