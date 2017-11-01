// Robot

"use strict"

class Robot {
	constructor(img, tempX, tempY) {
		// Set the initial values for properties
		this.xpos = tempX;
		this.ypos = tempY;
		this.angle = P$.random(0, P$.TWO_PI);
		this.botImage = img;
		this.yoffset = 0.0;



	}

	// Update the properties
	update () {
		this.angle += 0.05;
		this.yoffset = P$.sin(this.angle) * 20;

	}

	//Draw the robot to the screen
	display() {
		P$.image(this.botImage, this.xpos, this.ypos + this.yoffset);
	}


}


