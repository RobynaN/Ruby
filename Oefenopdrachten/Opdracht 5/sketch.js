function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);
  fill (0)
  strokeWeight(1)
  text("1.", 20, 15);
  text("2.", 20, 105);
  text("3.", 80, 105);
  text("4.", 80, 205);
  text("5.", 430, 20);
  text("6.", 350, 105);
  text("7.", 625, 105);

  //10 op een rij
  for (let i = 1; i < 10; i++) {
    fill(i === 7 ? "blue" : "blauw")
    rect(i * 40, 10, 40, 40);
  }
//5 op een rij onder elkaar. 
  for (let i = 0; i < 5; i++) {
    fill(i * 60);
    rect(20, 140 + i * 40, 40, 40);
  }

  //?? 3 
  let offset = 0;
  for (let i = 0; i < 4; i++) {
    fill(0, 100 + i * 50, 0);
    rect(100 + i * 35 + offset, 140, 36 + i * 25, 50);
    offset = offset + i * 25;
  }
 //4
  let breedte = 0; 
  for (let i = 0; i < 4; i++) {
     val = "rgb(0, 4, 255)";
    fill(0, 4,255 / i);
    rect(100 + i * 40 + breedte, 250, 40 + i * 25, 30 + i * 25);
    breedte = breedte + i * 25;
  }
//5
  for (let i = 0; i < 6; i++) {
     val = "rgb(204, 138, 255)";
     fill(204, 138, 255)
    strokeWeight(i + 1);
    ellipse(470 + i * 50, 40, 40, 40);
  }

  //6.
   let redRing = true;
  for (let i = 0; i < 10; i++) {
    strokeWeight(1)
    fill(redRing ? "red" : "white");
    circle(520, 200, 200 - i * 20);
    redRing = !redRing;
  }

  //7 
 let whiteGrey = true; 
  for (let i = 0; i < 21; i++) {
// i <= 10 word de rechterhoek steeds breder. 
//(i - 10) word steeds smaller na 11. 
    fill(whiteGrey ? "white" : "grey" );
    let breedte2 = i <= 10 ? 10 + i * 10 : 110 - (i - 10) * 10;
    rect(670, 140 + i * 10, breedte2, 10);
    whiteGrey = !whiteGrey;
  }

}
