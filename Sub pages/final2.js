let mario;
let marioImg;
let backgroundImg;
let plantImg;
let plants = [];
let lastspawntime = 0
let timebetweenspawns = 3000
let x1 = 0;
let x2;
let backgroundSpeed = 7;


function preload() {
	marioImg = loadImage('mario.png');
	plantImg = loadImage('plant1.png');
	backgroundImg = loadImage('mariobackground.png');
		
}

function setup() {
	createCanvas(windowWidth, 500);
	mario = new Mario();
    x2 = width;
	
}
function keyPressed() {
	if (key == ' ') {
		mario.jump();
	}
}

function draw() {
    image(backgroundImg, x1, 0, width, height);
  image(backgroundImg, x2, 0, width, height);
  
  x1 -= backgroundSpeed;
  x2 -= backgroundSpeed;
  
  if (x1 < -width){
    x1 = width;
  }
  if (x2 < -width){
    x2 = width;
  }
	if (lastspawntime + timebetweenspawns < millis()) {
		lastspawntime = millis()
		plants.push(new Plant())
	}
	
	mario.show();
	mario.move();
		
		for (let Plant of plants) {
		Plant.move();
		Plant.show();
        if (mario.hits(Plant)) {
            console.log('You lost');
            noLoop();
        }
			
	}
}

