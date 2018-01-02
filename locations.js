// Evan Mastriano
// November 10, 2015
// Intro To Programming

function northFromEntrance() {
	currentArea = "hall1";
	message = "You take a few steps down the hall. There is a door to your east and more ahead.";
	visitedHall1 = fixScore(visitedHall1);
	document.getElementById("eastButton").disabled = false;
	document.getElementById("southButton").disabled = false;
	breadcrumbTrail.contents.push(" Hall 1");
}

function northFromHall1() {
	currentArea = "hall2";
	message = "You continue down the hall. There is now a door to you west,"
	+ " as well as more to come.";
	visitedHall2 = fixScore(visitedHall2);
	document.getElementById("eastButton").disabled = true;
	document.getElementById("westButton").disabled = false;
	breadcrumbTrail.contents.push(" Hall 2");
}

function northFromHall2() {
	currentArea = "hall3";
	message = "You make your way farther down the hall. The are now doors on both sides of you," +
	" as well as a locked metal gate directly in front of you.";
	visitedHall3 = fixScore(visitedHall3);
	document.getElementById("eastButton").disabled = false;
	document.getElementById("northButton").disabled = false;
	breadcrumbTrail.contents.push(" Hall 3");
}

function northFromHall3() {
	if (hasKey === true) {
		currentArea = "stairwell";
		message = "You use the bloody key to to undo the lock. The gate slowly creaks open and you" +
		" enter a dark stairwell. You can continue forward into some sort of basement it seems.";
		visitedStairwell = fixScore(visitedStairwell);
		document.getElementById("eastButton").disabled = true;
		document.getElementById("westButton").disabled = true;
		breadcrumbTrail.contents.push(" Stairwell");
	} else {
		message = "You struggle with the gate for a moment, but it is clear that it won't budge." +
	" Better head back.";
	}
}

function northFromStairwell() {
	currentArea = "dungeon1";
	message = "You continue down the stairwell to find a dusty old basement." +
	" Upon exiting the stairwell, you notice locked doors on either side. Could this be a dungeon?";
	visitedDungeon1 = fixScore(visitedDungeon1);
	breadcrumbTrail.contents.push(" Dungeon 1");
}

function northFromDungeon1() {
	currentArea = "dungeon2";
	message = "You slowly walk further into this chilling place. As you walk," +
	" you notice a door slightly ajar to your west.";
	visitedDungeon2 = fixScore(visitedDungeon2);
	document.getElementById("northButton").disabled = true;
	document.getElementById("westButton").disabled = false;
	breadcrumbTrail.contents.push(" Dungeon 2");
}

function southFromHall3() {
	currentArea = "hall2";
	message = "You back away from the gate slowly. This place freaks you out, the less time" +
	" wandering around the better. There is now only a door to your west and more down the corridor.";
	document.getElementById("eastButton").disabled = true;
	document.getElementById("northButton").disabled = false;
	breadcrumbTrail.contents.push(" Hall 2");
}

function southFromHall2() {
	currentArea = "hall1";
	message = "You head farther back towards the entrance. There is a door to you east now," +
	" and the door you used to enter is farther south.";
	document.getElementById("eastButton").disabled = false;
	document.getElementById("westButton").disabled = true;
	breadcrumbTrail.contents.push(" Hall 1");
}

function southFromHall1() {
	currentArea = "entrance";
	message = "You head back to the area where you entered." +
	" The doors to the entrance to your south are larger than you remember.";
	document.getElementById("eastButton").disabled = true;
	document.getElementById("southButton").disabled = true;
	breadcrumbTrail.contents.push(" Entrance");
}

function southFromEntrance() {
	message = "You try to open the doors to the entrance, but they won't move an inch." +
	" This place is getting really scary. You better find something quick.";
}

function southFromStairwell() {
	currentArea = "hall3";
	message = "You back out of the stairwell terrified. What is going on in this house?";
	document.getElementById("eastButton").disabled = false;
	document.getElementById("westButton").disabled = false;
	breadcrumbTrail.contents.push(" Hall 3");
}

function southFromDungeon1() {
	currentArea = "stairwell";
	message = "You run back up the stairs. What could have possibly gone on down there?";
	breadcrumbTrail.contents.push(" Stairwell");
}

function southFromDungeon2() {
	currentArea = "dungeon1";
	message = "You start heading back to the stairwell. This place is really giving up the chills.";
	breadcrumbTrail.contents.push(" Dungeon 1");
	document.getElementById("northButton").disabled = false;
	document.getElementById("southButton").disabled = false;
	document.getElementById("westButton").disabled = true;
	
}

function eastFromHall1() {
	currentArea = "closet";
	message = "You enter small, dark room. You can hardly move. It's very uncomfortable," +
	" you should probably head back.";
	visitedCloset = fixScore(visitedCloset);
	document.getElementById("northButton").disabled = true;
	document.getElementById("southButton").disabled = true;
	document.getElementById("eastButton").disabled = true;
	document.getElementById("westButton").disabled = false;
	breadcrumbTrail.contents.push(" Closet");
}

function eastFromLibrary() {
	currentArea = "hall2";
	message = "You exit the room uneasily. Why does anyone need all these books?" +
	" Whatever, you're back in the corridor now. Are you going to head forward or back?";
	document.getElementById("northButton").disabled = false;
	document.getElementById("southButton").disabled = false;
	document.getElementById("eastButton").disabled = true;
	document.getElementById("westButton").disabled = false;
	breadcrumbTrail.contents.push(" Hall 2");
}

function eastFromBedroom() {
	currentArea = "hall3";
	message = "You head out of the bedroom. You felt very uncomfortable in there." +
	" You're surprised you now feel calm seeing this empty corridor. Where to next?";
	document.getElementById("northButton").disabled = false;
	document.getElementById("southButton").disabled = false;
	document.getElementById("eastButton").disabled = false;
	document.getElementById("westButton").disabled = false;
	breadcrumbTrail.contents.push(" Hall 3");
}

function eastFromHall3() {
	currentArea = "bathroom";
	message = "You walk into a small room with an old-fashioned bath. It looks nearly prestine," +
	" but something feels off. You see a reddish splash in the corner, and start to feel weak.";
	visitedBathroom = fixScore(visitedBathroom);
	document.getElementById("northButton").disabled = true;
	document.getElementById("southButton").disabled = true;
	document.getElementById("eastButton").disabled = true;
	document.getElementById("westButton").disabled = false;
	breadcrumbTrail.contents.push(" Bathroom");
}

function eastFromCell1() {
	currentArea = "dungeon2";
	message = "You leave that disgusting little cage quickly. What could" +
	" this place possibly have been used for?";
	document.getElementById("northButton").disabled = true;
	document.getElementById("southButton").disabled = false;
	document.getElementById("eastButton").disabled = true;
	document.getElementById("westButton").disabled = false;
	breadcrumbTrail.contents.push(" Dungeon 2");
}

function westFromCloset() {
	currentArea = "hall1";
	message = "You dart from that terrible enclosed space. Time to keep exploring.";
	document.getElementById("northButton").disabled = false;
	document.getElementById("southButton").disabled = false;
	document.getElementById("eastButton").disabled = false;
	document.getElementById("westButton").disabled = true;
	breadcrumbTrail.contents.push(" Hall 1");
}

function westFromHall2() {
	currentArea = "library";
	message = "You entire into a giant room packed with books and papers. It feels" +
	" like you could learn anything here. Unfortunately, you don't have time to waste. Better head back.";
	visitedStudy = fixScore(visitedStudy);
	document.getElementById("northButton").disabled = true;
	document.getElementById("southButton").disabled = true;
	document.getElementById("eastButton").disabled = false;
	document.getElementById("westButton").disabled = true;
	breadcrumbTrail.contents.push(" Library");
}

function westFromBathroom() {
	currentArea = "hall3";
	message = "You've never felt so sick, or moved so quickly in your life. You" +
	" don't want to head back in there if you don't have to. Try somewhere else.";
	document.getElementById("northButton").disabled = false;
	document.getElementById("southButton").disabled = false;
	document.getElementById("eastButton").disabled = false;
	document.getElementById("westButton").disabled = false;
	breadcrumbTrail.contents.push(" Hall 3");
}

function westFromHall3() {
	currentArea = "bedroom";
	message = "You enter into a lovely room with an elegant bed in the middle. You're taken" +
	" aback by such a lovely sight, but your awe quickly turns to terror." +
	" You feel as if you're being watched. You better head back.";
	visitedBedroom = fixScore(visitedBedroom);
	document.getElementById("northButton").disabled = true;
	document.getElementById("southButton").disabled = true;
	document.getElementById("eastButton").disabled = false;
	document.getElementById("westButton").disabled = true;
	breadcrumbTrail.contents.push(" Bedroom");
}

function westFromDungeon2() {
	currentArea = "cell1";
	message = "You enter the tiny room to find it's cage-like in design." +
	" A human barely would fit comfortably in here. Why is this room even here?";
	visitedCell1 = fixScore(visitedCell1);
	document.getElementById("northButton").disabled = true;
	document.getElementById("southButton").disabled = true;
	document.getElementById("eastButton").disabled = false;
	document.getElementById("westButton").disabled = true;
	breadcrumbTrail.contents.push(" Cell");
}