"use strict"
 
class Circle {

  constructor() {
    this.logtext = "circle instantiated"
  }
  
  draw() {
    // var x = 10;
    P$.ellipse(x, P$.height/4, P$.height * 0.25, P$.height * 0.25)
  }
  draw1() {

    P$.ellipse(P$.width/3, P$.height/4, P$.height * 0.25, P$.height * 0.25)
  }
  
  rect1() {
    P$.ellipseMode(P$.RADIUS);
    // var z = 25, radius = 50, speed = 0.5, y = 50;
   
    x += speed * direction;
    yradius = radius-=.1;
    if (x > P$.width-radius || x < radius) { 
      direction = -direction;

     }
     if (yradius < 0 ) {
        yradius = -yradius;
      }


    P$.ellipse(x, y, radius, yradius);
  }

  

  log() {
    console.log(this.logtext);
  }
}