//Evan Mastriano
//November 10, 2015
//Intro to Programming

var currentArea = "entrance";

var score = 0;

var message;

var visitedHall1 = false;
var visitedHall2 = false;
var visitedHall3 = false;
var visitedCloset = false;
var visitedStudy = false;
var visitedBedroom = false;
var visitedBathroom = false;
var visitedStairwell = false;
var visitedDungeon1 = false;
var visitedDungeon2 = false;
var visitedCell1 = false;

var hasKey = false;
var hasNote = false;
var hasWatch = false;
var hasChain = false;

var breadcrumbTrail = {
	contents: []
}

function showMessage(descrip) {
	document.getElementById("text").innerHTML = descrip;
}

function fixScore(zone) {
	if (zone === false) {
		score = score + 5;
		return true;
	}
}

function moveNorth() {
	switch (currentArea) { 
	case "entrance":
		northFromEntrance();
		break;
	case "hall1":
		northFromHall1();
		break;
	case "hall2":
		northFromHall2();
		break;
	case "hall3":
		northFromHall3();
		break;
	case "stairwell":
		northFromStairwell();
		break;
	case "dungeon1":
		northFromDungeon1();
		break;
	default:
		message = "There is a wall to your North. You try pushing on it, but it is quite solid." +
		" Better try another idea.";
	}
	showMessage(message);
	showScore("Score : " + score);
}

function moveSouth() {
	switch (currentArea) {
	case "hall3":
		southFromHall3();
		break;
	case "hall2":
		southFromHall2();
		break;
	case "hall1":
		southFromHall1();
		break;
	case "entrance":
		southFromEntrance();
		break;
	case "stairwell":
		southFromStairwell();
		break;
	case "dungeon1":
		southFromDungeon1();
		break;
	case "dungeon2":
		southFromDungeon2();
		break;
	default:
		message = "There's a wall to you South. You try pushing on it, but nothing happens.";
	}
	showMessage(message);
}

function moveEast() {
	switch (currentArea) {
	case "hall1":
		eastFromHall1();
		break;
	case "library":
		eastFromLibrary();
		break;
	case "bedroom":
		eastFromBedroom();
		break;
	case "hall3":
		eastFromHall3();
		break;
	case "cell1":
		eastFromCell1();
		break;
	default:
		message = "There's nowhere left to go in that direction. Try exploring elsewhere.";
	}
	showMessage(message);
	showScore("Score : " + score);
}

function moveWest() {
	switch(currentArea) {
	case "closet":
		westFromCloset();
		break;
	case "hall2":
		westFromHall2();
		break;
	case "bathroom":
		westFromBathroom();
		break;
	case "hall3":
		westFromHall3();
		break;
	case "dungeon2":
		westFromDungeon2();
		break;
	default:
		message = "No point in heading this way. You've got nowhere to go, try something else.";
	}
	showMessage(message);
	showScore("Score : " + score);
}

function showScore(descrip) {
	document.getElementById("score").innerHTML = descrip;
}

function inputButton() {
	var input = document.getElementById("playerMove").value;
	if (input === "N" || input === "n" || input === "North" || input === "north") {
		moveNorth();
	} else if (input === "S" || input === "s" || input === "South" || input === "south") {
		moveSouth();
	} else if (input === "E" || input === "e" || input === "East" || input === "east") {
		moveEast();
	} else if (input === "W" || input === "w" || input === "West" || input === "west") {
		moveWest();
	} else if (input === "I" || input === "i" || input === "Inventory" || input === "inventory") {
		showInventory();
	} else if (input === "T" || input === "t" || input === "Take" || input === "take") {
		takeItem();
	} else if (input === "H" || input === "h" || input === "Help" || input === "help") {
		showHelp();
	} else if (input === "P" || input === "p" || input === "Previous" || input === "previous") {
		showPreviousMoves();
	} else {
		showMessage("Invalid input. Please try again.");
	}
}

function takeItem() {
	if (currentArea === "closet") {
		if (hasWatch === false) {
			hasWatch = true;
			message = "You see something shine for a moment on the floor near the door." +
			" You bend over to see it's an old pocket watch. Might as well take it.";
		} else {
			message = "You already picked up the watch. There is nothing else important here.";
		}
	} else if (currentArea === "library") {
		if (hasNote === false) {
			hasNote = true;
			message = "A small piece of paper sticks out on the ground in front of you." +
			" You pick it up and read it. \"Beware the dungeon!\" You decide to take it with you.";
		} else {
			message = "None of the other papers sticks out to you. No point in taking anything else.";
		}
	} else if (currentArea === "bathroom") { 
		if (hasKey === false) {
			hasKey = true;
			message = "You notice something glimmer in the red pool. As you approach it, you're" +
			" struck with horror. You quickly grab it and turn around. The key is covered in blood," +
			" but you know it's necessary somehow.";
		} else {
			message = "You already picked up the key. No point in going back there now.";
		}
	} else if (currentArea === "cell1") {
		if (hasChain === false) {
			hasChain = true;
			message = "You notice a rusty chain sitting in the corner of this suffocating room." +
			" You decide to grab it.";
		} else {
			message = "You are currently holding the chain. There nothing else in this cage to pick up.";
		}
	} else {
		message = "There is nothing of note to pick up now.";
	}
	showMessage(message);
}

function showHelp() {
	message = "Welcome to The Corridor! Thank you for playing my game. You are given the task of exploring" +
	" an abandoned building on the outskirts of town. You have four directions (N, S, E, W) you can move," +
	" as well as the opportunity to take items (T), check your inventory (I), and see your previous moves (P)" +
	". Good luck trying to solve the mystery of this disturbing place.";
	showMessage(message);
}

function showInventory() {
	if (hasWatch === true && hasNote === false && hasKey === false && hasChain === false) {
		message = "You are currently only holding an old pocket watch.";
	} else if (hasWatch === false && hasNote === true && hasKey === false && hasChain === false) {
		message = "You only have that note from the library.";
	} else if (hasWatch === false && hasNote === false && hasKey === true && hasChain === false) {
		message = "Just thinking about the bloody key you have freaks you out, but it's all you've got right now.";
	} else if (hasWatch === false && hasNote === false && hasKey === true && hasChain === true) {
		message = "You currently have that wretched key and the chain you found from that tiny room.";
	} else if (hasWatch === true && hasNote === true && hasKey === false && hasChain === false) {
		message = "Right now you have that old watch and the mysterious note.";
	} else if (hasWatch === false && hasNote === true && hasKey === true && hasChain === true) {
		message = "You have the weird note, bloody key, and rusty chain on you currently.";
	} else if (hasWatch === true && hasNote === true && hasKey === true && hasChain === false) {
		message = "You have a watch, key, and note on you. You seem to have all the items from the rooms up here. ";
	} else if (hasWatch === true && hasNote === true && hasKey === true && hasChain === true) {
		message = "You picked up a watch, note, key and chain from this horrifying place.";
	} else if (hasWatch === true && hasNote === false && hasKey === true && hasChain === false) {
		message = "So far you've picked up the old watch and the bloody key.";
	} else if (hasWatch === true && hasNote === false && hasKey === true && hasChain === true) {
		message = "You have the watch, key, and chain from this terrible place.";
	} else if (hasWatch === false && hasNote === true && hasKey === true && hasChain === false) {
		message = "You only have that odd note and the bloody key so far.";
	} else {
		message = "You currently have nothing but the clothes on your back.";
	}
	showMessage(message);
}

function showPreviousMoves() {
	message = "So far, you've moved to" + breadcrumbTrail.contents + ".";
	showMessage(message);
}