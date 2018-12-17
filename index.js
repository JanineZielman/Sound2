import OutputTypeEnum from './output-type-enum';
import Capturer from './capturer';

var video;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(51);
  video = createCapture(VIDEO);
  video.size(windowWidth,windowHeight);
  video.hide();
}

function draw() {
  fill(255);
  text("hello", 50, 50)
  tint(random(255),random(255),random(255),15);
  image(video,0,0, windowWidth, height);
}


export const OutputType = new OutputTypeEnum();

export function capture(outputType, htmlDocument, options) {
	return (new Capturer()).capture(outputType, htmlDocument, options);
}
