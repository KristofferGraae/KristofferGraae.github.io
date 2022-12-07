let mario;
let marioImg;
let backgroundImg;
let rocketImg;
let rockets = [];
let lastspawntime = 0
let timebetweenspawns = 3000


function preload() {
	marioImg = loadImage('mario.png');
	rocketImg = loadImage('rocket.png');
	backgroundImg = loadImage('mariobackground.png');
		
}

function setup() {
	createCanvas(windowWidth, 500);
	mario = new Mario();
	
}
function keyPressed() {
	if (key == ' ') {
		mario.jump();
	}
}

function draw() {
	if (lastspawntime + timebetweenspawns < millis()) {
		lastspawntime = millis()
		rockets.push(new Rocket())
	}
	
	
	
	background(backgroundImg);
	mario.show();
	mario.move();
		
		for (let Rocket of rockets) {
		Rocket.move();
		Rocket.show();
			
	}
}

