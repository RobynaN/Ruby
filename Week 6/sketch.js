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

let grimShockedImg;
let grimMadImg;
let grimDisImg;
let grimHappyImg;
let grimCheerImg;

let energyImg;
let food1Img;
let pomefioreImg;
let lifeBannerImg;
let lifeEmptyImg;

let lives = 5;
let nextLifeLossAt = null;

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
  bannerImg = loadImage("banner.jpeg");

  grimShockedImg = loadImage("grim shocked.png");
  grimMadImg = loadImage("grim mad.png");
  grimDisImg = loadImage("grim dis.png");
  grimHappyImg = loadImage("grim happy.png");
  grimCheerImg = loadImage("grim cheer.png");

  energyImg = loadImage("energy.png");
  lifeBannerImg = loadImage("health.png");

  food1Img = loadImage("hunger.png");

  // Health image used for happiness
  pomefioreImg = loadImage("bathe.png");
}


function setup() {
  createCanvas(1200, 600);
  imageMode(CORNER);
  textFont("Arial");
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
    energy = max(0, energy - elapsed * 0.3);
    hunger = min(100, hunger + elapsed * 0.25);
    happiness = max(0, happiness - elapsed * 0.15);

    // Hunger can damage health.
    let healthLoss = hunger > 70 ? 0.16 : 0.03;
    health = max(0, health - elapsed * healthLoss);
  }

  // Keep all statistics between 0 and 100.
  //constrain betekent het binnen bepaalde grenzen houden van een waarde
  energy = constrain(energy, 0, 100);
  hunger = constrain(hunger, 0, 100);
  happiness = constrain(happiness, 0, 100);
  health = constrain(health, 0, 100);

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

  else if(energy > 60) {
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
    image(petImage, x, y, w, h);
  }
}


// CARE BUTTON
function drawCareButton(label) {
  if (bannerImg) {
    image(bannerImg, 25, 97, 150, 46);
  }

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
  // Icon for each statistic.
  let icons = [food1Img, energyImg, pomefioreImg, lifeBannerImg];

  let labels = [ "HUNGER", "ENERGY", "HAPPINESS", "HEALTH"];

  // Hunger is reversed:
  // less hunger means more filled slots.
  let values = [100 - hunger,energy,happiness,health];

  let startX = 12;
  let startY = height - 18;
  let barWidth = 190;
  let barHeight = 22;
  let spacing = 30;

  for (let i = 0; i < values.length; i++) {
    let x = startX;
    let y = startY - (values.length - 1 - i) * spacing;

    let value = constrain(values[i], 0, 100);

    // Each stat has five slots.
    // Each slot represents 20%.
    let imagesRemaining = ceil(value / 20);

    // Draw the icon on the left.
    if (icons[i] && i !== 1 && i !== 0 && i !== 2) {
      image(icons[i], x, y - 19, 26, 26);
    }

    // Draw five image slots.
    for (let j = 0; j < 5; j++) {
      let slotX = x + 39 + j * 35;
      let slotY = y - 16;
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

      // Health loses one 5de.png icon for each 20% lost.
      if (i === 3 && !isFilled) {
        continue;
      }

      if (statImage) {
        push();

        // Fade empty slots for hunger, energy,
        // and happiness.
        if (!isFilled && i !== 3) {
          tint(255, 65);
        }
         //pomefoire.png stats. 
        image(statImage, slotX - (i === 2 ? 2 : i >= 1 ? 5 : 0),
          slotY - (i === 0 || i >= 1 ? (i === 2 ? 2 : 5) : 0),
          i === 2 ? 25 : i === 0 || i === 1 ? 31 : 28,
          i === 2 ? 26 : i === 1 ? 32 : i === 0 ? 31 : 28);

        pop();
      }
    }

    // Draw labels only for hunger and energy.
    if (i < 2) {
      fill(255);
      textStyle(BOLD);
      textSize(11);
      textAlign(LEFT, CENTER);

      text(
        labels[i] + " " + round(value) + "%", x + 42, y - 7);
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
  text("RETURN", 1180, 48);

  textAlign(LEFT, BASELINE);
  textStyle(NORMAL);
}


// MAIN DRAW FUNCTION
function draw() {
  // Update statistics once per frame.
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

  fill(0,180)
  rect(20, 460, 220, 130,10);

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
}

function mousePressed() {
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