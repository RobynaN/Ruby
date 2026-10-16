let homescreen;
let dormImg;
let roomImg;
let bathImg;
let missionImg;
let missionBackImg;
let bathScreenImg;
let foodImg;
let cafeteriaImg;
let grimShockedImg;
let imgLight;
let liveImg;
let food1Img;
let boredImg;
let countdownStartTime;
let liveRemaining = 180;
let liveLastUpdateTime = 0;
let showDormScreen = false;
let showGuestRoomScreen = false;
let showMissionScreen = false;
let showBathScreen = false;
let bath;
let showCafeteriaScreen = false;
let cafeteria;
let energy = 100;
let isSleeping = false;
let sleepStartTime = 0;

function preload() {
  homescreen = loadImage('start5.png');
  roomImg = loadImage('guest room.png');
  dormImg = loadImage('dorm.png');
  bathImg = loadImage('bathimg.png');
  missionImg = loadImage('mission.png');
  missionBackImg = loadImage('missionback.webp');
  bathScreenImg = loadImage('bath.jpg');
  foodImg = loadImage('food.png');
  cafeteriaImg = loadImage('cafetaria.jpg');
  grimShockedImg = loadImage('grim shocked.png');
  imgLight = loadImage('light.png');
  liveImg = loadImage('live.png');
  food1Img = loadImage('food1.png');
  boredImg = loadImage('bored.png');
  
}

function setup() {
  createCanvas(1200, 600);
  countdownStartTime = millis();
  liveLastUpdateTime = countdownStartTime;
}

function drawCountdownBars() {
  let icons = [imgLight, liveImg, food1Img, boredImg];
  let labels = ['ENERGY', 'LIVE', 'FOOD', 'BORED'];
  // Each stat drains at its own rate; shorter durations drain faster.
  // Drain each stat over 2–5 minutes.
  let durations = [120, 180, 240, 300];
  let elapsed = (millis() - countdownStartTime) / 1000;
  let now = millis();
  let caringForGrim = showCafeteriaScreen || showBathScreen || showMissionScreen || showDormScreen || showGuestRoomScreen;
  if (!caringForGrim) {
    liveRemaining = max(0, liveRemaining - (now - liveLastUpdateTime) / 1000);
  }
  liveLastUpdateTime = now;

  for (let i = 0; i < icons.length; i++) {
    let x = 24;
    let y = height - 18 - (icons.length - 1 - i) * 30;
    let duration = durations[i];
    let remaining = i === 0
      ? constrain(energy / 100, 0, 1)
      : i === 1
        ? constrain(liveRemaining / duration, 0, 1)
        : max(0, 1 - elapsed / duration);
    if (icons[i]) image(icons[i], x, y - 19, 28, 28);
    noStroke();
    fill(0, 180);
    rect(x + 34, y - 18, 220, 24, 10);
    fill(80, 220, 120);
    rect(x + 34, y - 18, 220 * remaining, 24, 10);
    fill(255);
    textStyle(BOLD);
    textSize(12);
    let value = i === 0
      ? round(energy) + '%'
      : i === 1
        ? ceil(liveRemaining) + 's'
        : ceil(remaining * duration) + 's';
    text(labels[i] + ' ' + value, x + 40, y - 2);
  }
}

function draw() {
  if (showCafeteriaScreen) {
    if (cafeteriaImg) {
      image(cafeteriaImg, 0, 0, width, height);
    }
    if (grimShockedImg) image(grimShockedImg, 460, 220, 260, 340);
    fill(0, 180);
    noStroke();
    rect(0, 0, width, 80);
    fill(255);
    textStyle(BOLD);
    textSize(28);
    text('CAFETERIA', 40, 52);
    text('RETURN', 1050, 48);
    drawCountdownBars();
    return;
  }

  if (showBathScreen) {
    if (bathScreenImg) {
      image(bathScreenImg, 0, 0, width, height);
    }
    if (grimShockedImg) image(grimShockedImg, 460, 220, 260, 340);
    fill(0, 180);
    noStroke();
    rect(0, 0, width, 80);
    fill(255);
    textStyle(BOLD);
    textSize(28);
    text('BATHROOM', 40, 52);
    text('RETURN', 1050, 48);
    drawCountdownBars();
    return;
  }

  if (showMissionScreen) {
    if (missionBackImg) {
      image(missionBackImg, 0, 0, width, height);
    }
    if (grimShockedImg) image(grimShockedImg, 420, 220, 260, 340);
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
    drawCountdownBars();
    return;
  }

  if (showDormScreen) {
    background(30, 24, 45);
    if (dormImg) {
      image(dormImg, 0, 0, width, height);
    }
    if (grimShockedImg) image(grimShockedImg, 270, 220, 260, 340);
    fill(0, 180);
    noStroke();
    rect(0, 0, width, 80);
    fill(255);
    textStyle(BOLD);
    textSize(32);
    text('GUEST ROOM', 40, 52);
    text('RETURN', 1040, 48);
    drawCountdownBars();
    return;
  }

  if (showGuestRoomScreen) {
    background(30, 24, 45);
    if (roomImg) {
      image(roomImg, 666, 230, 80, 100);
    }
    if (grimShockedImg) image(grimShockedImg, 270, 220, 260, 340);
    fill(0, 180);
    noStroke();
    rect(0, 0, width, 80);
    fill(255);
    textStyle(BOLD);
    textSize(32);
    text('GUEST ROOM', 30, 50);
    textSize(18);
    text('RETURN', 1080, 48);
    image(roomImg, 666, 230, 80, 100);
    drawCountdownBars();
    return;
  }

  if (homescreen) {
    image(homescreen, 0, 0, width, height);
  }

  if (grimShockedImg) {
    image(grimShockedImg, 270, 220, 260, 340);
  }

  if (roomImg) {
    image(roomImg, 668, 278, 90, 110);
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

  drawCountdownBars();

}

function mousePressed() {
  if (showCafeteriaScreen) {
    if (mouseX >= 1040 && mouseX <= 1190 && mouseY >= 0 && mouseY <= 80) {
      showCafeteriaScreen = false;
    }
  } else if (showBathScreen) {
    if (mouseX >= 1040 && mouseX <= 1190 && mouseY >= 0 && mouseY <= 80) {
      showBathScreen = false;
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
  else if (mouseX >= 915 && mouseX <= 1000 && mouseY >= 180 && mouseY <= 245) {
    showCafeteriaScreen = true;
  }
   
}
