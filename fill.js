var input;
var analyzer;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  input = new p5.AudioIn();

  input.start();
}

function draw() {
  var volume = input.getLevel();
	var backgroundCol = volume * 255.0;
	if(backgroundCol > 255.0)
	{
		backgroundCol = 255;
	}

	if(volume>0.01)
	{
		noFill();
		stroke(255);
		strokeWeight(1);
		radius = map(volume,0,0.1,0,width)
		ellipse(random(0,width),random(0,height),radius,radius);
	}

  if(volume>0.04)
  {
    noFill();
    stroke(0,0,255);
    strokeWeight(5);
    radius = map(volume,0,0.05,0,width)
    ellipse(random(0,width),random(0,height),radius,radius);
  }

}
