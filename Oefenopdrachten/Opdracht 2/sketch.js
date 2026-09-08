
let X = 100;
let a = 20;
let b = 10;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(225, 225, 225);
  text("Hello World", 20,20);
  
  let y = 80;
  /*berekeningen*/
  /*variable voor alle calculaties, de let y = 80 laat de variable's automatisch + 80 
  zonder dat je het de heletijd moet typen*/
  optellen = a + b;
  text("optellen: " + optellen, 20, y);
  vermenigvuldigen = a * b;
 
  y = y + 20;
  text("vermenigvuldigen: " + vermenigvuldigen, 20, y);
  aftrekken = a - b;
  
  y = y + 20;
  text("aftrekken: " + aftrekken, 20, y);
  delen = a / b;
  y = y + 20;
  text("delen: " + delen, 20, y);

}

