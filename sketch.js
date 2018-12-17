var mic;

class objects{
	constructor(){
		this.vx = random(0.1,2); //position x
		this.vy = random(0.1,1); //position y
		this.x = random(width);
		this.y = random(height);
		this.m = random(height/10,height);
		this.c = random();
		this.w = random(-1,1);
	}
	draw(level){
		fill(this.c, this.c, this.c , 1-level);
		ellipse(this.x, this.y, this.m*level);

		this.x += this.vx*(this.m + level);
		this.y += this.vy*(this.m + level);

		if (this.x>width || this.x < 0){
			this.vx = -this.vx
		}
		if (this.y>height || this.y < 0){
			this.vy = -this.vy
		}
	}
}
let nBalls = 200;
let balls=[];
function setup(){
	createCanvas(windowWidth, windowHeight);
	background(0,0,0);
	mic = new p5.AudioIn()
	//have start() before getLevel()
  mic.start();
	colorMode(RGB,1);
	noStroke();
	for(let i = 0; i<nBalls; i++){
		balls.push(new objects());
	}
}

function draw(){
	background(0, .15);
  micLevel = mic.getLevel(.9);
	for(let i = 0; i<nBalls; i++){
		balls[i].draw(micLevel);
    noStroke();
	}
}
