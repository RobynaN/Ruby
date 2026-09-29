let art = [];

function generateArt() {
  art = [];
  const palette = [
    [255, 75, 90], [255, 190, 65], [65, 210, 190],
    [110, 120, 255], [245, 235, 210], [185, 85, 210]
  ];
  const count = floor(random(35, 81));

  for (let i = 0; i < count; i++) {
    art.push({
      x: random(-width / 2, width / 2),
      y: random(-height / 2, height / 2),
      size: random(14, 100),
      shape: random(["circle", "square", "triangle"]),
      color: random(palette),
      speed: random(-0.025, 0.025),
      phase: random(TWO_PI),
      rotation: random(360)
    });
  }
}

function setup() {
  createCanvas(800, 600);
  angleMode(DEGREES);
  generateArt();
}

function draw() {
  background(255);
  translate(width / 2, height / 2);
  stroke(200);

  //de tekening
  //art.length zegt hoeveel objecten erin zitten.
  //const drift = frameCount * stukjes.speed * 60; = berekent de beweging. 
  for (let i = 0; i < art.length; i++) {
    const stukjes = art[i];
    const drift = frameCount * stukjes.speed * 60;
    const size = stukjes.size * (1 + 0.16 * sin(frameCount * 2 + stukjes.phase));
    //const size = stukjes.size * (1 + 0.16 * sin(frameCount * 2 + stukjes.phase)); hier laat ik de figuren, 
    //groter en kleiner worden. 
    //sin() geeft een waarde die steeds heen en weer gaat. 

    push(); //push() bewaart de huidige tekeninstellingen.
    translate( //translate() verplaatst het punt waar je gaat tekenen.
      stukjes.x + sin(drift + stukjes.phase) * 18, // bepaalt hoe groot die beweging is. 
      stukjes.y + cos(drift + stukjes.phase) * 18
    );
    //rotate(stukjes.rotation + frameCount * stukjes.speed); = hier laat ik de figuren draaien. 
    rotate(stukjes.rotation + frameCount * stukjes.speed); //Omdat frameCount steeds groter wordt,
    // verandert de rotatie steeds.
    fill(stukjes.color[0], stukjes.color[1], stukjes.color[2], 220);
    if (stukjes.shape === "circle") {
      ellipse(0, 0, size, size);
    } else if (stukjes.shape === "triangle") {
      triangle(-size / 2, size / 2, 0, -size / 2, size / 2, size / 3);
    } else {
      rectMode(CENTER);
      rect(0, 0, size, size);
    }
    pop();
  }
}

//als ik hier op enter druk veranderdt het scherm. 
function keyPressed() {
  if (keyCode === ENTER) {
    generateArt();
    return false;
  }
}
