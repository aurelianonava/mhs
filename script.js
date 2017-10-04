var x = 0;
    var y = 0;
    var speed = 5;
    var radius =50;
    var angle = 0;
    //DIfferent Variables for the project
    
    function setup() {
      createCanvas(600, 400); // Canvas
    }

    function draw() {
      background(255); //White Background
      translate(0,200); //Adds the numbers to x and y to make it easier to place things around
      
      strokeWeight(5); //Next object will have a stroke of 5
      ellipse(x, y, radius*2, radius*2); //The eclipse, it is using a radius to make it easier to know the size to make a point follow it
      fill(15, 15, 255); //Filling the eclipse with color
      
      strokeWeight(18); //Next Object will have a stroke of 10
      point(x + radius * cos (angle), y - radius * sin (angle)); //the point that is on the eclipse using radious and cos and sin to follow the circle
      
      angle = angle + speed * .05
      //This controls the point. Making it rotate around the sides of the circle
      x = x + speed
      //This is what makes the ellipse move along the x axis
      
      if(x > width){
        speed = -5;
      }else if(x < 0){
        speed = 5
      }
      //This 'if' and 'else if' controls the eclipse to go back and forth to create a loop. When the point on the eclipse also reverses when it hits the edges.
    }
