//
//Author: Remmie Ajayi
//

//Declaring of  variables
var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares);
var	squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var	messageDisplay = document.querySelector("#message");
var h1 = document.querySelector(".headerChange");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn")
var hardBtn = document.querySelector("#hardBtn")


//Easy Game mode button
easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numOfSquares = 3;
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	h1.style.backgroundColor = "steelblue";
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		} else{
			squares[i].style.display = "none";
		}
	}
})


//Hard Game mode button
hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numOfSquares = 6;
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	h1.style.backgroundColor = "steelblue";
	for(var i = 0; i < squares.length; i++){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
	}
})


//Reset Button
//Resets the game and generate new colors
resetButton.addEventListener("click", function(){
	//Generate all new colors
	colors = generateRandomColors(numOfSquares);
	//pick a new random color
	pickedColor = pickColor();
	//change color display to match picked color
	colorDisplay.textContent = pickedColor;
	//change color of squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	//change the header color from winning color to background color
	h1.style.backgroundColor = "steelblue";
	//Remove the result
	messageDisplay.textContent = "";
	this.textContent = "New Colors"
})



colorDisplay.textContent = pickedColor;

for(var i= 0; i < squares.length; i++){
	//Add initial colors to squares 
	squares[i].style.backgroundColor = colors[i]

	//Functions for what happens when a color is selected
	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//Grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		
		//compare color to pickedColor
		//Checks if it's the right color and displays an output
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again?"
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again"
				}				
	});
}

function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares .length; i++)

//change each color to match given colors
	squares[i].style.backgroundColor = color;
} 

function pickColor(){
	//Select a random color out of the array of colors
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}

function generateRandomColors(num){
	//Generates random colors for variable colors
	//make an array
	var arr = [];
	//add num random colors to array
	for(var i = 0; i < num; i++){
	//get random color and push into arr
		arr.push(randomColor())
	
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue " from 0 - 255
	var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}