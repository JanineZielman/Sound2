var video;
var snapshots = [];
var counter = 0;
var total =88
function setup() {
 createCanvas(windowWidth, windowHeight);
  background(51);
  video = createCapture(VIDEO, ready);
  video.size(windowWidth, windowHeight);
}

var go = false;

function ready(){
  go = true;
}

function draw() {
  if (go){
    snapshots[counter] = video.get();
    counter++;
    if (counter == total) {
    counter = 0;
   }
  }

var w = 320;
var h = 240;
var x = 0;
var y = 0;

for (var i = 0; i < snapshots.length; i++) {
  var index = (i+ frameCount) % snapshots.length;
  image(snapshots[index], x, y, w, h);
  x = x + w/2;
  if (x > width) {
    x=0;
    y= y + h/2;
  }
}
  //tint(random(255),random(255),random(255),15);
 //image(video,0,0, 320, 240);

}
