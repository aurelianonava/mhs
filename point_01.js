// Initial p5.js point project

var x = 10;

function setup() {
    createCanvas (480, 220);

}

function draw() {
  background(20,200,150);

  strokeWeight(2); 
  point( x+=1, 10 );
    ellipse(width/2, height/2, 25, 25);
}
