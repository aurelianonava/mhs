// Frist

var nava_x = 15, nava_x2 = 15;
var nava_y = 15, nava_y2 = 15;
var x, y; 

//speed should remain constant for all projects
var xspeed = 1, xspeed2 = 1.2;
var yspeed = 2, yspeed2 = 2.3;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(150);
  
  // Mr. Nava
  fill(225, 170, 220);
  rect(0,0,200,200); //Mr.Nava rectangle
  //First ellipse
  fill(125, 170, 220);
  ellipse(nava_x, nava_y, 25, 25); // Mr.Nava Eclipse
  //second ellipse
  // fill(200, 25, 235);
  // ellipse(nava_x2, nava_y2, 25, 25); //Mr.Nava's second rect
  
  
  
  // Mr. Nava
  // nava_x = nava_x + xspeed;
  // nava_x2 = nava_x2 + xspeed2;

  // if ((nava_x || nava_x2) > ((width / 3)-12.5) || ((nava_x || nava_x2) < 12.5)) {
  //   xspeed = -xspeed;
  //   xspeed2 = -xspeed2;
  // }

  nava_y = nava_y + yspeed;
  nava_y2 = nava_y2 + yspeed2;

  // if ((nava_y || nava_y2) > ((height / 2)-12.5) || ((nava_y || nava_y2) < 12.5)) {
    // yspeed = -yspeed;
    // yspeed2 = -yspeed2;
  // }

  if (nava_y > height/2 - 12.5 || nava_y < 12.5) {
    yspeed = -yspeed;
  }

  //End of Mr. Nava



// Canvas 200 x 200 rectangles
  fill(150);
  rect(200,0,200, 200); //Juan Guzman rect
  
  //
  fill(130, 180, 60);
  rect(400,0,200,200); //John Gonzalez rect
  
  //
  fill(255,120,120);
  rect(0,200,200,200); // Jose Orozco rect
  
  //
  fill(150);
  rect(200,200,200,200); // Angel Gomez rect
  
  //
  fill(150);
  rect(400,200,200,200); //Michael Esparaza rect
  
  //
  //fill(200, 25, 235);
  //ellipse(x, y, 25, 25); // Mr.Nava Eclipse
  
  
  
  // text() function 
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
