// Project 2, Version 1.2
// Using system variable "with"

var x = 10;

function setup() {
    createCanvas (480, 220);

}

function draw() {
  background(20,200,150);

  strokeWeight(2); 
  //first parameter using addition assignment operator
  point( x+=1, 10 );
  // if condition using system varialbe "with"
    if( x > width/2 ) {
     x = width/2;   
    }
}
