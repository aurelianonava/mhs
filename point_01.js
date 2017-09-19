// Initial p5.js point project

var x; //variable x declared
var y; //variable y declared
var speed= 5;

x=10; // variable x intialize at 10
y=60; // variable y intialized at 60


function setup() {
createCanvas (480, 120);

}

function draw() {
  background(200, 100,50);

  strokeWeight(3); 
  point(x+=1, 25);
    if (x > 240) {
    x =0;    }

}
