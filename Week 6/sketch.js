let homescreen;
let grimGif;
let dormImg;
let roomImg;
let showDormScreen = false;

function preload() {
  homescreen = loadImage('start5.png');
  grimGif = loadImage('Grim.gif');
  dormImg = loadImage('dorm.png');
  roomImg = loadImage('twst room.webp');
}

function setup() {
  createCanvas(1200, 600);
}

function draw() {
  if (showDormScreen) {
    background(30, 24, 45);
    if (roomImg) {
      image(roomImg, 0, 0, width, height);
    }
    fill(0, 180);
    noStroke();
    rect(0, 0, width, 80);
    fill(255);
    textStyle(BOLD);
    textSize(32);
    text('GUEST ROOM', 40, 52);
    textSize(18);
    text('BACK', 1080, 48);
    return;
  }

  if (homescreen) {
    image(homescreen, 0, 0, width, height);
  }

  if (grimGif) {
    image(grimGif, 200, 120, 400, 500);
  }

  if (dormImg) {
    image(dormImg, 668, 278, 90, 110,10);
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

function mousePressed() {
  if (showDormScreen) {
    if (mouseX >= 1040 && mouseX <= 1190 && mouseY >= 0 && mouseY <= 80) {
      showDormScreen = false;
    }
  } else if (mouseX >= 668 && mouseX <= 758 && mouseY >= 278 && mouseY <= 388) {
    showDormScreen = true;
  }
}
