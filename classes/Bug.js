"use strict"

class Bug {
	constructor(tempX, tempY, tempSpeed) {
		this.x = tempX;
		this.y = tempY;
		this.s = tempSpeed;
		// this.speed = tempSpeed;

	}


	move() {

		x += P$.random(-s, s);
		y += P$.random(-s, s);
	}

	display() {

		P$.fill(225, 150, 225);
		P$.ellipse(x, y, 50, 50);
		P$.ellipse(150, 100, 10, 10);
	}

	

}



// class Bug() {
// 	constructor(tempX, tempY, tempDiameter) {
// 		this.x = tempX;
// 		this.y = tempY;
// 		this.diameter = tempDiameter;
// 		this.speed = 2.5;  // Same for every instance

// 	}

// 	this.move() {

// 		this.x += P$.random(-this.speed, this.speed);
// 		this.y += P$.random(-this.speed, this.speed);
// 	}

// 	this.display() {

// 		P$.ellipse(this.x, this.y, this.diameter, this.diameter);
// 	}



// }
