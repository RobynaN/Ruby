let bord = 0;
let speler = 1;
let afgelopen = false;
let winnaar = 0;

let turn = 0;
let turns = 0;
let winningA = false;
let winningB = false;

let checkWin = 1;
let spookyFont;

let clickSound;

function preload() {
  spookyFont = loadFont("Spooky Monster.otf");
  clickSound = loadSound('clicksound.mp3');
  clickSound.play
}

function setup() {
  createCanvas(850, 600);
  //Array.from maakt een 3x3 bord. 
  bord = Array.from({ length: 3 }, () => Array(3).fill(0));
}

function draw() {
  background(220);

  // Achtergrond verandert per speler.
  turns = speler - 1;
  winningA = afgelopen && winnaar === 1;
  winningB = afgelopen && winnaar === 2;

  if (turns == 0) {
    background("blue");
  }
  else if (turns == 1) {
    background("red");
  }

  // achtergrond veranderd als iemand wint
  if (winningA === true) {
    background("blue")
  }
  if (winningB === true) {
    background("red")
  }

  // speelveld base
  stroke(0);
  strokeWeight(24);
  fill(0);
  rect(275, 150, 300, 300, 10);

  stroke(0);
  strokeWeight(10);
  fill(128);
  rect(275, 150, 90, 90, 10);
  rect(380, 150, 90, 90, 10);
  rect(485, 150, 90, 90, 10);
  rect(275, 255, 90, 90, 10);
  rect(380, 255, 90, 90, 10);
  rect(485, 255, 90, 90, 10);
  rect(275, 360, 90, 90, 10);
  rect(380, 360, 90, 90, 10);
  rect(485, 360, 90, 90, 10);

  //de mouse hover 
  //controleert of de muis boven het bord staat.
  if (mouseX >= 275 && mouseX < 575 && mouseY >= 150 && mouseY < 450) {

    //welk vakje wijst de muis aan. 
    let kolom = floor((mouseX - 275) / 100);
    let rij = floor((mouseY - 150) / 100);

    //het vakje waar mijn muis overhangt wordt een andere kleur (blauw of rood)
    noStroke();
    fill(80);
    rect(275 + kolom * 100 + 5, 150 + rij * 100 + 5, 90, 90, 10);
  }

  //vakjes kleuren
  for (let rij = 0; rij < 3; rij++) {
    for (let kolom = 0; kolom < 3; kolom++) {
      if (bord[rij][kolom] !== 0) {    //zit er een speler in dit vakje? 
        fill(bord[rij][kolom] === 1 ? ' blue ' : ' red ');
        noStroke();
        rect(275 + kolom * 100 + 5, 145 + rij * 105 + 5, 90, 90, 10);
      }
    }
  }

  //tekst 
  val = "rgb(247, 249, 250)";
  fill(247, 249, 250);
  strokeWeight(0)
  textAlign(CENTER, CENTER);
  textFont(spookyFont);
  textSize(60)
  if (afgelopen) {
    text(winnaar === 0 ? 'Gelijkspel!' : 'winnaar: speler ' + winnaar, 430, 300);
    textSize(35)
    text('klik om opnieuw te beginnen', 425, 110);

  } else {

    textSize(35)
    text(' speler ' + speler + ' aan de beurt ', 425, 80);
    text(speler === 1 ? 'blauw' : 'rood', 425, 110);
  }
}

//mouse clicking sound. 
function mouseClicked() {
  console.log("Muis geklikt op positie:", mouseX, mouseY);
  clickSound.play();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    console.log("Linker pijltjestoets ingedrukt");
  } else if (key === 'A' || key === 'a') {
    console.log("De letter A is ingedrukt");
  }
}


//vakjes, draw, win. 
//het spel reset als het afgelopen is. 
function mousePressed() {
  if (afgelopen) {
    bord = Array.from({ length: 3 }, () => Array(3).fill(0));
    speler = 1;
    winnaar = 0;
    afgelopen = false;
    return;
  }
  //zorgt ervoor dat er niks gebeurt als ik buiten het veld klik. 
  if (mouseX < 275 || mouseX >= 575 || mouseY < 150 || mouseY >= 450) {
    return;
  }

  let kolom = floor((mouseX - 275) / 100);
  let rij = floor((mouseY - 150) / 100);
  //zorgt ervoor dat je niet op een vakje kan klikken die al gekozen was. 
  if (bord[rij][kolom] !== 0) return;

  bord[rij][kolom] = speler;

  if (heeftGewonnen(speler)) {
    winnaar = speler;
    afgelopen = true;
    //true weergeeft of jij of hij heeft gewonnen ja of nee. 

    //draw
  } else if (bord.every(rij => rij.every(vakje => vakje !== 0))) {
    afgelopen = true;
  } else {
    speler = speler == 1 ? 2 : 1;

  }
}

//controleert of een hele rij van dezelfde speler is 
function heeftGewonnen(speler) {
  for (let i = 0; i < 3; i++) {
    if (bord[i][0] === speler && bord[i][1] === speler && bord[i][2] === speler) return true;
    if (bord[0][i] === speler && bord[1][i] === speler && bord[2][i] === speler) return true;

  }
  //de twee diagonalen worden gecontroleerd.
  return (bord[0][0] === speler && bord[1][1] === speler && bord[2][2] === speler) ||
    (bord[0][2] === speler && bord[1][1] === speler && bord[2][0] === speler);
}