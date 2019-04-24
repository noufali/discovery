var gap;
var rows = [];
var row;
var index = 1;
var shape;
var triangles = [];

function setup() {
  createCanvas(800,800);
  noiseDetail(2,0.9);
  stroke(0);
  strokeWeight(1);
  //fill(30);
  noFill();
  gap = 50;
}

function draw() {
  background(255);
  index = 1;

  // grid of points -> new grid
  for(let y = gap; y < height; y+= gap) {
    row = [];
    for(let x = gap; x < width; x+= gap) {
      let mid = x + (gap / 2);
      //even or odd line
      if (index%2 == 0) {
        if (x != width-gap) {
          row.push({x: mid + random(50), y: y + random(50)})
        }
      } else {
        row.push({x: x + random(50), y: y + random(50)});
      }
    }
    rows.push(row);
    index ++
  }

  // triangles
  for (let r = 0; r < rows.length; r++){
    for (let p = 0; p < rows[r].length; p++){
      let ax = rows[r][p].x;
      let ay = rows[r][p].y;
      //ellipse(ax,ay,5);

      if ( r == 0 || r%2 == 0 ){
        if (p != rows[r].length-1 && r < rows.length-1 && p != rows[r+1].length-1){
          let ax = rows[r][p].x;
          let ay = rows[r][p].y;
          let bx = rows[r][p+1].x;
          let by = rows[r][p+1].y;
          let cx = rows[r+1][p].x;
          let cy = rows[r+1][p].y;

          let dx = rows[r][p+1].x;
          let dy = rows[r][p+1].y;
          let ex = rows[r+1][p].x;
          let ey = rows[r+1][p].y;
          let fx = rows[r+1][p+1].x;
          let fy = rows[r+1][p+1].y;

          beginShape(TRIANGLES);
          vertex(ax,ay);
          vertex(bx,by);
          vertex(cx,cy);
          endShape(CLOSE);

          beginShape(TRIANGLES);
          vertex(dx,dy);
          vertex(ex,ey);
          vertex(fx,fy);
          endShape(CLOSE);
        }

      } else {
        if (p != rows[r].length-1 && r < rows.length-1 && p != rows[r+1].length-1){
          let hx = rows[r][p].x;
          let hy = rows[r][p].y;
          let ix = rows[r+1][p].x;
          let iy = rows[r+1][p].y;
          let jx = rows[r+1][p+1].x;
          let jy = rows[r+1][p+1].y;

          let kx = rows[r][p].x;
          let ky = rows[r][p].y;
          let lx = rows[r][p+1].x;
          let ly = rows[r][p+1].y;
          let mx = rows[r+1][p+1].x;
          let my = rows[r+1][p+1].y;

          beginShape(TRIANGLES);
          vertex(hx,hy);
          vertex(ix,iy);
          vertex(jx,jy);
          endShape(CLOSE);

          beginShape(TRIANGLES);
          vertex(kx,ky);
          vertex(lx,ly);
          vertex(mx,my);
          endShape(CLOSE);
        }
      }
    }
  }
  noLoop();
}
