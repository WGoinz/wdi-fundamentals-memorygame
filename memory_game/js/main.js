//console.log("Up and running!")

// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";

// console.log("User flipped " + cardOne);
// console.log("User flipped " + cardThree);

//Establish main variables in memory game
var cards = [
	{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
	},
	{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
	},
	{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
	},
	{
 	rank: "king",
 	suit: "diamonds",
 	cardImage: "images/king-of-diamonds.png"
	},
];
var cardsInPlay = [];
//var score = 1
var score = [0];

//Create checkForMatch function
var checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
		setTimeout(()=>alert("Congratulations!"), 500);
		setTimeout(()=>remakeBoard(), 500);
		score.unshift((score[0]) + 1);
		
		// create span to add as score
		// var createScoreSpan = document.createElement("span");
		// var scoreText = document.createTextNode(score[0]);
		// createScoreSpan.appendChild(scoreText);

		var addScore = document.getElementById("gameScore");
		addScore.innerHTML = score[0];

		
		console.log(score);xs
	} 
	else {
		
		console.log("Sorry, try again.");	
		setTimeout(()=>remakeBoard(), 500);
		setTimeout(()=>alert("Sorry, try again."), 500);
		

	}
};

//Create flipCard function
var flipCard = function(){
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].suit)
	console.log(cards[cardId].cardImage)
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	
	if (cardsInPlay.length < 2){
		console.log("keep drawing");
	} else if (cardsInPlay.length === 2){
		checkForMatch();
	}
};



// Create createBoard function
var createBoard = function (){
	for (var i = 0; i < cards.length; i++) {
    	var cardElement = document.createElement('img');
    	cardElement.setAttribute('src', 'images/back.png');
    	cardElement.setAttribute('data-id', i);
    	cardElement.addEventListener('click', flipCard);
    	document.getElementById('game-board').appendChild(cardElement);
	}
};

var remakeBoard = function (){
	var removeCards = document.getElementById('game-board');
	removeCards.innerHTML = "";
	// var removeScore = document.getElementById('gameScore');
	// removeScore.innerHTML = "";
	cardsInPlay = [];


	for (var i = 0; i < cards.length; i++) {
    	var cardElement = document.createElement('img');
    	cardElement.setAttribute('src', 'images/back.png');
    	cardElement.setAttribute('data-id', i);
    	cardElement.addEventListener('click', flipCard);
    	document.getElementById('game-board').appendChild(cardElement);
	}

};



document.getElementById('reset').addEventListener('click', remakeBoard);

createBoard();













	// if (cardsInPlay.length === 2)
	// if (cardsInPlay[0] === cardsInPlay[1])
	// 	alert("You found a match");
	// else
	// 	alert("Sorry, try again");

// //Create variable for first card
// var cardOne = cards[1];

// cardsInPlay.push(cardOne);
// console.log("User flipped " + cardOne);

// //Create variable for second card
// var cardTwo = cards[1];

// cardsInPlay.push(cardTwo);
// console.log("User flipped " + cardTwo);

//If statement to check and see if cardsInPlay is 2

// if (cardsInPlay.length === 2)
// 	if (cardsInPlay[0] === cardsInPlay[1])
// 		alert("You found a match");
// 	else
// 		alert("Sorry, try again");