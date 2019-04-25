var gap;
var row, rows;
var index;
var shape, shapes;
var randoms = [];
var colours = [];
var start = 0;
var begin = 0;


function setup() {
  createCanvas(800,800);
  noiseDetail(2,0.9);
  noStroke();
  //stroke(255);
  //strokeWeight(1);
  //fill(30);
  //noFill();
  gap = 80;
  let num = width / gap;
  for (let i=0;i<num*num;i++){
    randoms.push(random(-20), random(20));
  }

  for (let c=0;c<num*num*num;c++){
    colours.push(Math.floor(random(60)));
  }
}

function draw() {
  background(255);
  rows = [];
  shapes = [];
  index = 0;
  start = 0;
  begin = 0;

  let v = map(mouseX,0,width,0,30);

  // grid of points -> new grid
  for(let y = gap; y < height; y+= gap) {
    row = [];
    for(let x = gap; x < width; x+= gap) {
      let mid = x + (gap / 2);
      //ellipse(x,y,10);
      // draw new grid
      if (index == 0 && x < width-gap || index%2 == 0 && x < width-gap) {
        row.push({x: mid + randoms[start]* cos(-frameCount * 0.05), y: y + randoms[start] * cos(frameCount * 0.03)});
        start ++
        //ellipse(mid,y,10);
      }
      if (index%2 != 0) {
        row.push({x: x + randoms[start] * cos(-frameCount * 0.01), y: y + randoms[start] * cos(frameCount * 0.03)});
        start ++
        //ellipse(x,y,10);
      }
    }
    rows.push(row);
    index ++
  }

  // draw triangles
  for (let r = 0; r < rows.length; r++){
    for (let p = 0; p < rows[r].length; p++){
      if ( r == 0 && r < rows.length-1 && p != rows[r+1].length-1 || r%2 == 0 && r < rows.length-1 && p != rows[r+1].length-1){
        let ax = rows[r][p].x;
        let ay = rows[r][p].y;
        let bx = rows[r+1][p].x;
        let by = rows[r+1][p].y;
        let cx = rows[r+1][p+1].x;
        let cy = rows[r+1][p+1].y;
  
        push();
        fill(colours[begin]);
        beginShape(TRIANGLES);
        vertex(ax,ay);
        vertex(bx,by);
        vertex(cx,cy);
        endShape(CLOSE);
        pop();
        begin ++
      }
      if ( r == 0 && r < rows.length-1 && p != rows[r].length-1 || r%2 == 0 && r < rows.length-1 && p != rows[r].length-1){
        let dx = rows[r][p].x;
        let dy = rows[r][p].y;
        let ex = rows[r][p+1].x;
        let ey = rows[r][p+1].y;
        let fx = rows[r+1][p+1].x;
        let fy = rows[r+1][p+1].y;
        push();
        fill(colours[begin]);
        beginShape(TRIANGLES);
        vertex(dx,dy);
        vertex(ex,ey);
        vertex(fx,fy);
        endShape(CLOSE);
        pop();
        begin ++
      }

      if (r%2 != 0 && r < rows.length-1 && p != rows[r].length-1) {
        let hx = rows[r][p].x;
        let hy = rows[r][p].y;
        let ix = rows[r][p+1].x;
        let iy = rows[r][p+1].y;
        let jx = rows[r+1][p].x;
        let jy = rows[r+1][p].y;

        push();
        fill(colours[begin]);
        beginShape(TRIANGLES);
        vertex(hx,hy);
        vertex(ix,iy);
        vertex(jx,jy);
        endShape(CLOSE);
        pop();
        begin ++
      }

      if (r%2 != 0 && r < rows.length-1 && p != rows[r].length-1 && p != rows[r+1].length-1) {
        let kx = rows[r][p+1].x;
        let ky = rows[r][p+1].y;
        let lx = rows[r+1][p].x;
        let ly = rows[r+1][p].y;
        let mx = rows[r+1][p+1].x;
        let my = rows[r+1][p+1].y;

        push();
        fill(colours[begin]);
        beginShape(TRIANGLES);
        vertex(kx,ky);
        vertex(lx,ly);
        vertex(mx,my);
        endShape(CLOSE);
        pop();
        begin ++
      }
    }
  }
}
