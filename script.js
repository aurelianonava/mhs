// Frist

var x = 180;
var y = 180;
var xspeed = 1;
var yspeed = 2;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(150);
  
  fill(150);
  rect(0,0,200,200);
  rect(200,0,200, 200);
  rect(400,0,200,200);
  rect(0,200,200,200);
  rect(200,200,200,200);
  
  fill(200, 25, 235);
  ellipse(x, y, 25, 25);
  
  
  // bounce x
  x = x + xspeed;

  if (x > width / 3 || x < 0) {
    xspeed = -xspeed;
  }

  // bounce y
  y = y + yspeed;

  if (y > height / 2 || y < 0) {
    yspeed = -yspeed;
  }

  n = "Mr. Nava";
  jdg = "Juan";
  jg = "John Gonzalez";
  jo = "Jose Orozco";
  s5 = "Student #5";
  s6 = "Student #6";
  //
  fill(50);
  text(n, 10, 10, 70, 80); // Text wraps within text box
  text(jdg, 210, 10, 70, 80);
  text(jg, 410, 10, 100, 80);
  text(jo, 10, 210, 100, 80);
  text(s5, 210, 210, 70, 80);
  text(s6, 410, 210, 70, 80);
}
