let sun= 500;
let sunspeed = 1

let cloudspeed = 1
let cloud1X = 200;
let cloud2X = 300;
let cloud3X = 250;

let treespeed = 1
let tree1X = 300;
let tree2X = 350;
let tree3X = 400;
let tree4X = 450;

let light = 

function setup() {
  createCanvas(800, 600);
 circleX = 100;
}

function draw() {
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

  cloud1X = cloud1X + cloudspeed;
  if(cloud1X>= 855)
    cloud1X = -50;

 ellipse(cloud2X + 300, 150, 90, 80);
 ellipse(cloud2X + 350, 150, 100, 100);
 ellipse(cloud2X + 400, 150, 90, 80);

 cloud2X = cloud2X + cloudspeed;
 if(cloud2X>= 855)
  cloud2X = -50;

 ellipse(cloud3X + 600, 170, 90, 80);
 ellipse(cloud3X + 650, 170, 110, 110);
 ellipse(cloud3X + 700, 170, 90, 80);

 cloud3X = cloud3X + cloudspeed;
 if(cloud3X>= 855)
  cloud3X = -50;
 

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
   val = "rgb(42, 121, 0)";
   fill(42, 121, 0)
   ellipse(tree1X + 120, 290, 90, 90);
 
   val = "rgb(51, 144, 58)";
   fill(51, 144, 58)
   ellipse(tree1X + 140, 300, 90, 90);

   tree1X = tree1X + treespeed;
   if(tree1X>= 80)
    tree1X = 20;

   stroke(1)
   fill(77, 51, 22)
   rect(370, 280, 30, 140);
  noStroke()
    fill(42, 121, 0)
   ellipse(tree2X + 285, 260, 90, 90);
 
   val = "rgb(51, 144, 58)";
   fill(51, 144, 58)
   ellipse(tree2X + 270, 280, 90, 90);
 val = "rgb(22, 183, 36)";
 fill(22, 183, 36)
   ellipse(tree2X + 300, 280, 90, 90);
  
stroke(1)
   fill(77, 51, 22)
   rect(600, 280, 30, 140);
  noStroke()
    fill(42, 121, 0)
   ellipse(tree3X + 530, 260, 90, 90);
 
   val = "rgb(51, 144, 58)";
   fill(51, 144, 58)
   ellipse(tree3X + 520, 280, 90, 90);
 val = "rgb(22, 183, 36)";
 fill(22, 183, 36)
   ellipse(tree3X + 500, 260, 90, 90);


   stroke(1)
   fill(77, 51, 22)
   rect(90, 280, 30, 140);
  noStroke()
    fill(42, 121, 0)
   ellipse(tree4X + 25, 260, 90, 90);
 
   val = "rgb(51, 144, 58)";
   fill(51, 144, 58)
   ellipse(tree4X + 10, 280, 90, 90);
 val = "rgb(22, 183, 36)";
 fill(22, 183, 36)
   ellipse(tree4X + 0, 270, 90, 90);

   /*stoplicht*/
   stroke(1)
 fill(220, 223, 234)
  rect(700, 200, 40, 120);

  fill(242, 25, 26)
  ellipse(720, 220, 25, 25);
  if(light == 0()){
    fill(255, 0, 0
    } else{
      fill(80, 0,0 )
    )
   fill(242, 240,26)
  ellipse(720, 260, 25, 25);
  if(light == 0()){
    fill(255,94,2)
  }else{
    fill(80,50)
  }circle 

  fill(62, 242, 26)
  ellipse(720, 300, 25, 25);

  fill(220, 223, 234)
  rect(710, 320, 20, 120);

  

  /*car*/
  noStroke()

  val = "rgb(229, 67, 231)";
  fill(229, 67, 231)
  rect(400, 360, 180, 110);
  rect(550, 390, 70, 70);
  triangle(620, 400, 400,450, 560, 360)
  val = "rgb(113, 117, 113)";
  fill(113, 117,113)
  rect(510, 370, 60, 60);
  rect(420, 370, 60, 60);
 ellipse(420, 460, 50, 50);
 ellipse(560, 460, 50, 50);


 //line(500, 800, 200, 230 )
 //line(10, 800, 200, 230 )



 
 


}
