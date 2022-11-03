//var colorPallette = ['#0EC6EA', '#73E840', '#DBE840', '#EC4210', '#EC9AD8', '#BF50EC']

function setup() {
  createCanvas(800, 800);
  stroke(random(10));
	strokeWeight(2);
  background(255);
	button = createButton("Generate Shape");
	button.position(300, 600);
	button.mousePressed(drawShape);
	diffshapes = new shapes();
}
class shapes {
	constructor(x, y, size, color, bounds) {
	this.x = random(400, 400);
	this.y = random(400, 400);
	this.size = random(30, 150);
	//this.color = (173, random(216), 230);
	this.color = color;
	this.bounds = bounds;
	}
move () {
  // top, right, down, left
  if (this.x < this.bounds[400, 400] || this.bounds[0] < this.x) {
  	
  	}
  if (this.y < this.bounds[400, 400] || this.bounds[0] < this.y) {
  	
  	}	
  }
}
function drawShape() {
	clear();
	push();
	translate(random(800), random(800)); 
  var shapes = []; 
  for(let i = 0; i < 1; i++){ // amount of shapes to draw (1 at a time pr btn press)
    shapes.push(generateDiffshapes(30, 150, random(3, 10)));  
		
}
	for(var j = 0; j < shapes.length; j++){ // loop for random colors
    fill(random(173), random(216), 230);
		//fill(shapes[j][i].color); 
		
		beginShape();
    for(let i = 0; i < shapes[j].length; i++){ // loop for shape position
      vertex(shapes[j][i].x, shapes[j][i].y);
		}
	endShape(CLOSE);
	}
	pop();
}

function generateDiffshapes(minSize, maxSize, amount){ 
	// min to avoid close shapes
    var diffshapes = [];
    var spread = 2*PI/(amount+1); 
  	for(var i = 0; i < amount; i++){ 
      diffshapes.push(p5.Vector.fromAngle(random(i*spread, (i+1)*spread)).mult(random(minSize, maxSize)));
		// creates vector from corner to avoid close corners
     }
    return diffshapes; 
  }