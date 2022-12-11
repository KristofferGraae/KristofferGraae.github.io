class Mario {
	constructor() {
		this.size = 100;
		this.x = 50;
		this.y = height - this.size;
		this.vy = 0;
		this.g = 1.5;
	}
	
	jump() {
		if (this.y == height - this.size) {
		this.vy = -33;
		}
	}
	hits(Plant) {
		return collideRectRect(this.x, this.y, this.size, this.size, Plant.x, Plant.y, Plant.size, Plant.size);
	}
	
	move() {
		this.y += this.vy;
		this.vy += this.g;
		this.y = constrain(this.y, 0, height - this.size); 
	}
	
	show() {
		image(marioImg, this.x, this.y, this.size, this.size);
		
	}
}