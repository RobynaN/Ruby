let art = [];
val = "rgb(255, 130, 12)";
const palette = [
  [173, 216, 230], [255, 182, 193], [255, 150, 150],
  [25, 55, 120], [255, 240, 170], [146, 0, 0], [153, 98, 184],
  [255, 130, 12]
];

function generateArt() {
  art = [];
  const count = floor(random(35, 81)); //floor rondt het getal naar beneden af. 
  for (let i = 0; i < count; i++) {
    const baseSize = random(14, 100); //kiest de groote tussen 14 en 100.

    //constructor. 
    art.push({ //art.push() is dat ik iets toevoeg aan het einde van de array. 
      x: random(-width / 2, width / 2), //random() kiest een willekeurig getal. 
      y: random(-height / 2, height / 2),
      size: baseSize,
      shape: i < 4 ? "square" : random(["circle", "square", "triangle", "hexagon"]),
      color: random(palette),
      speed: random(-0.025, 0.040), //hier krijgt een figuur een snelheid. het kan negatief en positief zijn.
      spinSpeed: i < 8 ? random(2, 5) : null,
      phase: random(TWO_PI), //two.pi betekent dat het een startfase aan een object geef voor de beweging.
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
  val = "rgb(0, 0, 0)";
  background(0);
  translate(width / 2, height / 2);
  stroke(200);

  //de tekening
  //art.length zegt hoeveel objecten erin zitten.
  //const drift = frameCount * figuren.speed * 60; = berekent de beweging. 
  for (let i = 0; i < art.length; i++) {
    const figuren = art[i];
    const drift = frameCount * figuren.speed * 60;
    const size = figuren.size * (1 * sin(frameCount * 2 + figuren.phase));
    //const size = figuren.size * (1 * sin(frameCount * 2 + figuren.phase)); hier laat ik de figuren, 
    //groter en kleiner worden. 
    //sin() geeft een waarde die steeds heen en weer gaat. 

    push(); //push() bewaart de huidige tekeninstellingen.
    translate( //translate() verplaatst het punt waar je gaat tekenen.
      figuren.x + sin(drift + figuren.phase) * 40, // bepaalt hoe groot die beweging is. 
      figuren.y + cos(drift + figuren.phase) * 18
    );
    //rotate(figuren.rotation + frameCount * figuren.speed); = hier laat ik de figuren draaien. 
    rotate(figuren.rotation + frameCount * (figuren.spinSpeed ?? figuren.speed));

    //tekening figuren. 
    fill(figuren.color[0], figuren.color[1], figuren.color[2], 220);
    if (figuren.shape === "circle") {
      ellipse(0, 0, size, size);
    } else if (figuren.shape === "triangle") {
      triangle(-size / 2, size / 2, 0, -size / 2, size / 2, size / 2);
    } else if (figuren.shape === "hexagon") {

      const radius = size / 2;
      beginShape();
      for (let j = 0; j < 6; j++) {
        const angle = (360 / 6) * j - 90;
        vertex(radius * cos(angle), radius * sin(angle));
      }
      endShape(CLOSE);
    } else {
      rectMode(CENTER);
      rect(0, 0, size, size);
    }
    pop();
  }
}

//als ik op enter druk dan veranderen de kleuren van de figuren. 
//kleur.some((waarde, index) => waarde !== figuren.color[index]) = Deze kleur is anders,
// dus deze kleur mag in andereKleuren.
function keyPressed() {
  if (keyCode === ENTER) {
    for (const figuren of art) {
      const andereKleuren = palette.filter((kleur) => //filter() kijkt naar alle kleuren in palette
        kleur.some((waarde, index) => waarde !== figuren.color[index])
      );
      figuren.color = random(andereKleuren);
    }
    return false;
  }
}
