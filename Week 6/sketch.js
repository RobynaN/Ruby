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
let grimMadImg;
let grimDisImg;
let grimHappyImg;
let grimCheerImg;

let Light;
let liveImg;
let food1Img;
let boredImg;

// Screens
let showDormScreen = false;
let showGuestRoomScreen = false;
let showMissionScreen = false;
let showBathScreen = false;
let showCafeteriaScreen = false;

// Pet statistics (0-100)
let energy = 100;
let hunger = 0;
let happiness = 100;
let health = 100;

// Hidden cleanliness value
let cleanliness = 100;

// Sleep
let isSleeping = false;

// Feeding counter
let feedingCount = 0;
// PRELOAD IMAGES
function preload() {
  homescreen = loadImage("start5.png");
  roomImg = loadImage("guest room.png");
  dormImg = loadImage("dorm.png");

  bathImg = loadImage("bathimg.png");
  missionImg = loadImage("mission.png");
  missionBackImg = loadImage("missionback.webp");
  bathScreenImg = loadImage("bath.jpg");

  foodImg = loadImage("food.png");
  cafeteriaImg = loadImage("cafetaria.jpg");

  grimShockedImg = loadImage("grim shocked.png");
  grimMadImg = loadImage("grim mad.png");
  grimDisImg = loadImage("grim dis.png");
  grimHappyImg = loadImage("grim happy.png");
  grimCheerImg = loadImage("grim cheer.png");

  imgLight = loadImage("light.png");
  liveImg = loadImage("live.png");
  food1Img = loadImage("food1.png");
  boredImg = loadImage("bored.png");
}
function setup() {
  createCanvas(1200, 600);
  imageMode(CORNER);
  textFont("Arial");
}
// UPDATE PET STATISTICS
function updatePetStats() {
  // Convert frame time to seconds.
  // This keeps the stats consistent at different frame rates.
  let elapsed = min(deltaTime / 1000, 0.1);
  if (isSleeping) {
    // Sleeping restores energy and health.
    energy = min(100, energy + elapsed * 8);
    health = min(100, health + elapsed * 1.5);
    // Hunger does not increase while sleeping.
    // Happiness does not decrease while sleeping.

  } else {

    // Normal time passing.
    energy = max(0, energy - elapsed * 0.12);
    hunger = min(100, hunger + elapsed * 0.1);
    happiness = max(0, happiness - elapsed * 0.06);
    // Hunger can damage health.
    let healthLoss = hunger > 70 ? 0.08 : 0.015;

    health = max(0, health - elapsed * healthLoss);
  }

  // Keep all statistics inside the 0-100 range.
  energy = constrain(energy, 0, 100);
  hunger = constrain(hunger, 0, 100);
  happiness = constrain(happiness, 0, 100);
  health = constrain(health, 0, 100);
}
// DRAW PET
function drawPet(x, y, w, h) {
  let petImage = grimHappyImg;
  // Unwell pet
  if (health < 30) {
    petImage = grimDisImg;
  }
  // Very hungry pet
  else if (hunger > 70) {
    petImage = grimMadImg;
  }
  // Exhausted pet
  else if (energy < 20) {
    petImage = grimDisImg;
  }
  // Very happy pet
  else if (happiness > 80) {
    petImage = grimCheerImg;
  }
  // Unhappy pet
  else if (happiness < 30) {
    petImage = grimDisImg;
  }
  // Moderately happy pet
  else if (happiness > 50) {
    petImage = grimHappyImg;
  }
  // Default expression
  else {
    petImage = grimShockedImg;
  }
  if (petImage) {
    image(petImage, x, y, w, h);
  }
}
// CARE BUTTON
function drawCareButton(label) {
  rectMode(CENTER);

  stroke(255);
  strokeWeight(2);
  fill(45, 130, 75);

  rect(100, 120, 150, 46, 10);

  noStroke();
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(20);
  textStyle(BOLD);

  text(label, 100, 120);

  // Restore drawing settings.
  rectMode(CORNER);
  textAlign(LEFT, BASELINE);
  textStyle(NORMAL);
}
// STATISTICS BARS
function drawCountdownBars() {
  // Four statistics and their icons.
  let icons = [food1Img, imgLight, boredImg, liveImg];
  let labels = [
    "HUNGER", "ENERGY", "HAPPINESS", "HEALTH"];

  // A full hunger bar means the pet is well fed.
  let values = [
    100 - hunger, energy, happiness, health];

  // Position the bars in the bottom-left corner.
  // They stay clear of the pet at x = 270.
  let startX = 24;
  let startY = height - 18;
  let barWidth = 190;
  let barHeight = 22;
  let spacing = 30;

  for (let i = 0; i < values.length; i++) {
    let x = startX;
    let y = startY - (values.length - 1 - i) * spacing;
    let value = constrain(values[i], 0, 100);
    let barLength = barWidth * value / 100;

    // Draw the icon.
    if (icons[i]) {
      image(icons[i], x, y - 19, 26, 26);
    }

    // Dark bar background.
    noStroke();
    fill(15, 18, 35, 230);
    rect(x + 34, y - 18, barWidth, barHeight, 7);

    // Choose a colour based on the value.
    if (value > 60) {
      fill(65, 200, 115);       // Green
    } else if (value > 30) {
      fill(255, 175, 55);       // Orange
    } else {
      fill(235, 75, 80);        // Red
    }

    // Draw the filled part.
    if (barLength > 0) {
      rect(
        x + 34,
        y - 18,
        barLength,
        barHeight,
        7
      );
    }

    // Draw the statistic and percentage.
    fill(255);
    textStyle(BOLD);
    textSize(11);
    textAlign(LEFT, CENTER);
    text(labels[i] + " " + round(value) + "%", x + 42, y - 7);
  }

  // Restore text settings.
  textAlign(LEFT, BASELINE);
  textStyle(NORMAL);
}
// HEADER
function drawHeader(title) {
  noStroke();
  fill(0, 180);
  rect(0, 0, width, 80);

  fill(255);
  textStyle(BOLD);
  textSize(28);
  textAlign(LEFT, BASELINE);

  text(title, 40, 52);

  textSize(22);
  textAlign(RIGHT, BASELINE);
  text("RETURN", 1180, 48);

  textAlign(LEFT, BASELINE);
  textStyle(NORMAL);
}
// MAIN DRAW FUNCTION
function draw() {
  // Update statistics ONCE per frame.
  // This works on every screen.
  updatePetStats();
  // CAFETERIA SCREEN
  if (showCafeteriaScreen) {

    if (cafeteriaImg) {
      image(cafeteriaImg, 0, 0, width, height);
    }

    drawPet(460, 220, 260, 340);

    drawHeader("CAFETERIA");
    drawCareButton("FEED");
    drawCountdownBars();

    return;
  }
  // BATHROOM SCREEN
  if (showBathScreen) {

    if (bathScreenImg) {
      image(bathScreenImg, 0, 0, width, height);
    }

    drawPet(460, 220, 260, 340);

    drawHeader("BATHROOM");
    drawCareButton("BATHE");
    drawCountdownBars();

    return;
  }
  // MISSION SCREEN
  if (showMissionScreen) {

    if (missionBackImg) {
      image(missionBackImg, 0, 0, width, height);
    }

    drawPet(420, 220, 260, 340);

    drawHeader("MISSION");
    drawCareButton("PLAY");
    drawCountdownBars();

    return;
  }
  // DORM SCREEN
  if (showDormScreen) {

    background(30, 24, 45);

    if (dormImg) {
      image(dormImg, 0, 0, width, height);
    }

    drawPet(270, 220, 260, 340);

    drawHeader("GUEST ROOM");

    drawCareButton(isSleeping ? "WAKE UP" : "SLEEP");

    drawCountdownBars();

    return;
  }
  // GUEST ROOM SCREEN
  if (showGuestRoomScreen) {

    background(30, 24, 45);

    if (roomImg) {
      image(roomImg, 0, 0, width, height);
    }

    drawPet(270, 220, 260, 340);

    drawHeader("GUEST ROOM");
    drawCountdownBars();

    return;
  }
  // HOME SCREEN
  if (homescreen) {
    image(homescreen, 0, 0, width, height);
  } else {
    background(30, 24, 45);
  }

  drawPet(270, 220, 260, 340);


  // Dorm entrance
  if (roomImg) {
    image(roomImg, 668, 278, 90, 110);
  }

  // Bathroom entrance
  if (bathImg) {
    image(bathImg, 800, 335, 55, 70);
  }

  // Mission entrance
  if (missionImg) {
    image(missionImg, 745, 120, 90, 80);
  }

  // Cafeteria entrance
  if (foodImg) {
    image(foodImg, 915, 180, 85, 65);
  }


  // Home screen labels
  push();

  noStroke();
  fill(255);
  textStyle(BOLD);
  textSize(18);

  text("MISSION", 755, 125);
  text("BATHE", 800, 360);

  textSize(14);
  text("CAFETERIA", 918, 180);

  pop();


  // Draw statistics on top of the background.
  drawCountdownBars();
}
// MOUSE PRESSED
function mousePressed() {
  // CAFETERIA ACTIONS
  if (showCafeteriaScreen) {

    // FEED button
    if (
      mouseX >= 25 && mouseX <= 175 && mouseY >= 97 && mouseY <= 143) {

      // Feeding when hunger is already low
      // counts as overfeeding.
      if (hunger < 20) {
        health = max(0, health - 10);
        feedingCount++;
      }

      // Reduce hunger and restore energy.
      hunger = max(0, hunger - 35);
      energy = min(100, energy + 10);
      return;
    }

    // RETURN button
    if (mouseX >= 1040 && mouseY <= 80) {
      showCafeteriaScreen = false;
      return;
    }
  }
  // BATHROOM ACTIONS
  else if (showBathScreen) {
    // CLEAN button
    if (mouseX >= 25 && mouseX <= 175 && mouseY >= 97 && mouseY <= 143) {

      // Cleaning improves health.
      cleanliness = min(100, cleanliness + 40);
      health = min(100, health + 20);

      return;
    }

    // RETURN button
    if (mouseX >= 1040 && mouseY <= 80) {
      showBathScreen = false;
      return;
    }
  }
  // MISSION ACTIONS
  else if (showMissionScreen) {

    // PLAY button
    if (mouseX >= 25 && mouseX <= 175 && mouseY >= 97 && mouseY <= 143) {

      // Playing improves happiness but costs energy.
      happiness = min(100, happiness + 35);
      energy = max(0, energy - 10);

      return;
    }

    // RETURN button
    if (mouseX >= 1040 && mouseY <= 80) {
      showMissionScreen = false;
      return;
    }
  }
  // DORM ACTIONS
  else if (showDormScreen) {

    // SLEEP / WAKE button
    if (mouseX >= 25 && mouseX <= 175 && mouseY >= 97 && mouseY <= 143) {

      isSleeping = !isSleeping;

      return;
    }

    // Open the guest room.
    if (mouseX >= 810 && mouseX <= 930 && mouseY >= 230 && mouseY <= 390) {
      showDormScreen = false;
      showGuestRoomScreen = true;
      return;
    }

    // RETURN button
    if (mouseX >= 1040 && mouseY <= 80) {
      showDormScreen = false;
      isSleeping = false;
      return;
    }
  }
  // GUEST ROOM ACTIONS
  else if (showGuestRoomScreen) {

    // RETURN to the dorm.
    if (mouseX >= 1040 && mouseY <= 80) {
      showGuestRoomScreen = false;
      showDormScreen = true;
      return;
    }
  }
  // HOME SCREEN ACTIONS
  else {

    // Mission entrance
    if (mouseX >= 740 && mouseX <= 840 && mouseY >= 120 && mouseY <= 200) {
      showMissionScreen = true;
    }

    // Bathroom entrance
    else if (mouseX >= 800 && mouseX <= 855 && mouseY >= 335 && mouseY <= 405) {
      showBathScreen = true;
    }

    // Dorm entrance
    else if (mouseX >= 668 && mouseX <= 758 && mouseY >= 278 && mouseY <= 388) {
      showDormScreen = true;
    }

    // Cafeteria entrance
    else if (mouseX >= 915 && mouseX <= 1000 && mouseY >= 180 && mouseY <= 245) {
      showCafeteriaScreen = true;
    }
  }
}