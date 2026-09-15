let sun= 500;
let sunspeed = 1

let cloudspeed = 1
let cloud1X = 200;
let cloud2X = 300;
let cloud3X = 250;

let car = 800;
let carspeed = 3
let wind = 0;

let light = 0;
function keyPressed() { 
  if (keyCode == ENTER) {
    light = light + 1;
    // Stoplichtvolgorde: rood, groen, oranje
    if (light > 2)
      light = 0;
  }
}

function setup() {
  createCanvas(800, 600);
 circleX = 100;
}

function draw() {
 wind = sin(frameCount * 0.05) * 2;
 val = "rgb(128, 216, 251)";
  background(128, 216, 251);
 
  /*zon*/ 
  
  val = "rgb(255, 196, 0)"; 
  stroke(0, 0 ,0)
  fill(255, 196, 0);
  ellipse(sun, 70, 100, 100);
 //circleZon = circleZon + 2;

 sun = sun + sunspeed;

 if(sun>= 855) 
  sun = -55;
    

  /*wolken*/ 
  val = "rgb(255, 253, 253)";
  noStroke()
  fill(255,255,255)
  ellipse(cloud1X, 200, 90, 70);
 //cloud1X(160, 60, 60)

 ellipse(cloud1X + 55, 200, 90, 90);
 ellipse(cloud1X + 90, 200, 80, 70);

  cloud1X = cloud1X - cloudspeed;
  if(cloud1X<= -600)
    cloud1X = 855;

 ellipse(cloud2X + 300, 150, 90, 80);
 ellipse(cloud2X + 350, 150, 100, 100);
 ellipse(cloud2X + 400, 150, 90, 80);

 cloud2X = cloud2X - cloudspeed;
 if(cloud2X<= -600)
  cloud2X = 855;

 ellipse(cloud3X + 600, 170, 90, 80);
 ellipse(cloud3X + 650, 170, 110, 110);
 ellipse(cloud3X + 700, 170, 90, 80);

 cloud3X = cloud3X - cloudspeed;
 if(cloud3X<= -600)
  cloud3X = 855;
 

//  /*bergen*/
 stroke(0, 0,0)
 val = "rgb(130, 128, 128)";
 fill(130, 128, 128)
 
 //triangle(x1, y1, x2, y2, x3, y3);
 triangle(700, 400, 450, 400, 580, 130)
 triangle(0, 400, 400, 400, 200, 130)
 triangle(300, 400, 490, 400, 400, 90)

 /*grass*/ 
  val = "rgb(21, 98, 0)";
  fill(21,98,0)
 rect(0, 400,800, 50);

 /*road*/
 val = "rgb(133, 133, 133)";
 fill(133, 133,133)
 stroke(1)
 rect(0, 450,800, 70);
 noStroke()
 rect(0, 500,800, 50);
 rect(0, 550,800, 50);
 
 val = "rgb(255, 255, 255)";
 fill(133,133,133)
 fill(255)
 rect(0, 510, 800, 20);


 /*tree's*/
 val = "rgb(77, 51, 22)";
 stroke(1)
 fill(77, 51, 22)
   rect(220, 300, 30, 140);

   noStroke()
   val = "rgb(5, 97, 8)";
   fill(42, 121, 0)
  ellipse(130 + wind, 280, 90, 90);
 
   val = "rgb(51, 144, 58)";
   fill(51, 144, 58)
  ellipse(120 + wind, 300, 90, 90);

   stroke(1)
   fill(77, 51, 22)
   rect(370, 280, 30, 140);
  noStroke()
    fill(42, 121, 0)
  ellipse(260 + wind, 250, 90, 90);
 
   val = "rgb(51, 144, 58)";
   fill(51, 144, 58)
  ellipse(220 + wind, 260, 90, 90);
 val = "rgb(22, 183, 36)";
 fill(22, 183, 36)
  ellipse(240 + wind, 280, 90, 90);
  
stroke(1)
   fill(77, 51, 22)
   rect(520, 280, 30, 140);
  noStroke()
    fill(42, 121, 0)
  ellipse(530 + wind, 260, 90, 90);
 
   val = "rgb(51, 144, 58)";
   fill(51, 144, 58)
  ellipse(520 + wind, 280, 90, 90);
 val = "rgb(22, 183, 36)";
 fill(22, 183, 36)
  ellipse(500 + wind, 260, 90, 90);


   stroke(1)
   fill(77, 51, 22)
   rect(100, 280, 30, 140);
  noStroke()
    fill(42, 121, 0)
  ellipse(400 + wind, 260, 90, 90);

   val = "rgb(10, 178, 24)";
   fill(10, 178, 24)
  ellipse(120 + wind, 300, 90, 90);
    fill(42, 121, 0)
  ellipse(110 + wind, 290, 90, 90);
 
   val = "rgb(51, 144, 58)";
   fill(51, 144, 58)
  ellipse(420 + wind, 280, 90, 90);
 val = "rgb(22, 183, 36)";
 fill(22, 183, 36)
  ellipse(390 + wind, 270, 90, 90);
   
  //de bladeren/leaves bewegen.

   /* stoplicht */
   stroke(1);
   fill(60, 60, 60);
   rect(700, 200, 40, 120);

  fill(light == 0 ? color(255, 0, 0) : color(80, 0, 0));
   circle(720, 220, 25);
  fill(light == 1 ? color(0, 255, 0) : color(0, 80, 0));
   circle(720, 260, 25);
  fill(light == 2 ? color(255, 128, 0) : color(80, 50, 0));
   circle(720, 300, 25);

   fill(60, 60, 60);
   rect(710, 320, 20, 120);

   //elke keer dat je op enter drukt gaat het licht een stap verder 

  /*car*/
  noStroke()

  val = "rgb(229, 67, 231)";
  fill(229, 67, 231)
  rect(car, 440, 180, 110);
  rect(car + 150, 480,70, 70);
  // triangle(car, 620, 400, 400,450, 560, 360)
  val = "rgb(113, 117, 113)";
  fill(113, 117,113)
 ellipse(car + 50, 560,50, 50);
 ellipse(car + 180, 560, 50, 50);

 const stopLine = 680;
 const carFront = car + 220;
 const approachingStopLine = car < stopLine && carFront >= stopLine - 100;
 if (light == 0 && car < stopLine && carFront < stopLine && carFront >= stopLine - 100) {
  carspeed = 0;
 } else if (light == 2 && approachingStopLine) {
  carspeed = max(0, carspeed - 0.1);
 } else {
  carspeed = min(5, carspeed + 0.1);
 }
 
 car = car + carspeed; 
 if(car>=855)
  car = -55; 


}
