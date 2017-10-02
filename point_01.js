// Code goes here

// Project 2, Issue #16


var x = 10;

function setup() {
    createCanvas (480, 220);

}

function draw() {
  background(20,200,150);

  ellipse(x+=1, 25, 25, 25);
  strokeWeight(3);
  point(x+=.5, 25);
  if ( x > 240 ) {
    x = 0; 
  }
          
}
