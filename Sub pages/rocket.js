class Plant {
	constructor() {
		this.size = 60;
		this.x = width;
		this.y = height - 60;
	}
	
	move() {
		this.x -= 5 ;
	}
	
	show() {
		
		image(plantImg, this.x, this.y, this.size, this.size);
	}
}
