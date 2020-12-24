var gamePattern = [];
var clicked = [];
var buttonColors = ["green", "red", "yellow", "blue"];

$(".start").on("click", function(){
  $("h1").text("Level 1");
  nextSequence();
});

$(document).on("keypress",function(){
  $("h1").text("Level 1");
  nextSequence();
});

$(".btn").click(function(){
  var buttonPressed = this.id;
  clicked.push(buttonPressed);
  animateClick(buttonPressed);
  check(buttonPressed);
});

function check(color){
  if(color==gamePattern[clicked.length-1]){
    makeSound(color);
    if(clicked.length===gamePattern.length){
      setTimeout(function(){
        clicked = [];
        nextSequence();
        $("h1").text("Level " + gamePattern.length);
      },1000);
    }
  }else{
    $("h1").text("Game Over, Press Any Key to Restart");
    var wrong = new Audio("sounds/wrong.mp3");
    wrong.play();
    gamePattern = [];
    clicked = [];
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },100);
  }
}

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  animateNext(randomChosenColor);
  makeSound(randomChosenColor);
}

function animateClick(color){
  $("#" + color).addClass("pressed");
  setTimeout(function(){
    $("#" + color).removeClass("pressed");
  },100);
}

function animateNext(color){
  $("#" + color).fadeOut(100).fadeIn(100);
}

function makeSound(color) {
  switch (color) {
    case "green":
      var green = new Audio("sounds/green.mp3");
      green.play();
      break;
    case "red":
      var red = new Audio("sounds/red.mp3");
      red.play();
      break;
    case "yellow":
      var yellow = new Audio("sounds/yellow.mp3");
      yellow.play();
      break;
    case "blue":
      var blue = new Audio("sounds/blue.mp3");
      blue.play();
      break;
  }
}
