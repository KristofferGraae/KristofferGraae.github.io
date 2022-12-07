let mario;
let marioImg;
let backgroundImg;
let rocketImg;
let rockets = [];
let lastspawntime = 0
let timebetweenspawns = 3000
let jumpSound;

function preload() {
	marioImg = loadImage('mario.png')
	rocketImg = loadImage('rocket.png')
	backgroundImg = loadImage('mariobackground.png')
	jumpSound = loadSound('mario-jump-sound-effect_1.mp3')
		
}

function setup() {
	createCanvas(800, 500);
	mario = new Mario();
	
}
function keyPressed() {
	if (key == ' ') {
		mario.jump();
	if (key == ' ') {
		jumpSound.play();
	}
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

