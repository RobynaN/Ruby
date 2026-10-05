let image1;
let image2;
let image3;
let image4;
let image5;
let image6;
let currentQuestion = 0;
let gameState = "start";
let score = 0;

const questions = [
  {
    question: "In which series did Starscream ride a scooter?",
    answers: ["Transformers: Prime", "Transformers: Cyberverse", "Transformers: Robots in Disguise", "Transformers: Animated"],
    correctAnswer: 1
  },
  {
    question: "In which universe is Bumblebee capable of reattaching his body parts?",
    answers: ["Transformers Animated", "Bayverse", "Knightverse", "None of the above"],
    correctAnswer: 1
  },
  {
    question: "Which Autobot transforms into a red and blue emergency vehicle and serves as the team's medic in G1?",
    answers: ["Ironhide", "Bumblebee", "Ratchet", "Jazz"],
    correctAnswer: 2
  },
  {
    question: "What is Soundwave's position in the Decepticons? ",
    answers: ["3rd in command", "Spymaster", "Communications Officer", "All of the above"],
    correctAnswer: 1
  },
  {
    question: "What was Optimus Prime's name before he became a Prime?",
    answers: ["B-127", "Orion Pax", "Vos", "D-16"],
    correctAnswer: 1
  },
  {
    question: "What did Bumblebee lose at the beginning of the series Transformers Cyberverse?",
    answers: ["His voice", "His wings", "his memory", "his T-cog"],
    correctAnswer: 2
  },
  {
    question: "What did Soundwave do before he became a gladiator in Transformers Prime?",
    answers: [
      "He was a regular patron at Maccadam's Old Oil House",
      "Served as a member of the Cybertronian High Council and the Senate",
      "He was a spy for the Decepticons",
      "He was a warrior for the Autobots"
    ],
    correctAnswer: 1
  },
  {
    question: "What is Optimus Prime's faction?",
    answers: ["Decepticon", "Autobot", "Predacon", "Maximal"],
    correctAnswer: 1
  },
  {
    question: "Who is the main human protagonist in the first Transformers movie (2007)?",
    answers: ["Sam Witwicky", "Cade Yeager", "William Lennox", "Joshua Joyce"],
    correctAnswer: 1
  },
  {
    question: "What type of vehicle does Bumblebee transform into in the 2018 movie Bumblebee?",
    answers: ["1977 Chevrolet Camaro", "1967 Volkswagen Beetle", "1987 Ford Mustang", "1970 Dodge Charger"],
    correctAnswer: 3
  }
];

function preload() {
  image1 = loadImage("starscream.jpg");
  image2 = loadImage("bumblebee.jpg");
  image3 = loadImage("ratchet.jpg");
  image4 = loadImage("soundwave.jpg");
  image5 = loadImage("optimus.jpg");
  image6 = loadImage("bumblebee2.jpg");
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(136, 215, 255);

  if (gameState === "start") {
    drawStartScreen();
    return;
  }

  const currentImage = getCurrentImage();
  if (currentImage) {
    image(currentImage, 100, 50, 600, 400);
  }

  vragenbalk();
  answers();
  layout();
  mouseHover();
}

function mouseHover() {
  circle(mouseX, mouseY, 50);
}
//image volgorde.
function getCurrentImage() {
  if (currentQuestion === 1 && image2) return image2;
  if (currentQuestion === 2 && image3) return image3;
  if (currentQuestion === 3 && image4) return image4;
  if (currentQuestion === 4 && image5) return image5;
  if (currentQuestion === 5 && image6) return image6;
  return image1;
}

function drawStartScreen() {
  if (image1) {
    image(image1, 100, 50, 600, 400);
  }

  fill(255, 255, 255, 220);
  rect(120, 120, 560, 320, 20);

  fill(0);
  textAlign(CENTER);
  textSize(42);
  text("Transformers Quiz", width / 2, 190);
  textSize(22);
  text("Test je kennis over de Transformers-universum!", width / 2, 250);
  textSize(18);
  text("Klik op Start om te beginnen.", width / 2, 290);

  const buttonX = width / 2 - 110;
  const buttonY = 330;
  const buttonW = 220;
  const buttonH = 60;
  const hovering = mouseX >= buttonX && mouseX <= buttonX + buttonW &&
    mouseY >= buttonY && mouseY <= buttonY + buttonH;

  fill(hovering ? 210 : 255);
  stroke(40, 90, 160);
  strokeWeight(2);
  rect(buttonX, buttonY, buttonW, buttonH, 12);
  noStroke();
  fill(0);
  textSize(26);
  text("Start", width / 2, 370);
  cursor(hovering ? HAND : ARROW);

  textAlign(LEFT);
}

function vragenbalk() {
  const val = "rgb(247, 249, 250)";
  fill(val);
  rect(0, 0, width, 72);
  fill(0);
  textSize(16);
  textLeading(18);
  textAlign(LEFT, TOP);
  if (currentQuestion < questions.length) {
    text(`Vraag ${currentQuestion + 1} van ${questions.length}: ${questions[currentQuestion].question}`, 10, 12, width - 20, 52);
  } else {
    text("Quiz klaar! Bedankt voor het spelen.", 10, 12, width - 20, 52);
  }
  textAlign(LEFT, BASELINE);
}

function answers() {
  if (currentQuestion >= questions.length) {
    cursor(ARROW);
    return;
  }

  const answerText = questions[currentQuestion].answers;

  const cardWidth = (width - 28) / 2;
  const cardHeight = 70;
  const gap = 10;
  const startY = height - 8 - cardHeight * 2 - gap;

  textAlign(LEFT, TOP);
  textLeading(18);

  for (let i = 0; i < answerText.length; i++) {
    const column = i % 2;
    const row = Math.floor(i / 2);
    const answerX = 8 + column * (cardWidth + gap);
    const answerY = startY + row * (cardHeight + gap);
    const hovering = mouseX >= answerX && mouseX <= answerX + cardWidth &&
      mouseY >= answerY && mouseY <= answerY + cardHeight;

    fill(hovering ? 210 : 255);
    stroke(190);
    strokeWeight(1);
    rect(answerX, answerY, cardWidth, cardHeight, 10);
    noStroke();
    fill(0);
    textSize(17);
    text(`${String.fromCharCode(65 + i)}. ${answerText[i]}`, answerX + 10, answerY + 10, cardWidth - 18, cardHeight - 18);
  }

  textAlign(LEFT, BASELINE);

  const hoveringAnswer = answerText.some((_, i) => {
    const column = i % 2;
    const row = Math.floor(i / 2);
    const answerX = 8 + column * (cardWidth + gap);
    const answerY = startY + row * (cardHeight + gap);
    return mouseX >= answerX && mouseX <= answerX + cardWidth &&
      mouseY >= answerY && mouseY <= answerY + cardHeight;
  });
  cursor(hoveringAnswer ? HAND : ARROW);
}

function mousePressed() {
  if (gameState === "start") {
    const buttonX = width / 2 - 110;
    const buttonY = 330;
    const buttonW = 220;
    const buttonH = 60;

    if (mouseX >= buttonX && mouseX <= buttonX + buttonW &&
        mouseY >= buttonY && mouseY <= buttonY + buttonH) {
      gameState = "quiz";
      cursor(ARROW);
    }
    return;
  }

  if (currentQuestion >= questions.length) return;

  const cardWidth = (width - 28) / 2;
  const cardHeight = 78;
  const gap = 12;
  const startY = height - 8 - cardHeight * 2 - gap;

  for (let i = 0; i < 4; i++) {
    const column = i % 2;
    const row = Math.floor(i / 2);
    const answerX = 8 + column * (cardWidth + gap);
    const answerY = startY + row * (cardHeight + gap);

    if (mouseX >= answerX && mouseX <= answerX + cardWidth &&
        mouseY >= answerY && mouseY <= answerY + cardHeight) {
      handleAnswerSelection(i);
      break;
    }
  }
}

function handleAnswerSelection(selectedIndex) {
  const current = questions[currentQuestion];
  if (selectedIndex === current.correctAnswer) {
    score++;
  }
  currentQuestion++;
}

function layout() {
  //question and each answer as separate quiz cards.
  noFill();
  stroke(40, 90, 160);
  strokeWeight(3);
  rect(4, 4, width - 8, 42, 8);
  noStroke();
}