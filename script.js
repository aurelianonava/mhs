"use strict"
 
var y =100, radius = 25;
var x = 300, speed = 1, direction = 1, diameter = 25;
var yradius = 25;
var s = 5.5;



var circle = {

    x: 100,
    y1: 200,
    diameter: 50
  };

window.P$ = new p5(p => {
  
  let c
  let e
  let bug
  let bug2
 
  p.setup = function () {
    
    p.createCanvas(600, 400);
    
    bug = new Bug(x, y, diameter);
    bug2 = new Bug(x, y, diameter);
    
    

    // c.log()
  }

  p.draw = function () {

    p.background(100, 200, 250);
    
    p.fill(0, 100, 145);
    bug.move();
    bug.display(x, y, speed);
    bug2.move();
    bug2.display();
    

  }


}, "script")