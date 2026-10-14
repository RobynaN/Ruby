let homescreen;
let grimGif;
let dormImg;
let roomImg;
let bathImg;
let missionImg;
let missionBackImg;
let bathScreenImg;
let foodImg;
let showDormScreen = false;
let showGuestRoomScreen = false;
let showMissionScreen = false;
let showBathScreen = false;
let bath;
let showCafeteriaScreen = false;
let cafeteria;

function preload() {
  homescreen = loadImage('start5.png');
  grimGif = loadImage('Grim.gif');
  roomImg = loadImage('guest room.png');
  dormImg = loadImage('dorm.png');
  bathImg = loadImage('bathimg.png');
  missionImg = loadImage('mission.png');
  missionBackImg = loadImage('missionback.webp');
  bathScreenImg = loadImage('bath.jpg');
  foodImg = loadImage('food.png');
  
}

function setup() {
  createCanvas(1200, 600);
}

function draw() {
  if (showBathScreen) {
    if (bathScreenImg) {
      image(bathScreenImg, 0, 0, width, height);
    }
    fill(0, 180);
    noStroke();
    rect(0, 0, width, 80);
    fill(255);
    textStyle(BOLD);
    textSize(28);
    text('BATHROOM', 40, 52);
    text('RETURN', 1050, 48);
    return;
  }

  if (showMissionScreen) {
    if (missionBackImg) {
      image(missionBackImg, 0, 0, width, height);
    }
    fill(0, 180);
    noStroke();
    rect(0, 0, width, 80);
    fill(255);
    textStyle(BOLD);
    textSize(28);
    text('MISSION', 40, 52)
    fill(255);
    textStyle(BOLD);
    text('RETURN', 1050, 48);
    return;
  }

  if (showDormScreen) {
    background(30, 24, 45);
    if (dormImg) {
      image(dormImg, 0, 0, width, height);
    }
    fill(0, 180);
    noStroke();
    rect(0, 0, width, 80);
    fill(255);
    textStyle(BOLD);
    textSize(32);
    text('GUEST ROOM', 40, 52);
    text('RETURN', 1040, 48);
    return;
  }

  if (showGuestRoomScreen) {
    background(30, 24, 45);
    if (roomImg) {
      image(roomImg, 666, 230, 80, 100);
    }
    fill(0, 180);
    noStroke();
    rect(0, 0, width, 80);
    fill(255);
    textStyle(BOLD);
    textSize(32);
    text('GUEST ROOM', 30, 50);
    textSize(18);
    text('RETURN', 1080, 48);
    return;
  }

  if (homescreen) {
    image(homescreen, 0, 0, width, height);
  }

  if (roomImg) {
    image(roomImg, 668, 278, 90, 110);
  }

  if (grimGif) {
    image(grimGif, 200, 120, 400, 500);
  }

  if (bathImg) {
    image(bathImg, 800, 335, 55, 70);
  }

  if (missionImg) {
    image(missionImg, 745, 120, 90, 80);
  }

  if (foodImg) {
    image(foodImg, 915, 180, 85, 65);
  }

  push();
  noFill();
  noStroke();
  rect(668, 278, 90, 110); // clickable dorm area without showing the dorm image on the start screen
  pop();
  
 //text. 
 
  push();
  noStroke();
  textStyle(BOLD);
  fill(255);
  textSize(18);
  text("MISSION", 755, 125);
 text("BATHE", 800, 360);
 textSize(14)
  text("CAFETERIA", 918, 180);
  pop();

}

function mousePressed() {
  if (showBathScreen) {
    if (mouseX >= 1040 && mouseX <= 1190 && mouseY >= 0 && mouseY <= 80) {
      showBathScreen = false;
    }
     if (showCafeteriaScreen) {
    if (mouseX >= 1040 && mouseX <= 1190 && mouseY >= 0 && mouseY <= 80) {
      showCafeteriaScreen = false;
    }
  }
  } else if (showMissionScreen) {
    if (mouseX >= 1040 && mouseX <= 1190 && mouseY >= 0 && mouseY <= 80) {
      showMissionScreen = false;
    }
  } else if (showDormScreen) {
    if (mouseX >= 1040 && mouseX <= 1190 && mouseY >= 0 && mouseY <= 80) {
      showDormScreen = false;
      showGuestRoomScreen = false;
    }
  } else if (showGuestRoomScreen) {
    if (mouseX >= 1040 && mouseX <= 1190 && mouseY >= 0 && mouseY <= 80) {
      showGuestRoomScreen = false;
    }
  } else if (mouseX >= 740 && mouseX <= 840 && mouseY >= 120 && mouseY <= 200) {
    showMissionScreen = true;
  } else if (mouseX >= 800 && mouseX <= 855 && mouseY >= 335 && mouseY <= 405) {
    showBathScreen = true;
  } else if (mouseX >= 668 && mouseX <= 758 && mouseY >= 278 && mouseY <= 388) {
    showDormScreen = true;
  }
  else if (mouseX >= 668 && mouseX <= 758 && mouseY >= 278 && mouseY <= 388) {
    showCafeteriaScreen = true;
  }
   
}
