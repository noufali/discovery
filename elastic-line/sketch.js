var npoints = 400;
var radius = 300;
var angle;
var points = [];
function setup() {
  createCanvas(620,620);
  noiseDetail(2,0.9);
  //angleMode(RADIANS);
  stroke(30);
  //strokeCap(SQUARE);
  strokeWeight(1);
  noFill();
}

function draw() {
  background(255);
  //translate(width/2,height/2);
  for(var x = 10; x < width; x+= 10) {
    beginShape(LINES);
    for(var y = 10; y < height; y+= 10) {
      let n = noise(x * 0.005, frameCount * 0.005);
      vertex(x, y*n);
    }
    endShape(CLOSE);
  }
  for(var x = 10; x < width; x+= 10) {
    beginShape(LINES);
    for(var y = 10; y < height; y+= 10) {
      let n = noise(x * 0.005, frameCount * 0.005);
      vertex(y*n, x);
    }
    endShape(CLOSE);
  }
}
