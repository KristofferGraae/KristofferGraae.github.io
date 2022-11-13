function setup() {
	createCanvas(windowWidth, 100);
	background(0);
	
	text_input = createInput();
	let text_btn = createButton("Text");
	text_btn.mousePressed(dropText);
	
	let erase_btn = createButton("Erase");
	erase_btn.mousePressed(clearCanvas);
}

function clearCanvas () {
	clear();
	
}

function dropText() {
	fill(255);
	text(text_input.value(), random(width), random(height));
}
