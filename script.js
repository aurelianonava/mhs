"use strict"
 
var y =25, radius = 25;
var x = 50, speed = 1, direction = 1;
var yradius = 25;
// x += speed;

window.P$ = new p5(p => {
  // var y = 25;
  let c
  let e
 
  p.setup = function () {
    
    p.createCanvas(600, 400);
    // p.ellipseMode(RADIUS);

    c = new Circle();
    e = new Mammal();
    
    

    c.log()
  }

  p.draw = function () {

  p.background(100, 200, 250);
  // x += speed;
    
    p.fill(0, 100, 145);
    // c.draw();
    // c.draw1();
    c.rect1();
    // c.draw();
    e.william();
    

  }



}, "script")