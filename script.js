"use strict"
 
window.P$ = new p5(px => {
  let c
  let c2
  let c3
 
  px.setup = function () {
    px.createCanvas(600, 400);

    c = new Circle();
    c2 = new Circle();
    c3 = new Circle;
    

    // c.log()
  }

  px.draw = function () {
  px.background(200)
    
    px.fill(100);
    c.draw();
    c2.caca();
    c3.caca2();

  }



}, "script")