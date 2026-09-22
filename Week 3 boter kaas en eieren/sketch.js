let bord = 0;
let speler = 1;
let afgelopen = false;
let winnaar = 0;



function setup() {
  createCanvas(550, 500);
  bord = Array.from({length: 3 }, () => Array(3).fill(0));
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

  //de mouse hover 
  if (mouseX >= 100 && mouseX < 400 && mouseY >= 50 && mouseY < 350) {
    let kolom = floor((mouseX - 100) / 100);
    let rij = floor((mouseY - 50) / 100);

    noStroke();
    fill(80);
    rect(100 + kolom * 100 + 5, 50 + rij * 100 + 5, 90, 90,10);
  }
  //vakjes kleuren
  for(let rij = 0; rij < 3; rij++) {
    for(let kolom = 0; kolom < 3; kolom++) {
      if (bord[rij][kolom] !== 0) {
        fill(bord[rij][kolom] === 1 ? 'blue' : 'red');
        noStroke();
        rect(100+ kolom * 100 + 5, 45 + rij * 105 + 5, 90, 90, 10);
      }
    }
  }

  //tekst 
 val = "rgb(105, 159, 204)"; 
fill(105, 159, 204);
stroke(1)
textAlign(CENTER, CENTER);
textStyle(BOLD);
textSize(19)
if(afgelopen) {
  text(winnaar === 0 ? 'Gelijkspel! klik om opnieuw te beginnen' : 'speler' + winnaar + 'winnaar! klik om opnieuw te beginnen', 250, 420);

} else{
  text('speler' + speler + 'aan de beurt' + ( speler === 1 ? 'blauw' : 'rood') +')', 250, 420);
   }
}
function mousePressed() {
  if(afgelopen) {
    bord = Array.from({length : 3}, () => Array(3).fill(0));
    speler = 1;
    winnaar = 0;
    afgelopen = false; 
    return;
  }

  if (mouseX < 100 || mouseX >= 400 || mouseY <50 || mouseY >= 350) {
    return;
  }

  let kolom = floor((mouseX - 100) / 100);
  let rij = floor((mouseY - 50) / 100); 
  if (bord[rij][kolom] !== 0) return;

  bord[rij][kolom] = speler; 

  if(heeftGewonnen(speler)) {
    winnaar = speler;
    afgelopen = true;
  } else if(bord.every(rij => rij.every(vakje => vakje !== 0))) {
    afgelopen = true; 
  } else {
    speler = speler ==1 ? 2 : 1;

  }
}

function heeftGewonnen(speler) {
  for(let i = 0; i < 3; i++) { 
    if(bord[i][0] === speler && bord[i][1] === speler && bord[i][2] === speler) return true; 
    if(bord[0][i] === speler && bord[1][i] === speler && bord[2][i]=== speler) return true;
  
  }
  return(bord[0][0] === speler && bord[1][1] === speler && bord[2][2] === speler) || 
   (bord[0][2] === speler && bord[1][1] === speler && bord[2][0] ===speler);
}
