function setup() {
  createCanvas(400, 200);
}

function draw() {
  background(220);

  let score = 75;

  textAlign(CENTER, CENTER);
  textSize(24);

  if (score >= 90) {
    fill(0, 150, 0);
    text("Uitstekend!", width / 2, height / 2);
  } else if (score >= 70) {
    fill(220, 180, 0);
    text("Goed gedaan!", width / 2, height / 2);
  } else if (score >= 50) {
    fill(255, 140, 0);
    text("Voldoende.", width / 2, height / 2);
  } else {
    fill(220, 0, 0);
    text("Onvoldoende.", width / 2, height / 2);
  }
}
