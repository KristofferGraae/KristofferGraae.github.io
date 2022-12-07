let mario;
let marioImg;
let backgroundImg;
let plantImg;
let plants = [];
let lastspawntime = 0
let timebetweenspawns = 3000


function preload() {
	marioImg = loadImage('mario.png');
	plantImg = loadImage('plant.png');
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
		plants.push(new Plant())
	}
	
	
	
	background(backgroundImg);
	mario.show();
	mario.move();
		
		for (let Plant of plants) {
		Plant.move();
		Plant.show();
			
	}
}

