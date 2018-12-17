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
let nBalls = 0;
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
  micLevel = mic.getLevel(.1);
  for (var x=0; x < width; x+=20) {
    var noiseVal = noise((micLevel+x)*2, micLevel*2);
    stroke(255);
    strokeWeight(noise(micLevel*x));
    line(-800 + micLevel*50+noiseVal*4000, height, -800 + micLevel*50+noiseVal*4000, 0);
}
}
