"use strict"

class Bug {
	constructor(tempX, tempY, tempDiameter) {
		this.x = tempX;
		this.y = tempY;
		this.diameter = tempDiameter;
		// this.speed = tempSpeed;

	}


	move() {

		this.x += P$.random(-s, s);
		this.y += P$.random(-s, s);
	}

	display() {

		P$.fill(225, 150, 225);
		P$.ellipse(this.x, this.y, 50, 50);
		P$.fill(0, 100, 225);
		P$.ellipse(this.x, this.y, this.diameter, this.diameter);
		P$.fill(25, 150, 225);
		P$.ellipse(circle.x, circle.y1, circle.diameter, circle.diameter);
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
