var input;
var analyzer;

/function setup() {
  input = new p5.AudioIn();

  input.start();
}

function draw() {
 var volume = input.getLevel(0.3);

 if(volume>0.01)
	{
var vid = document.getElementById("myVideo");

  }


}


function playVid() {
  var volume = input.getLevel(0.3);
vid.play();
}
