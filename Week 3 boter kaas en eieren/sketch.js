function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(220);

  // speelveld base
  stroke(0);
  strokeWeight(24);
  fill(0);
  rect(100, 50, 300, 300,10);
  
  stroke(0);
  strokeWeight(10);
  fill(128);
  rect(100, 50, 90, 90,10);
  rect(205, 50, 90, 90,10);
  rect(310, 50, 90, 90,10);
  rect(100, 155, 90, 90,10);
  rect(205, 155, 90, 90,10);
  rect(310, 155, 90, 90,10);
  rect(100, 260, 90, 90,10);
  rect(205, 260, 90, 90,10);
  rect(310, 260, 90, 90,10);

  //de speelvakjes. 
  if (mouseX >= 100 && mouseX < 400 && mouseY >= 50 && mouseY < 350) {
    let kolom = floor((mouseX - 100) / 100);
    let rij = floor((mouseY - 50) / 100);

    noStroke();
    fill(80);
    rect(100 + kolom * 100 + 5, 50 + rij * 100 + 5, 90, 90,10);
  }
//de x en o's


}
