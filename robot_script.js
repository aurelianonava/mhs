// Robot script

"use strict"
 
var img1, img2;


window.P$ = new p5(p => {
  
  
  let bot1
  let bot2
  let image
  let loadImage
 
  

  function preload() {

  	img1 = loadImage("robot1.svg");
  	img2 = loadImage("robot1.svg");
  }

  p.setup = function () {
    
    p.createCanvas(720, 480);
    
    bot1 = new Robot(img1, 90, 80);
    bot2 = new Robot(img2, 440, 30);
    
    

    // c.log()
  }

  p.draw = function () {

    p.background(100, 200, 250);
    
    //Udate and display first robot
    bot1.update();
    bot1.display();

    //Update and dispaly second robot
    bot2.update();
    bot2.dispaly();
    

  }


}, "script")