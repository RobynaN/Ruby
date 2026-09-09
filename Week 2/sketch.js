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
  ellipse(circleX, 70, 100, 100);
  //circleX = circleX + 2;


  /*wolken*/ 
  val = "rgb(255, 253, 253)";
  noStroke()
  fill(255,255,255)
  ellipse(circleX, 200, 90, 70);
 //circleX(160, 60, 60)

 ellipse(circleX + 55, 200, 90, 90);
 ellipse(circleX + 90, 200, 80, 70);

 ellipse(circleX + 300, 150, 90, 80);
 ellipse(circleX + 350, 150, 100, 100);
 ellipse(circleX + 400, 150, 90, 80);

 ellipse(circleX + 600, 170, 90, 80);
 ellipse(circleX + 650, 170, 110, 110);
 ellipse(circleX + 700, 170, 90, 80);

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
   ellipse(circleX + 120, 290, 90, 90);
 
   val = "rgb(51, 144, 58)";
   fill(51, 144, 58)
   ellipse(circleX + 140, 300, 90, 90);

   stroke(1)
   fill(77, 51, 22)
   rect(370, 280, 30, 140);
  noStroke()
    fill(42, 121, 0)
   ellipse(circleX + 285, 260, 90, 90);
 
   val = "rgb(51, 144, 58)";
   fill(51, 144, 58)
   ellipse(circleX + 270, 280, 90, 90);
 val = "rgb(22, 183, 36)";
 fill(22, 183, 36)
   ellipse(circleX + 300, 280, 90, 90);
  

 

 //line(500, 800, 200, 230 )
 //line(10, 800, 200, 230 )



 
 


}
