class Rocket {
	constructor() {
		this.size = 60;
		this.x = width;
		this.y = height - 80;
	}
	
	move() {
		this.x -= 5 ;
	}
	
	show() {
		
		image(rocketImg, this.x, this.y, this.size, this.size);
	}
}
