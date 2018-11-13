//console.log("Up and running!")

// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";

// console.log("User flipped " + cardOne);
// console.log("User flipped " + cardThree);

//Establish main variables in memory game
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

//Create variable for first card
var cardOne = cards[1];

cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);

//Create variable for second card
var cardTwo = cards[1];

cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);

//If statement to check and see if cardsInPlay is 2

if (cardsInPlay.length === 2)
	if (cardsInPlay[0] === cardsInPlay[1])
		alert("You found a match");
	else
		alert("Sorry, try again");