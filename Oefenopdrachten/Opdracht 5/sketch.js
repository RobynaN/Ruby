function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);
  text("1.", 20, 15);
  text("2.", 20, 105);
  text("3.", 80, 105);
  text("4.", 80, 205);
  text("5.", 540, 20);
  text("6.", 350, 105);
  text("7.", 625, 105);

  //10 op een rij
  for (let i = 1; i < 10; i++) {
    fill("blauw")
    rect(i * 50, 10, 40, 40);
  }
//5 op een rij onder elkaar. 
  for (let i = 0; i < 5; i++) {
    fill(i * 60);
    rect(20, 140 + i * 40, 40, 40);
  }

}
