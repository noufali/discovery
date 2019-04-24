var npoints = 400;
var radius = 250;
var angle;
function setup() {
  createCanvas(620,620);
  noiseDetail(2,0.9);
  //angleMode(RADIANS);
  stroke(255);
  strokeWeight(3);
  frameRate(30);
  noFill();
}

function draw() {
  background(30);
  angle = TWO_PI / npoints;
  translate(width/2,height/2);

  for(var j = radius; j > 0; j-= 20) {
    beginShape();
    for (let a = 0; a < PI; a += angle) {
      let sx = 0 + cos(a) * j;
      let sy = 0 + sin(a) * j;
      let n = noise(sx * 0.005, sy * 0.005, frameCount * 0.05);
      //vertex(sx, sy*n);
      vertex(sx, sy);
    }
    for (let a = 0; a < PI; a += angle) {
      let sx = 0 - cos(a) * j;
      let sy = 0 - sin(a) * j;
      let n = noise(sx * 0.005, sy * 0.005, frameCount * 0.05);
      vertex(sx, sy*n);
    }
    endShape(CLOSE);
  }
}
