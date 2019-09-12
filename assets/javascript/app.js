var timerId;

$('#game-start').css("display", "none");
$('#score').css("display", "none");

$(document).ready(function(){



var timeLeft = 30;
// var elem = document.getElementById('#timer');
var correct = 0;
$("#correct").text("Correct: " + correct);
var incorrect = 0;
$("#incorrect").text("Inorrect: " + incorrect);
var answered = 0;
var unanswered = 0;
var radios = $('input[type=radios]');
var correctAnswer =$('.correctChoice');
// var answered = $('.options');

$('#start').click(function(){
    $('#game-start').css("display", "block")
    $('#start').css("display", "none");
    $('#score').css("display", "none");
    timerId = setInterval(countdown, 1000);
    // countdown();
}); 



function answered() {
  var q1Ans = $('input[name="q1"]:checked').val();
  console.log(q1Ans)
  if ('input[name="q1"]:checked') {
    answered ++;
  } else {
    unanswered ++;
  }
  var q2Ans = $('input[name="q2"]:checked').val();
  console.log(q2Ans)
  if ('input[name="q2"]:checked') {
    answered ++;
  } else {
    unanswered ++;
  }
  var q3Ans = $('input[name="q3"]:checked').val();
  console.log(q3Ans)
  if ('input[name="q3"]:checked') {
    answered ++;
  } else {
    unanswered ++;
  }
  var q4Ans = $('input[name="q4"]:checked').val();
  console.log(q4Ans)
  if ('input[name="q4"]:checked') {
    answered ++;
  } else {
    unanswered ++;
  }
  var q5Ans = $('input[name="q5"]:checked').val();
  console.log(q5Ans)
  if ('input[name="q5"]:checked') {
    answered ++;
  } else {
    unanswered ++;
  }
  var q6Ans = $('input[name="q6"]:checked').val();
  console.log(q6Ans)
  if ('input[name="q6"]:checked') {
    answered ++;
  } else {
    unanswered ++;
  }
  var q7Ans = $('input[name="q7"]:checked').val();
  console.log(q7Ans)
  if ('input[name="q7"]:checked') {
    answered ++;
  } else {
    unanswered ++;
  }
  var q8Ans = $('input[name="q8"]:checked').val();
  console.log(q8Ans)
  if ('input[name="q8"]:checked') {
    answered ++;
  } else {
    unanswered ++;
  }
  $('#unanswered').html("Unanswered: " + unanswered);
};



function countdown() {
      if (timeLeft == -1) {
        clearTimeout(timerId);
        $('#game-start').css("display", "none");
        answered();
        $('#score').css("display", "block");
        $('#start').css("display", "none");
      } else {
        $('#timer').html(timeLeft + ' seconds <br> remaining');
        timeLeft--;
      }
    };

// function userRight () {
//   if ('input [name="q1"]:checked' === correctAnswer) {
//     correct ++;
//     $("#correct").html("Correct:" + correct);
//   } else {
//     ('input [name="q1"]:checked' !== correctAnswer) 
//     incorrect ++;
//     $("#incorrect").html("Incorrect: " + incorrect);
// }
// };

                

 // when the start button is clicked you can see the questions

// 1. During peak production, how many eggs can a Queen Bee lay per year?
var option1 = ["1,500", "700", "300", "2,000"];
var answer1 = option1[0];
console.log(answer1);



// $("#options1").text(JSON.stringify(option1));


// 2. What insect was responsible for transmitting the Bubonic Plague?
var option2 = ["Rat Flea", "Mosquito", "Pigeon", "House Fly"];
var answer2 = option2[0];
console.log(answer2);
// $("#options2").text(JSON.stringify(option2));


// 3. What is the loudest insect?
var option3 = ["Cicada", "House Fly", "Bumble Bee", "Crickets"];
var answer3 = option3[0];
console.log(answer3);
// $("#options3").text(JSON.stringify(option3));


// 4. The Tropical Stick insect is the longest insect. How long was the Tropical Stick?
var option4 = ["14 in", "3 ft", "335 cm", "2 ft"];
var answer4 = option4[0];
console.log(answer4);
// $("#options4").text(JSON.stringify(option4));

// 5. What is a Flea expert called?
var option5 = ["Pullicologist", "Phlebotomist", "Exterminator", "Ecologist"];
var answer5 = option5[0];
console.log(answer5);
// $("#options5").text(JSON.stringify(option5));


// 6. Who bought the European Honey Bee to the US?
var option6 = ["White Colonists", "Native Americans", "Spanish Conqistadors", "French Explorers"];
var answer6 = option6[0];
console.log(answer6);
// $("#options6").text(JSON.stringify(option6));


// 7. The world's largest Roach is six inches long. Which continent does it reside on?
var option7 = ["South America", "Australia", "Africa", "North America"];
var answer7 = option7[0];
console.log(answer7);
// $("#options7").text(JSON.stringify(option7));

// 8. What is the lifespan of a Dragonfly?
var option8 = ["24 hours", "12 days", "72 hours", "9 days"];
var answer8 = option8[0];
console.log(answer8);
// $("#options8").text(JSON.stringify(option8));





});