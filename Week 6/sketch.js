let homescreen;
let grimGif;

function preload() {
  homescreen = loadImage('start5.png');
  grimGif = loadImage('Grim.gif');
}

function setup() {
  createCanvas(1200, 600);
  let startButton = createButton('MISSION');
  startButton.position(765, 170);
}

function draw() {
  if (homescreen) {
    image(homescreen, 0, 0, width, height);
  }

  if (grimGif) {
    image(grimGif, 200, 120, 400, 500);
  }
 //text. 
  push();
  fill(0,180);
  noStroke();
  textStyle(BOLD);
  rect(740, 120, 100, 80, 55);
  fill(255);
  textSize(18);
  text("MISSION", 755, 125);
  textSize(18);
  text("MUSIC", 930, 178);
  textSize(20);
  text("GUEST", 675, 310);
  text("ROOM", 680, 380);
  textSize(18);
  text("BATHE", 800, 360);
  pop();

//invincible rects.
  push();
  noFill();
  noStroke();
  rect(750, 135, 80, 24);  // MISSION
  rect(925, 158, 70, 24);  // MUSIC
  rect(670, 290, 70, 26);  // GUEST
  rect(795, 340, 70, 24);  // BATHE
  pop();
}
