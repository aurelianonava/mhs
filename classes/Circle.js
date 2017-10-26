"use strict"
 
class Circle {
  constructor() {
    this.logtext = "circle instantiated"
  }
  draw() {
    P$.ellipse(P$.width/4, P$.height/4, P$.height * 0.25, P$.height * 0.25)
  }
  caca() {
    P$.ellipse(P$.width/2, P$.height/4, P$.height * 0.25, P$.height * 0.25)
  }
  caca2() {
    P$.rect(P$.width/2, P$.height/4, P$.height * 0.25, P$.height * 0.25)
  }

  log() {
    console.log(this.logtext)
  }
}