function setup() {
	createCanvas(windowWidth, windowHeight);
    img = loadImage("a.jpeg");
    background(img);
}

function draw() {
	//gameboy
	stroke(0);
	strokeWeight(1);
	fill('lightgrey');
	rect(150, 100, 400, 500, 10);
	
	//gameboy screen
	stroke(0);
	strokeWeight(0.5);
	fill('darkgrey');
	rect(175, 130, 350, 220, 5);
	
	noStroke();
	fill(155, 207, 159);
	rect(185, 140, 330, 200, 5);
	
	//cross button
	stroke(0);
	strokeWeight(0.5);
	fill('darkgrey');
	circle(230, 460, 110);
	
	noStroke();
	fill(0);
	rect(215, 420, 30, 80, 5);
	
	noStroke();
	fill(0);
	rect(191, 445, 80, 30, 5);
	
	
}

