$(document).ready(function(){

$('#game-start').css("display", "none");

var timeLeft = 30;
// var elem = document.getElementById('#timer');
var timerId = setInterval(countdown, 1000);
var correct = 0;
var incorrect = 0;
var unanswered = 0;




$('#start').click(function(){
    $('#game-start').css("display", "block")
    $('#start').css("display", "none");
}); 
function countdown() {
      if (timeLeft == -1) {
        clearTimeout(timerId);
        $('#game-start').css("display", "none");
        $('#score').css("display", "block");
        $('#correct').html('Answers Correct: ' + correct);
        $('#incorrect').html('Answers Incorrect: ' + incorrect);
      } else {
        $('#timer').html(timeLeft + 'seconds remaining');
        timeLeft--;
      }
    };

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

var checkAnswers = function() {

    var radios = document.getElementsByName('choice');
    var val= "";
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
           val = radios[i].value; 
           break;
         }
    }
    
    if (val == "" ) {
     correct ++;
     } else {
         incorrect ++;
     }
  };

  



});
