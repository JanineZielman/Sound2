var input;
var analyzer;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  input = new p5.AudioIn();

  input.start();
}

function draw() {
  var volume = input.getLevel(0.3);

  if(volume>0.01)
	{
		noFill();
		stroke(0,0,255);
		strokeWeight(1);
		radius = map(volume,0,0.1,0,width)
    line(width, constrain(height-volume*height*5, 0, height), 0, constrain(height-volume*height*5, 0, height));
  }


if(volume>0.02)
{
  noFill();
  stroke(255,0,0);
  strokeWeight(1);
  radius = map(volume,0,0.1,0,width)
  line(constrain(height-volume*height, 0, height*5), height, constrain(height-volume*height, 0, height*5), 0);
}

if(volume>0.04)
{
  noFill();
  stroke(0,255,0);
  strokeWeight(1);
  radius = map(volume,0,0.1,0,width)
  ellipse(width/2, constrain(height-volume*height*5, 0, height), 20, 1);
  ellipse(constrain(height-volume*height, 0, height), height/2, 1, 20);
}


}
