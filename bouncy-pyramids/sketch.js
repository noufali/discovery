var randoms = [];
var index;
var offset;

function setup() {
  createCanvas(600,600);
  noiseDetail(2,0.9);
  rectMode(CENTER);
  //fill(0);
  //stroke(255);
  //strokeWeight(0.5);
  for (let r=0;r<225;r++){
    randoms.push(random(-20), random(20));
  }
}

function draw() {
  background(255);
  index = 0;
  //translate(width/2,height/2);
  for(var x = 10; x < width; x+= 40) {
    for(var y = 10; y < height; y+= 40) {
      //push();
      //translate(x,y);
      for (var s=1;s>=0;s-=0.09) {
        let m = map(s,1,0,0,randoms[index]* cos(frameCount * 0.05));
        //let m = map(s,1,0,0,randoms[index]);
        let d = dist(x,y,mouseX,mouseY);
        let nx = (mouseX-x);
        let ny = (mouseY-y);
        let mx = map(s,1,0,1,nx);
        let my = map(s,1,0,1,ny);
        if (d < 30){
          rect(x+mx,y+my,40*s,40*s);
        } else {
          rect(x+m,y+m,40*s,40*s);
        }
        //   rect(mx,my,40*s,40*s);
        //   let m = map(s,1,0,0,randoms[index]);
        //   rect(m,m,40*s,40*s);
        // }
      }
      //pop();
      index ++
    }
  }
  //noLoop();

}
