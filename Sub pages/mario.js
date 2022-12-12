class Mario {
	constructor() {
		this.size = 100;
		this.x = 50;
		this.y = height - this.size;
		this.vy = 0;
		this.g = 1.5; //gravity
	}
	
	jump() {
		if (this.y == height - this.size) {
		this.vy = -33; //jump height for mario
		}
	}
	hits(Plant) {
		return collideRectRect(this.x, this.y, this.size, this.size, Plant.x, Plant.y, Plant.size, Plant.size); //rect for mario and plant
	}
	
	move() {
		this.y += this.vy;
		this.vy += this.g; // gravity so mario falls back down
		this.y = constrain(this.y, 0, height - this.size); // constrain so you cannot keep jumping
	}
	
	show() {
		image(marioImg, this.x, this.y, this.size, this.size);
		
	}
}