    // Frist

var x = 180;
var y = 180;
var xspeed = 1;
var yspeed = 2;

function setup() {
  createCanvas(600, 400);

}

function draw() {

  background (25);	
  fill(200);
  
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

}
