"use strict"
 
var y =100, radius = 25;
var x = 300, speed = 1, direction = 1, diameter = 25;
var yradius = 25;
var s = 5.5;
// x += speed;


var circle = {

    x: 100,
    y1: 200,
    diameter: 50
  };

window.P$ = new p5(p => {
  // var y = 25;
  let c
  let e
  let bug
 
  p.setup = function () {
    
    p.createCanvas(600, 400);
    // p.ellipseMode(RADIUS);

    // c = new Circle();
    // e = new Mammal();
    bug = new Bug(x, y, diameter);
    
    

    // c.log()
  }

  p.draw = function () {

  p.background(100, 200, 250);
  // x += speed;
    
    p.fill(0, 100, 145);
    // c.draw();
    // c.draw1();
    // c.myCircle();
    // c.draw();
    // e.william();
    // new instance of Bug
    // b.move();
    bug.move();
    bug.display(x, y, speed);
    

  }



}, "script")