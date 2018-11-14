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



//Create checkForMatch function
var checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} 
	else {
		alert("Sorry, try again.");
		console.log("Sorry, try again.");	
	}
};

//Create flipCard function
var flipCard = function(cardId){
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].suit)
	console.log(cards[cardId].cardImage)
	cardsInPlay.push(cards[cardId].rank);
	if (cardsInPlay.length === 2){
		checkForMatch();
	};
};

flipCard(0);
flipCard(2);

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