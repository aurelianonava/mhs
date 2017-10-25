"use strict"
 
class Circle {
  constructor() {
    this.logtext = "circle instantiated"
  }
  draw() {
    P$.ellipse(P$.width/2, P$.height/2, P$.height * 0.75, P$.height * 0.75)
  }

  log() {
    console.log(this.logtext)
  }
}