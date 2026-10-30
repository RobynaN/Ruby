let homescreen;
let dormImg;
let roomImg;
let bathImg;
let missionImg;
let missionBackImg;
let bathScreenImg;
let foodImg;
let cafeteriaImg;
let bannerImg;
let deadImg;
let settingImg;
let klapImg;
let shopImg;
let showMaintenanceMessage = false;
let maintenanceMessageUntil = 0;
let showShopMessage = false;
let shopMessageUntil = 0;

let grimShockedImg;
let grimMadImg;
let grimDisImg;
let grimHappyImg;
let grimCheerImg;

let energyImg;
let food1Img;
let pomefioreImg;
let cleannessImg;
let lifeBannerImg;
let lifeEmptyImg;

let lives = 5;
let nextLifeLossAt = null;

let backgroundMusic;

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
let isGameOver = false;


// PRELOAD IMAGES
function preload() {
  soundFormats("mp3");
  backgroundMusic = loadSound("music.mp3");
  homescreen = loadImage("start5.png");
  roomImg = loadImage("guest room.png");
  dormImg = loadImage("dorm.png");

  bathImg = loadImage("bathimg.png");
  missionImg = loadImage("mission.png");
  missionBackImg = loadImage("missionback.webp");
  bathScreenImg = loadImage("bath.jpg");

  foodImg = loadImage("food.png");
  cafeteriaImg = loadImage("cafetaria.jpg");
  bannerImg = loadImage("banner.jpeg");
  deadImg = loadImage("dead.png");
  settingImg = loadImage("setting.png");
  klapImg = loadImage("klap.png");
  shopImg = loadImage("shop.png");

  grimShockedImg = loadImage("grim shocked.png");
  grimMadImg = loadImage("grim mad.png");
  grimDisImg = loadImage("grim dis.png");
  grimHappyImg = loadImage("grim happy.png");
  grimCheerImg = loadImage("grim cheer.png");

  energyImg = loadImage("energy.png");
  lifeBannerImg = loadImage("health.png");

  food1Img = loadImage("hunger.png");
  cleannessImg = loadImage("Cleanness.png");

  // Health image used for happiness
  pomefioreImg = loadImage("bathe.png");
}


function setup() {
  createCanvas(1200, 600);
  imageMode(CORNER);
  textFont("Arial");

  loadGame();
  window.addEventListener("pagehide", saveGame);

  // Start music as soon as the game opens; browsers may defer audio until interaction.
  if (backgroundMusic) {
    userStartAudio();
    backgroundMusic.loop();
  }
}




// UPDATE PET STATISTICS
function updatePetStats() {
  let elapsed = min(deltaTime / 1000, 0.1);

  if (isSleeping) {
    // Sleeping restores energy and health.
    energy = min(100, energy + elapsed * 8);
    health = min(100, health + elapsed * 1.5);

    // Hunger and happiness do not change while sleeping.
  } else {
    // Normal time passing.
    energy = max(0, energy - elapsed * 2.5);
    hunger = min(100, hunger + elapsed * 2.3);
    happiness = max(0, happiness - elapsed * 3);
    cleanliness = max(0, cleanliness - elapsed * 1.8);

    // Hunger can damage health.
    let healthLoss = hunger > 70 ? 0.45 : 1.6;
    health = max(0, health - elapsed * healthLoss);
  }

  // Keep all statistics between 0 and 100.
  //constrain betekent het binnen bepaalde grenzen houden van een waarde
  energy = constrain(energy, 0, 100);
  hunger = constrain(hunger, 0, 100);
  happiness = constrain(happiness, 0, 100);
  health = constrain(health, 0, 100);
  cleanliness = constrain(cleanliness, 0, 100);

  // The hunger bar is reversed, so it is empty when hunger reaches 100.
  if (hunger >= 100 && energy <= 0 && happiness <= 0 && health <= 0) {
    isGameOver = true;
  }

  // Calculate how many lives health should have.
  let healthLives = health <= 0 ? 0 : ceil(health / 20);

  // Restore lives if health recovers.
  if (healthLives > lives) {
    lives = healthLives;
    nextLifeLossAt = null;
  } else if (healthLives < lives) {
    // Delay each life loss slightly.
    if (nextLifeLossAt === null) {
      nextLifeLossAt = millis() + 1000;
    }
    //millis() geeft aan hoeveel milliseconden er sinds het starten van de game zijn verstreken.
    //lives-- verlaagt het aantal levens met één.
    if (millis() >= nextLifeLossAt) {
      lives--;

      nextLifeLossAt =
        lives > healthLives ? millis() + 700 : null;
    }
  } else {
    nextLifeLossAt = null;
  }
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
  else if (energy < 30) {
    petImage = grimDisImg;
  }

  else if (energy > 60) {
    petImage = grimHappyImg;
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
  else if (happiness > 90) {
    petImage = grimHappyImg;
  }

  // Default expression
  else if (happiness > 80) {
    petImage = grimShockedImg;
  }

  if (petImage) {
    // Draw every expression, including grim mad, in the same position and size.
    image(petImage, 300, 180, 250, 400);
  }
}


// CARE BUTTON
function drawCareButton(label) {
  if (bannerImg) {
    image(bannerImg, 25, 97, 150, 46);
  }

  // Invisible overlay over the banner on every screen that uses this button.
  push();
  noStroke();
  fill(0, 180);
  rect(25, 97, 150, 46);
  pop();

  fill(255);
  textAlign(CENTER, CENTER);
  textSize(20);
  textStyle(BOLD);

  text(label, 100, 120);

  textAlign(LEFT, BASELINE);
  textStyle(NORMAL);
}


// STATISTICS BARS
function drawCountdownBars() {
  // Keep the stat bars readable on every screen.
  noStroke();
  fill(0, 180);
  rect(20, 350, 200, 235, 10);

  // Icon for each statistic.
  let icons = [food1Img, energyImg, pomefioreImg, lifeBannerImg, cleannessImg];

  let labels = ["HUNGER", "ENERGY", "HAPPINESS", "HEALTH", "CLEANLINESS"];

  // Hunger is reversed:
  // less hunger means more filled slots.
  let values = [100 - hunger, energy, happiness, health, cleanliness];

  let startX = 34;
  let startY = height - 19;
  let spacing = 46;

  for (let i = 0; i < values.length; i++) {
    let x = startX;
    let y = startY - (values.length - 1 - i) * spacing - 28;

    let value = constrain(values[i], 0, 100);

    // Each stat has five slots.
    // Each slot represents 20%.
    let imagesRemaining = ceil(value / 20);

    // Draw five image slots.
    for (let j = 0; j < 5; j++) { //let j is een tijdelijke loop
      let slotX = x + j * 25;
      let slotY = y;
      //haalt de hele tijd een img weg als die 20% lager is
      let isFilled = j < imagesRemaining;
      let statImage = icons[i];

      // Energy uses only filled icons; each disappears as energy drops.
      if (i === 1 && !isFilled) {
        continue;
      }

      // Happiness uses the same disappearing-slot behavior as energy.
      if (i === 2 && !isFilled) {
        continue;
      }

      // Hunger uses five icons that disappear as hunger decreases.
      if (i === 0 && !isFilled) {
        continue;
      }

      // Empty stat slots disappear as their values decrease.
      if (i === 3 && !isFilled) {
        continue;
      }

      if (i === 4 && !isFilled) {
        continue;
      }

      if (statImage) {
        push();

        // Fade empty slots for hunger, energy, and happiness.
        if (!isFilled && i !== 3) {
          tint(255, 65);
        }
        //pomefoire.png stats. 
        image(statImage, slotX - (i === 2 ? 2 : i >= 1 ? 5 : 0),
          slotY + 3 - (i === 0 || i >= 1 ? (i === 2 ? 2 : 5) : 0),
          i === 2 ? 25 : i === 0 || i === 1 ? 31 : 28,
          i === 2 ? 26 : i === 1 ? 32 : i === 0 ? 31 : 28);

        pop();
      }
    }

    // Keep each label beside its icons in the left-side stats panel.
    if (i < labels.length) {
      fill(255);
      textStyle(BOLD);
      textSize(9);
      textAlign(LEFT, CENTER);
      text(labels[i] + " " + round(value) + "%", x, y - 8);
    }
  }

  // Restore drawing settings.
  noTint();
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
  text("RETURN", width - 95, 48);

  textAlign(LEFT, BASELINE);
  textStyle(NORMAL);
}


// GAME OVER SCREEN
function drawGameOverScreen() {
  if (deadImg) {
    image(deadImg, 0, 0, width, height);
  }

  push();
  rectMode(CENTER);
  noStroke();
  fill(0, 180);
  rect(width / 2, height - 70, 190, 52, 10);
  fill(255);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  textSize(20);
  text("RESTART", width / 2, height - 70);
  pop();
}


function restartGame() {
  energy = 100;
  hunger = 0;
  happiness = 100;
  health = 100;
  cleanliness = 100;
  lives = 5;
  nextLifeLossAt = null;
  isSleeping = false;
  feedingCount = 0;
  isGameOver = false;

  showDormScreen = false;
  showGuestRoomScreen = false;
  showMissionScreen = false;
  showBathScreen = false;
  showCafeteriaScreen = false;

  saveGame();
}


// MAIN DRAW FUNCTION
function draw() {
  if (isGameOver) {
    drawGameOverScreen();
    return;
  }

  // Update statistics once per frame.
  updatePetStats();

  if (isGameOver) {
    drawGameOverScreen();
    return;
  }

  // Save progress periodically so changes survive a page reload.
  if (millis() - lastSaveTime >= 1000) {
    saveGame();
  }

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

  if (settingImg) {
    image(settingImg, width - 268, 12, 60, 60);
  }

  if (showMaintenanceMessage && millis() >= maintenanceMessageUntil) {
    showMaintenanceMessage = false;
  }

  if (showMaintenanceMessage) {
    push();
    noStroke();
    fill(0, 180);
    rect(width - 393, 78, 310, 34, 6);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(13);
    text("this area is currently under maintenance.", width - 238, 95);
    pop();
  }

  if (showShopMessage && millis() >= shopMessageUntil) {
    showShopMessage = false;
  }

  if (showShopMessage) {
    push();
    noStroke();
    fill(0, 180);
    rect(width - 560, 550, 310, 34, 6);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(13);
    text("the shop is currently getting updated, my apologies", width - 405, 567);
    pop();
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

  // Draw statistics on the home screen.
  drawCountdownBars();

  if (klapImg) {
    image(klapImg, width - 200, 12, 60, 60);
  }

  if (shopImg) {
    image(shopImg, width - 251, height - 152, 105, 105);
  }
}

// DATA OPSLAG
let lastSaveTime = 0;

function saveGame() {
  let gameData = {
    energy: energy,
    hunger: hunger,
    happiness: happiness,
    health: health,
    cleanliness: cleanliness,
    lives: lives,
    isSleeping: isSleeping,
    feedingCount: feedingCount,
    savedAt: Date.now()
  };

  try {
    localStorage.setItem("grimTamagotchi", JSON.stringify(gameData));
    lastSaveTime = millis();
  } catch (error) {
    console.warn("Could not save game data:", error);
  }
}

function loadGame() {
  try {
    let savedData = localStorage.getItem("grimTamagotchi");
    if (savedData === null) return;
    //converts the saved data into an object.
    let gameData = JSON.parse(savedData);
    if (!gameData || typeof gameData !== "object" || Array.isArray(gameData)) return;
   //constrain(gameData.energy, 0, 100 = keeps the value a certain specified range. 
    if (Number.isFinite(gameData.energy)) energy = constrain(gameData.energy, 0, 100);
    if (Number.isFinite(gameData.hunger)) hunger = constrain(gameData.hunger, 0, 100);
    if (Number.isFinite(gameData.happiness)) happiness = constrain(gameData.happiness, 0, 100);
    if (Number.isFinite(gameData.health)) health = constrain(gameData.health, 0, 100);
    if (Number.isFinite(gameData.cleanliness)) cleanliness = constrain(gameData.cleanliness, 0, 100);

     //restores Grim's lives/lifes?? 
    if (Number.isFinite(gameData.lives)) lives = constrain(Math.floor(gameData.lives), 0, 5);
    //checks if grims sleeping. 
    if (typeof gameData.isSleeping === "boolean") isSleeping = gameData.isSleeping;
    //restores/ checks the feeding stat. 
    if (Number.isFinite(gameData.feedingCount)) feedingCount = Math.max(0, Math.floor(gameData.feedingCount));
   //checks how much time has passed since the last save. (data-opslag) 
   //Number.isFinite = checks wether the time stamp is a valid number
   //gameData.savedAt <= Date.now = checks wether the saved timestamp is earlier or equal to the current time. 
    if (Number.isFinite(gameData.savedAt) && gameData.savedAt <= Date.now()) {
      applyOfflineTime(min((Date.now() - gameData.savedAt) / 1000, 31536000));
      //gameData.savedAt) / 1000, = calculates how many seconds have passed since the game was saved. 
      //the number 31536000 represents the seconds in 365 days. 
      //the min() function chooses the smaller of the two values. 
      //applyOfflineTime = updates everything while the game is closed. 
      //for example, applyOfflineTime can adjust ur stats even though the game's closed. 
      //null means the assigned variable has no value. 
    }

    isGameOver = hunger >= 100 && energy <= 0 && happiness <= 0 && health <= 0;
    nextLifeLossAt = null;

    //If an error occurs inside the try block, JavaScript executes the code inside catch.
  } catch (error) {
    console.warn("Could not load game data:", error);
  }
}

function applyOfflineTime(seconds) {
  if (seconds <= 0) return;

  if (isSleeping) {
    energy = min(100, energy + seconds * 8);
    health = min(100, health + seconds * 1.5);
  } else {
    energy = max(0, energy - seconds * 2.5);
    happiness = max(0, happiness - seconds * 3);
    cleanliness = max(0, cleanliness - seconds);

    let secondsUntilHungry = max(0, (70 - hunger) / 2.3);
    let timeAtLowHunger = min(seconds, secondsUntilHungry);
    let timeAtHighHunger = max(0, seconds - timeAtLowHunger);
    hunger = min(100, hunger + seconds * 2.3);
    health = max(0, health - timeAtLowHunger * 1.6 - timeAtHighHunger * 0.45);
  }

  lives = health <= 0 ? 0 : ceil(health / 20);
  isGameOver = hunger >= 100 && energy <= 0 && happiness <= 0 && health <= 0;
}

function mousePressed() {
  if (isGameOver) {
    if (mouseX >= width / 2 - 95 && mouseX <= width / 2 + 95 &&
      mouseY >= height - 96 && mouseY <= height - 44) {
      restartGame();
    }
    return;
  }

  // Start looping music after the first user interaction.
  userStartAudio();
  if (backgroundMusic && !backgroundMusic.isPlaying()) {
    backgroundMusic.loop();
  }

  // CAFETERIA ACTIONS
  if (showCafeteriaScreen) {
    // FEED button
    if (mouseX >= 25 && mouseX <= 175 && mouseY >= 97 && mouseY <= 143) {
      hunger = max(0, hunger - 25);
      happiness = min(100, happiness + 5);
      health = min(100, health + 20);
      feedingCount++;
      return;
    }

    // RETURN button
    if (mouseX >= 1040 && mouseY <= 80) {
      showCafeteriaScreen = false;
      return;
    }
  }

  // BATHROOM ACTIONS
  if (showBathScreen) {
    // BATHE button
    if (mouseX >= 25 && mouseX <= 175 && mouseY >= 97 && mouseY <= 143) {
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
      happiness = min(100, happiness + 35);
      energy = min(100, energy - 10);
      health = min(100, health - 10);
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
    if (mouseX >= 1040 && mouseY <= 80) {
      showGuestRoomScreen = false;
      showDormScreen = true;
      return;
    }
  }

  // HOME SCREEN ACTIONS
  else {
    // Shop icon
    if (mouseX >= width - 251 && mouseX <= width - 146 &&
      mouseY >= height - 152 && mouseY <= height - 47) {
      showShopMessage = true;
      shopMessageUntil = millis() + 2500;
      return;
    }

    // Klap icon
    if (mouseX >= width - 200 && mouseX <= width - 140 && mouseY >= 12 && mouseY <= 72) {
      showMaintenanceMessage = true;
      maintenanceMessageUntil = millis() + 1200;
      return;
    }

    // Settings icon
    if (mouseX >= width - 268 && mouseX <= width - 208 && mouseY >= 12 && mouseY <= 72) {
      showMaintenanceMessage = true;
      maintenanceMessageUntil = millis() + 1200;
      return;
    }

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