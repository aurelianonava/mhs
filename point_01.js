<!DOCTYPE html>
<html>

<head>
  <script data-require="p5.js@*" data-semver="0.5.7" src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.7/p5.min.js"></script>
</head>

<body>
  
  <script>
    
    function setup() {
      createCanvas(480, 120)
    }

    function draw() {
      background(200, 100,50);
      
      strokeWeight(2); 
      point( width/2, height/2 );
      ellipse(25, 25, 25, 25);
      
    }
  </script>
</body>

</html>