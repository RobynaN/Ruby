function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(254, 254, 254); 
 stroke(0, 0, 0);
  fill(252, 0, 0);
  rect(0, 0, 10, 10);
  fill(0, 0, 255);
  //textStyle(BOLD);
  


  fill(225,225 ,225);
  
  // background(110,110,110)
  rect(50, 100, 130, 70);
 
  fill(255, 0, 0);
  rect(50, 100, 130, 30);

 fill(0, 0, 255);
  rect(50, 165, 130, 30);

 fill(255, 255, 255);
  rect(50, 250, 90, 90);

  
  fill(0, 0, 0);
  rect(50, 250, 30, 30);

   fill(000);
  rect(110, 250, 30, 30);

   fill(000);
  rect(80, 280, 30, 30);

   fill(000);
  rect(110, 310, 30, 30);

   fill(000);
  rect(50, 310, 30, 30);

/*house*/

  fill(255, 255, 255);
  
  leftHouse = 50;
  widthHouse = 200;
  heightHouse = 100;
 topHouse = 490;

  rect(leftHouse, topHouse, widthHouse, heightHouse);
  

  fill(255, 255, 255)
  x1= leftHouse + widthHouse  / 2;
  y1= topHouse - widthHouse /2;
 x3= leftHouse; 
 y3= topHouse; 
 x2 = widthHouse + leftHouse;
 y2= topHouse;
  triangle(x1, y1, x2, y2, x3, y3)

/*traffic light*/

  fill(220, 223, 234)
  rect(330, 100, 40, 100);

  fill(242, 25, 26)
  ellipse(350, 120, 25, 25);
   fill(242, 240,26)
  ellipse(350, 150, 25, 25);
  fill(62, 242, 26)
  ellipse(350, 180, 25, 25);

  fill(220, 223, 234)
  rect(340, 200, 20, 20);

  val = "rgb(15, 35, 147)";

/*dobbelsteen*/ 
strokeWeight(4);
 val = "rgb(255, 255, 255)";
 fill(255, 255, 255);
  rect(350, 320, 100, 100);

  val = "rgb(0, 0, 0)";
  fill(000);
  circle(400, 370, 20);


/* mario pixel art */
  noStroke();
  val = "rgb(232, 6, 6)";
 fill(232, 6, 6);
 
  rect(660, 120, 20,20);
  rect(640, 120, 20,20);
  rect(620, 120, 20,20);
  rect(600, 120, 20,20);
  rect(580, 140, 20,20);
  rect(580, 120, 20,20);
  rect(560, 140, 20,20);
  rect(600, 140, 20,20);
  rect(620, 140, 20,20);
  rect(640, 140, 20,20);
  rect(660, 140, 20,20);
  rect(680, 140, 20,20);
  rect(700, 140, 20,20);
  rect(720, 140, 20,20);

  val = "rgb(99, 60, 29)";
fill(99, 60, 29);
  rect(560, 160, 20,20);
  rect(580, 160, 20,20);
  rect(600, 160, 20,20);
  rect(540, 180, 20,20);
  rect(540, 200, 20,20);
  rect(560, 220, 20,20);
  rect(580, 180, 20,20);
  rect(580, 200, 20,20);
  rect(600, 200, 20,20);
  rect(540, 220, 20,20);

  val = "rgb(246, 214, 181)";
fill(246, 214, 181);
  rect(620, 160, 20,20);
  rect(640, 160, 20,20);
  rect(560, 180, 20,20);
  rect(560, 200, 20,20);
  rect(620, 180, 20,20);
  rect(600, 180, 20,20);
  rect(620, 200, 20,20);
  rect(640, 200, 20,20);
  rect(640, 180, 20,20);
  rect(680, 180, 20,20);
  rect(660, 200, 20,20);
  rect(700, 180, 20,20);
  rect(700, 200, 20,20);
  rect(720, 200, 20,20);
  rect(740, 200, 20,20);

  rect(580, 220, 20,20);
  rect(600, 220, 20,20);
  rect(620, 220, 20,20);
  rect(640, 220, 20,20);

  rect(580, 240, 20,20);
  rect(600, 240, 20,20);
  rect(620, 240, 20,20);
  rect(640, 240, 20,20);
  rect(660, 240, 20,20);
  rect(680, 240, 20,20);
  rect(700, 240, 20,20);




  val = "rgb(0, 0, 0)";
fill(0, 0, 0);
  rect(660, 160, 20,20);
  rect(680, 200, 20,20);
  rect(660, 180, 20,20);
  rect(660, 220, 20,20);
  rect(700, 220, 20,20);
  rect(680, 220, 20,20);
  rect(720, 220, 20,20);

 text("Mario", 550, 100);

/*text*/
 strokeWeight(1);
 fill(0, 0, 0);
  text("Robyna Nouwens", 20, 30); 

  /*durin pixel art*/

  text("Durin", 600, 390);

 image(image1, 600, 400, 200, 200); 

 }

 let image1; 

 function preload() {
 image1 = loadImage("pixelartdurin.jpg");

 }
