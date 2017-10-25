// mhs master repository project

 // Mr. Nava's variables
  var nava_x = 15;
  var nava_y = 15;
  var nava_xspeed = 1;
  var nava_yspeed = 1.5;

//speed variables ( create your own )
var xspeed = 1, xspeed2 = 1.2;
var yspeed = 2, yspeed2 = 2.3;

//END of Mr. Nava's variables


//Jose Orozco Variables
  var JOx = 17;
  var JOy = 300;
  var JOspeed = 4;
  var JOradius = 15;
  var JOangle = 0;

//END of Jose Orozco's variables


//John Gonzalez'a variables



//End of Juan Gonzalez's variables


//Michael Esparza's variables
   var MEx = 450;
   var MEy = 195;
//End of Michael Esparza's variables

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(150);
  
  strokeWeight(1);
  
  // Rectangles overlapping canvas
  //1. Mr.Nava's rectangle
  // fill(125, 170, 220);
  // rect(0,0,200,200); 
  
  //2. Juan Guzman rect
  fill(150);
  rect(200,0,200, 200); 
  
  //3. John Gonzalez rect
  fill(130, 180, 60);
  rect(400,0,200,200); 
  
  //4. Jose Orozco rect
  fill(255,120,120);
  rect(0,200,200,200); 
  
  //5. Angel Gomez rect
  fill(150);
  rect(200,200,200,200); 

  //6. Michael Esparaza rect
  fill(0,51,105);
  rect(400,200,200,200);

  //7. Daniel Alberto Ayala Lopez
  fill(150);
  rect(600,0,200,200);

  //8. New Student
  fill(150);
  rect(400,200,200,200); 

  
  //START Mr. Nava's Project

  //Nava Variables
  
  // fill(125, 170, 220);
  // rect(0,0,200,200); 
  
  
  if (nava_x > 100) {
    fill(90, 150, 10);
    ellipse(nava_x, nava_y, 25, 25); // Mr.Nava ellipse
  }
  if (nava_x < 100) {
    fill(125, 170, 220);
    rect(0,0,200,200);
    fill(225, 70, 20);
    ellipse(nava_x, nava_y, 25, 25); // Mr.Nava ellipse
  }
  
  nava_x = nava_x + nava_xspeed;
  nava_y = nava_y + nava_yspeed;

  if (nava_x > (width / 4) - 12.5 || nava_x < 12.5) {
    nava_xspeed = -nava_xspeed;
    fill(125, 170, 220);
  }

  if (nava_y > (height / 2)-12.5 || nava_y < 12.5) {
    nava_yspeed = -nava_yspeed;
    fill(225, 70, 120);
  }

  //End of Mr. Nava
  

  //START Jose Orozco Project
  
  

  strokeWeight(2);
  ellipse(JOx, JOy, JOradius * 2, JOradius * 2);
  fill(255);
  strokeWeight(10);
  point(JOx + JOradius * sin(JOangle), JOy - JOradius * cos(JOangle));
  
  JOangle = JOangle + JOspeed * 0.08;
  JOx = JOx + JOspeed;
  
  if (JOx > 184) {
    JOspeed = -4;
  } else if (JOx < 17) {
    JOspeed = 4;
  }
  //END Jose Orozco Project


//START Juan Guzman

//END Juan Guzman


//START John Gonzalez

  fill(255);
  strokeWeight(1);
  ellipse(500, 106, 25, 25); 
  
//END John Gonzalez


//START Angel Gomez


//END Angel Gomez


//START Michael Esparza

   if (MEx > 500) {
      MEx = 413;
      }
      
      fill (100,3.1,0)
      ellipse (MEx+=4,MEy+=2,25,25,)
      
      if (MEy > 380){
        MEy = 200;
      }

// END Michael Esparza


//START Daniel Ayala


// END Daniel Ayala


//START Monica Jaimes


// END Monica Jaimes
  
  
  // text() function variables
  n = "Mr. Nava";
  jdg = "Juan Guzman";
  jg = "John Gonzalez";
  jo = "Jose Orozco";
  ag = "Angel Gomez";
  me = "Michael Esparza";
  da = "Daniel Ayala";
  mj = "Monica Jaimes";
  
  // Text function for names
  fill(50);
  text(n, 10, 10, 70, 80); // Text wraps within text box
  text(jdg, 210, 10, 70, 80);
  text(jg, 410, 10, 100, 80);
  text(jo, 10, 210, 100, 80);
  text(ag, 210, 210, 70, 80);
  text(me, 410, 210, 70, 80);
  text(da, 610, 10, 70, 80);
  text(mj, 610, 210, 70, 80);
}
