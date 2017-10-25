"use strict"
 
window.P$ = new p5(p => {
  let c
 
  p.setup = function () {
    p.createCanvas(600, 400);

    c = new Circle();

    // c.log()
  }

  p.draw = function () {
  p.background(200)
    
    p.fill(100);
    c.draw();
    
  }

}, "sketch")