// mhs master repository project


  var nava_x = 15;
  var nava_y = 15;
  var nava_xspeed = 1;
  var nava_yspeed = 1.5;

//Jose Orozco Variables
  var JOx = 17;
  var JOy = 300;
  var JOspeed = 3;
  var JOspeed2 = 3;
  var JOradius = 15;
  var JOangle = 0;

//Michael Esparza's variables
   var MEx = 450;
   var MEy = 195;

   //Daniel Ayala's variables
   var danielx = 600;

//speed should remain constant for all projects
var xspeed = 1, xspeed2 = 1.2;
var yspeed = 2, yspeed2 = 2.3;



function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(150);
  
  strokeWeight(1);
  
  //1. Mr.Nava's rectangle
  fill(125, 170, 220);
  rect(0,0,200,200); 
  
  //2. Monica Jaimes
  fill(255);
  rect(200,0,200, 200); 
  
  //3. John Gonzalez rect
  fill(130, 180, 60);
  rect(400,0,200,200); 
  
  //4. Jose Orozco rect
  fill(550,50,250);
  rect(0,200,200,200); 
  
  //5. Angel Gomez rect
  fill(150);
  rect(200,200,200,200); 

  //6. Michael Esparaza rect
  fill(0,51,105);
  rect(400,200,200,200);

  //7. Daniel Ayala Lopez
  fill(100, 150, 225);
  rect(600,0,200,200);

  //8. New Student
  fill(150);
  rect(400,400,200,200); 

  
  //START Mr. Nava's Project

  
  fill(225, 70, 20)
  ellipse(nava_x, nava_y, 25, 25);
  
  nava_x = nava_x + nava_xspeed;
  nava_y = nava_y + nava_yspeed;

  if (nava_x > (width / 4) - 12.5 || nava_x < 12.5) {
    nava_xspeed = -nava_xspeed;
  }

  if (nava_y > (height / 2)-12.5 || nava_y < 12.5) {
    nava_yspeed = -nava_yspeed;
  }

  //End of Mr. Nava
  

  //START Jose Orozco Project
  
  strokeWeight(2);
  fill(255)
  ellipse(JOx, JOy, JOradius * 2, JOradius * 2);
  strokeWeight(8);
  point(JOx + JOradius * sin(JOangle), JOy - JOradius * cos(JOangle));
  
  JOangle = JOangle + JOspeed2 * 0.08;
  JOx = JOx + JOspeed;
  
  if (JOx > 184) {
    JOspeed = -3;
  } else if (JOx < 17) {
    JOspeed = 3;
  }
  
  //END Jose Orozco Project


//START Monica Jaimes

  strokeWeight(20);
  point(300, random(190));
  point(250, random(190));
  point(350, random(190));
  
//END Monica Jaimes


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
        MEy = 225;
      }
    

// END Michael Esparza


//START Daniel Ayala
  fill(25, 125, 225);
  strokeWeight(1);
  ellipse(danielx+=.1, 100, 25, 25);

// END Daniel Ayala


//START New Student
 


// END New Student
  
  
  // text() function variables
  n = "Mr. Nava";
  mj = "Monica Jaimes";
  jg = "John Gonzalez";
  jo = "Jose Orozco";
  ag = "Angel Gomez";
  me = "Michael Esparza";
  da = "Daniel Ayala";
  ns = "New Student";
  
  // Text function for names
  fill(50);
  text(n, 10, 10, 70, 80); // Text wraps within text box
  text(mj, 210, 10, 70, 80);
  text(jg, 410, 10, 100, 80);
  text(jo, 10, 210, 100, 80);
  text(ag, 210, 210, 70, 80);
  text(me, 410, 210, 70, 80);
  text(da, 610, 10, 70, 80);
  text(ns, 610, 210, 70, 80);
}
