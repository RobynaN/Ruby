
let circleX = 100;

function setup() {
  createCanvas(400, 300);
  circleX = 0;
}

function draw() {
  background(225, 225, 225);
  fill(255, 0, 0);
  ellipse(circleX, 150, 50, 50);
  circleX = circleX + 2;
}
