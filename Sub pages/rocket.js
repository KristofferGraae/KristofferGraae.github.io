class Plant {
	constructor() {
		this.size = 90;
		this.x = width;
		this.y = height - 90;
	}
	
	move() {
		this.x -= 7; //speed
	}
	
	show() {
		
		image(plantImg, this.x, this.y, this.size, this.size);
	}
}
