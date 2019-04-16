 alert("connected"); 
//  timeRemaining = 60;
//  correctAns = 0;
//  incorrectAns = 0;
//  unAns = 0;

//  var refreshIntervalid = null;

//   $(document).ready(function(){

//        $("#startBtn").click(function(){
//        $("welcomeContainer").hide();   
//        $("gameContainer").show();
//        $("#submitBtn").show();
//        $("#timerDiv").show();
//        $("resultContainer").hide();
//         startCoundown();
//      });
 
//  });

//  $("#doneBtn").click(function(){
//      $("#gameContainer").hide();
//      $("#doneBtn").hide();
//      $("#timerDiv").hide();
//      $("#resultContainer").show();
//      getResult();
//      clearInterval(refreshIntervalId);
//      })

//  $("#playAgainBtn").click(function(){
//      location.reload();
//      })

//   Counts down and displays the time to the user
//  function countdown(){

//       Decrement the timeRemaning, down from 60 seconds
//      timeRemaning--;

//       Display the timeRemaning to the user in the DOM
//      $('#timeRemaning').html(timeRemaning + " Seconds");
//      console.log(timeRemaning);
   
//      /* if timeRemaning <=0 then stop the timer */
//      if(timeRemaning <= 0){
//          clearInterval(refreshIntervalId);
//          $("#gameContainer").hide();
//          $("#doneBtn").hide();
//          $("#resultContainer").show();
//          getResult();
//      }
//  }

//   Show the countdown, increment is 1 second
//  function startCountdown(){
//      refreshIntervalId = setInterval(countdown, 1000);
//  }


//    After answers are validated, display the score results
//   $('#correct-ans').html(correctAns);
//   $('#incorrect-ans').html(incorrectAns);
//   $('#un-ans').html(unAns);
// 



       

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
    if (question4 == "C"){
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

if (score = 8) {   
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















