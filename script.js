// Frist

var x = 180;
var y = 180;
var xspeed = 1;
var yspeed = 2;
var s; 

function setup() {
  createCanvas(600, 400);

}

function draw() {

  background (150);	
  fill(240);
  
  ellipse (x, y, 25, 25);

  	// bounce x
 	 x = x + xspeed;
  	
  	 if (x > width/2 || x < 0)  {
     	xspeed = -xspeed;
  	}

  	// bounce y
  	y = y + yspeed;

  	if (y > height/2 || y < 0) {
	 	  yspeed = -yspeed;
  	}
  
  s = "Mr. Nava";
  fill(50);
  text(s, 10, 10, 70, 80); // Text wraps within text box

}
