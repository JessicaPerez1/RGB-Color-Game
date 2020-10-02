//Array of colors
var colors = generateRandomColors(6);
//DOM ELEMENTS
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
//INITIALIZE VARIABLES
var pickedColor = pickColor();

//UPDATE RGB TEXT CONTENT DISPLAY
colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i];
  //add click listeners to squares
  squares[i].addEventListener("click", function () {
    //grab color of picked square
    var clickedColor = this.style.backgroundColor;
    //compare color to picked color
    if (clickedColor === pickedColor) {
      //if match, display correct message
      messageDisplay.textContent = "Correct";
      changeColors(clickedColor);
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try again";
    }
  });
}

//helper function change colors of all squares when correct
function changeColors(color) {
  //loop through all squares
  for (var i = 0; i < squares.length; i++) {
    //change each color to match correct color
    squares[i].style.backgroundColor = color;
  }
}
//random color pick
function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
function generateRandomColors(num) {
  //make an array
  var arr = [];
  //add num random colors to arr
  for (var i = 0; i < num; i++) {
    //get random color
    //push into array
    arr.push(randomColor());
  }
  //return array
  return arr;
}
function randomColor() {
  //pick a red from 0-255
  var r = Math.floor(Math.random() * 256);
  //pickk a green from 0-255
  var g = Math.floor(Math.random() * 256);
  //pickk a blue from 0-255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
