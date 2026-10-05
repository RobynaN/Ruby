
function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(120, 217, 255);

  fill(245, 220, 110);
  rect(0, 260, width, height - 260);

  Tekenhuis(40, 210);
  Tekenhuis(120, 210);
  Tekenhuis(250, 210);
  Tekenhuis(320, 210);

  //teken een cirkel
  line(0, 260, width, 260);
  fill(255, 230, 0);
  circle(60, 50, 60);
  fill(100, 53, 5);
  rect(200, 210, 10, 50);
  fill(9, 105, 25);
  ellipse(200, 200, 25, 25);
  ellipse(210, 200, 25, 25);
  ellipse(200, 190, 25, 25);
  fill(0, 0, 0);
  text("Transformers ;p", 300, 100);
  text(Return(2, 3), 60, 200);
  text(Deel(6, 3), 140, 200);
  text(Vermenigvuldig(2, 3), 270, 200);
  text(TrekAf(5, 3), 340, 200);
}

function Tekenhuis(positionX, positionY) {
  fill(255, 255, 255);
  rect(positionX, positionY, 50, 50);
  triangle(positionX, positionY, positionX + 25, positionY - 25, positionX + 50, positionY);
  rect(positionX + 10, positionY + 20, 10, 30);
  rect(positionX + 30, positionY + 20, 10, 10);

  fill(0, 0, 0);
  rect(positionX + 30, positionY + 20, 10, 10);
  triangle(positionX + 30, positionY + 20, positionX + 35, positionY + 15, positionX + 40, positionY + 20);
  fill(255, 255, 255);
}

function drawCircle(x, y, d) {
  ellipse(x, y, d, d);
  line(x, y, x + d, y + d);
  rect(x, y, d, d);
  ellipse(x, y, d, d);
  text("Transformers ;p", x - 20, y + 40);
  rect(x, y,)
}

function Return(x, y) {
  return x + y;
}

function Deel(x, y) {
  return x / y;
}

function Vermenigvuldig(x, y) {
  return x * y;
}

function TrekAf(x, y) {
  return x - y;
}
