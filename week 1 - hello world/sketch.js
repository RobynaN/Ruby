function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(254, 254, 254);  
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

  fill(000);
  rect(50, 250, 30, 30);

   fill(000);
  rect(110, 250, 30, 30);

   fill(000);
  rect(80, 280, 30, 30);

   fill(000);
  rect(110, 310, 30, 30);

   fill(000);
  rect(50, 310, 30, 30);

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

  rect(350, 320, 60, 60);
  circle(350, 322, 20);

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

  val = "rgba(105, 47, 0, 0.96)";
  fill(105, 47, 0, 0.96);
  rect(560, 160, 20,20);
  


  

 fill(000);
  text("Robyna Nouwens", 20, 30); 
}