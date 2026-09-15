
 let teller = 0 

 let light = 0;
function keyPressed() { 
  if (keyCode == ENTER) {
    light = light + 1;
    // Stoplichtvolgorde: rood, groen, oranje
    if (light > 2)
      light = 0;
  }


  if (key === ' ') {
    teller = 0;
  }
}
function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);
//instructies.
val = "rgb(1, 14, 20)";
fill(1, 14, 20)
  text("1. Houd B in om een blokje te laten verschijnen.", 20, 20);
  text("2. Druk op spatie om het getal op 0 te zetten.", 20, 130);
  text("3. Druk op enter om van rood -> groen -> oranje te gaan.", 20, 240);
  text("4. Beweeg de eightball met WASD of de pijltjestoetsen.", 360, 20);

//blokje laten verschijnenn.
  if (keyIsDown(66)) {
    fill(255);
    rect(20, 40, 60, 60);
  }

//teller
  text(teller, 20, 180);

  teller++;
  if (teller > 500) {
    teller = 0;
  }

  // Verkeerslicht
   stroke(1);
   fill(60, 60, 60);
   rect(350, 200, 40, 120);

  fill(light == 0 ? color(255, 0, 0) : color(80, 0, 0));
   circle(370, 220, 25);
  fill(light == 1 ? color(0, 255, 0) : color(0, 80, 0));
   circle(370, 260, 25);
  fill(light == 2 ? color(255, 128, 0) : color(80, 50, 0));
   circle(370, 300, 25);

   fill(60, 60, 60);
   rect(360, 320, 20, 120);

//eightball

val = "rgb(243, 247, 248)";
fill(0, 8, 9)
circle(490,130, 200,200, )

val = "rgb(0, 8, 9)";
fill(243, 247, 248)
circle(490,130, 140,140, )
text()
}
