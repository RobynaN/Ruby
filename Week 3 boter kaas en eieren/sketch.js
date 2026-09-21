function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(220);

  // speelveld base
  stroke(0);
  strokeWeight(16);
  fill(128);
  rect(100, 50, 300, 300, 20);
  
  stroke(0);
  strokeWeight(8);
  rect(196, 50, 8, 300, 40);
  rect(296, 50, 8, 300, 40);
  rect(100, 146, 300, 8, 40);
  rect(100, 246, 300, 8, 40);

  //de speelvakjes. 
  if (mouseX >= 100 && mouseX < 400 && mouseY >= 50 && mouseY < 350) {
    let kolom = floor((mouseX - 100) / 100);
    let rij = floor((mouseY - 50) / 100);

    noStroke();
    fill(80);
    rect(100 + kolom * 100, 50 + rij * 0, 90, 90);
  }
  


}
