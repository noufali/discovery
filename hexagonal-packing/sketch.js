var t, theta;
var maxFrameCount = 200;

function setup(){
  createCanvas(1500,800);
  frameRate(30);
  noiseDetail(2, 0.9);
}

function draw() {
  //frameRate(5);
  background("#FEF2F7");

  t = frameCount/maxFrameCount;
  theta = TWO_PI*t;
  fill("#EA8E70");
  stroke(255);
  strokeWeight(1);
  let f = map(mouseX,0,800,4,20);
  //let f = map(cos(-theta), 0, 1, 5,8);
  let p = new Polygon(80,80,30,f);
  p.breed(20,20);
  //p.lines();
  //p.packing();
}

function Polygon(x, y, radius, npoints) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.npoints = npoints;
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2;
  let quarterAngle = halfAngle / 2;
  this.vertices = [];
  this.centers = [];

  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = this.x + cos(a) * this.radius;
    let sy = this.y + sin(a) * this.radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);

  this.breed = function(row,column) {
    let midline = cos(halfAngle) * this.radius;
    let mx = 2 * (cos(halfAngle) * midline);
    let my = 2 * (sin(halfAngle) * midline);
    let nx = this.x;
    let ny = this.y;
    let dir = 1;

    //hexagonal row
    for (let j=0; j<row;j+=1){
      Polygon(nx , ny, this.radius, this.npoints);
      //hexagonal column
      for (let i=2; i<column;i+=2){
        Polygon(nx, ny + (i*my), this.radius, this.npoints);
        this.centers.push([nx,ny + (i*my)]);
      }
      this.centers.push([nx,ny]);

      dir *= -1;
      nx += mx;
      ny += my * dir;
    }
    return centers;
  }
  this.packing = function(){
    for (let i=0;i<this.centers.length;i++){
      ellipse(this.centers[i][0],this.centers[i][1],this.radius);
    }
    for (let i=0;i<this.vertices.length;i++){
      ellipse(this.vertices[i][0],this.vertices[i][1],this.radius);
    }
  }
  this.lines = function(){
    let midline = cos(halfAngle) * this.radius;
    let mx, my;
    let step;
    for(let d=0;d<this.centers.length;d++){
      let centerX = this.centers[d][0];
      let centerY = this.centers[d][1];

      // for (let a = halfAngle; a < TWO_PI; a += angle) {
      //   mx = centerX + cos(a) * midline;
      //   my = centerY + sin(a) * midline;
      //   line(this.centers[d][0],this.centers[d][1],mx,my);
      // }

      for (let a = 0; a < TWO_PI; a += angle) {
        let sx = centerX + cos(a) * this.radius;
        let sy = centerY + sin(a) * this.radius;
        //line(this.centers[d][0],this.centers[d][1],sx,sy);
        this.vertices.push([sx,sy]);
      }

      push();
      translate(this.centers[d][0],this.centers[d][1]);

      for (let k=0;k<6;k++){
        rotate(angle);
        for (let g=-halfAngle; g < halfAngle; g += quarterAngle){
          let next = midline / cos(g);
          let px = 0 + sin(g) * next;
          let py = 0 + cos(g) * next;
          //let py2 = 0 - cos(g) * next;
          line(0,0,px,py);
          //line(0,0,px,py2);
        }
      }
      pop();
    }
  }
}

//   stroke("#D6D2CC");
//   calculations for hexagonal packing
//   let angle_r = ( TWO_PI / s ) / 2 ;
//   let length = cos(angle_r) * r;
//   let ox = 2 * (cos(angle_r) * length);
//   let oy = 2 * (sin(angle_r) * length);
//
//   let nx = originX;
//   let ny = originY;
//   let dir = 1;
//   let centers = [];
//
//   //hexagonal row
//   for (let j=0; j<7;j+=1){
//     polygon(nx , ny, 50, 6);
//     //hexagonal column
//     for (let i=2; i<15;i+=2){
//       polygon(nx, ny + (i*oy), r, s);
//       centers.push([nx,ny + (i*oy)]);
//     }
//     centers.push([nx,ny]);
//
//     dir *= -1;
//     nx += ox;
//     ny += oy * dir;
//   }
//
//   let value = map(mouseX,0,650,50,100);
//   for(let d=0;d<centers.length;d++){
//     let centerX = centers[d][0];
//     let centerY = centers[d][1];
//     //centers[d][0] = random(-10,10) + centers[d][0];
//     //centers[d][1] = random(-10,10) + centers[d][1];
//     let angle = ( TWO_PI / s );
//     let halfAngle = angle / 2;
//     let quarterAngle = halfAngle / 4;
//     let mx, my;
//     let midline = cos(halfAngle) * r;
//     stroke("#D6D2CC");
//     strokeWeight(0.5);
//
//     // for (let a = halfAngle; a < TWO_PI; a += angle) {
//     //   mx = centerX + cos(a) * midline;
//     //   my = centerY + sin(a) * midline;
//     //   line(centers[d][0],centers[d][1],mx,my);
//     // }
//     push();
//     translate(centers[d][0],centers[d][1]);
//     // let distance = dist(0,0,mouseX,mouseY);
//     // ellipse(0,0,5);
//     // if (distance < 90) {
//     //   translate(mouseX,mouseY);
//     //   //centers[d][0] = mouseX;
//     //   //centers[d][1] = mouseY;
//     // }
//
//     for (let k=0;k<6;k++){
//       rotate(angle);
//       for (let g=-halfAngle; g < halfAngle; g += quarterAngle){
//         let next = midline / cos(g);
//         let px = 0 + sin(g) * next;
//         let py1 = 0 + cos(g) * next;
//         let py2 = 0 - cos(g) * next;
//         //ellipse(px,py2,5);
//         //line(random(-10,10),random(-10,10),px,py1);
//         //line(random(-10,10),random(-10,10),px,py2);
//       }
//     }
//     pop();
//   }
