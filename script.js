// Frist

//Nava Variables
var x = 180;
var y = 180;
var xspeed = 1;
var yspeed = 2;
//Jose Orozco Variables
var JOx = 17;
var JOy = 300;
var JOspeed = 4;
var JOradius = 15;
var JOangle = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(150);
  
  strokeWeight(1);
  
  fill(125, 170, 220);
  rect(0,0,200,200); //Mr.Nava rect
  fill(150);
  rect(200,0,200, 200); //Juan Guzman rect
  fill(130, 180, 60);
  rect(400,0,200,200); //John Gonzalez rect
  fill(255,120,120);
  rect(0,200,200,200); // Jose Orozco rect
  fill(150);
  rect(200,200,200,200); // Angel Gomez rect
  fill(150);
  rect(400,200,200,200); //Michael Esparaza rect
  
  fill(200, 25, 235);
  ellipse(x, y, 25, 25); // Mr.Nava Eclipse
  
  
  // bounce x
  x = x + xspeed;

  if (x > (width / 3)-12.5 || x < 12.5) {
    xspeed = -xspeed;
  }

  // bounce y
  y = y + yspeed;

  if (y > (height / 2)-12.5 || y < 12.5) {
    yspeed = -yspeed;
  }
  
//START Jose Orozco Project
  strokeWeight(2);
  ellipse(JOx, JOy, JOradius * 2, JOradius * 2);
  fill(255);
  strokeWeight(10);
  point(JOx + JOradius * sin(JOangle), JOy - JOradius * cos(JOangle));
  
  JOangle = JOangle + JOspeed * 0.08;
  JOx = JOx + JOspeed;
  
  if (JOx > 184) {
    JOspeed = -4;
  } else if (JOx < 17) {
    JOspeed = 4;
  }
//END Jose Orozco Project
  
  n = "Mr. Nava";
  jdg = "Juan Guzman";
  jg = "John Gonzalez";
  jo = "Jose Orozco";
  ag = "Angel Gomez";
  me = "Michael Esparza";
  //
  fill(50);
  text(n, 10, 10, 70, 80); // Text wraps within text box
  text(jdg, 210, 10, 70, 80);
  text(jg, 410, 10, 100, 80);
  text(jo, 10, 210, 100, 80);
  text(ag, 210, 210, 70, 80);
  text(me, 410, 210, 70, 80);
}
