let quizImages = [];
let currentQuestion = 0;
let gameState = "start";
let score = 0;

let questions = [
  {
    question: "In which series did Starscream ride a scooter?",
    answers: ["Transformers: Prime", "Transformers: Cyberverse", "Transformers: Robots in Disguise", "Transformers: Animated"],
    correctAnswer: 1
  },
  {
    question: "In which universe is Bumblebee capable of reattaching his body parts?",
    answers: ["Transformers Animated", "Bayverse", "Knightverse", "None of the above"],
    correctAnswer: 2
  },
  {
    question: "Which Autobot transforms into a red and blue emergency vehicle and serves as the team's medic in G1?",
    answers: ["Ironhide", "Bumblebee", "Ratchet", "Jazz"],
    correctAnswer: 3
  },
  {
    question: "What is Soundwave's position in the Decepticons? ",
    answers: ["3rd in command", "Spymaster", "Communications Officer", "All of the above"],
    correctAnswer: 4
  },
  {
    question: "What was Optimus Prime's name before he became a Prime?",
    answers: ["B-127", "Orion Pax", "Vos", "D-16"],
    correctAnswer: 2
  },
  {
    question: "What did Bumblebee lose at the beginning of the series Transformers Cyberverse?",
    answers: ["His voice", "His wings", "his memory", "his T-cog"],
    correctAnswer: 3
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
    correctAnswer: 2
  },
  {
    question: "Who is the main human protagonist in the first Transformers movie (2007)?",
    answers: ["Sam Witwicky", "Cade Yeager", "William Lennox", "Joshua Joyce"],
    correctAnswer: 1
  },
  {
    question: "What type of vehicle does Bumblebee transform into in the 2018 movie Bumblebee?",
    answers: ["1977 Chevrolet Camaro", "1967 Volkswagen Beetle", "1987 Ford Mustang", "1970 Dodge Charger"],
    correctAnswer: 2
  }
];

function preload() {
  let imageFiles = ["starscream.jpg", "bumblebee.jpg", "ratchet.jpg", "soundwave.jpg", 
  "optimus.jpg", "bumblebee2.jpg"];
  for (let i = 0; i < imageFiles.length; i++) {
    quizImages.push(loadImage(imageFiles[i]));
  }
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

  if (currentQuestion >= questions.length) {
    drawEndScreen();
    return;
  }

  let currentImage = getCurrentImage();
  if (currentImage) {
    image(currentImage, 100, 50, 600, 400);
  }

  vragenbalk();
  answers();
  layout();
  mouseHover();
}

function mouseHover() {
  // Hover feedback is handled by the button and answer cards.
}
//image volgorde.
function getCurrentImage() {
  let imageIndex = currentQuestion;
  if (imageIndex >= quizImages.length) imageIndex = 0;
  return quizImages[imageIndex];
}

function drawStartScreen() {
  if (quizImages[0]) {
    image(quizImages[0], 100, 50, 600, 400);
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

  let button = startButtonBounds();
  let hovering = isInside(mouseX, mouseY, button);

  fill(hovering ? 210 : 255);
  stroke(40, 90, 160);
  strokeWeight(2);
  rect(button.x, button.y, button.width, button.height, 12);
  noStroke();
  fill(0);
  textSize(26);
  text("Start", width / 2, button.y + 38);
  cursor(hovering ? HAND : ARROW);

  textAlign(LEFT);
}

function drawEndScreen() {
  fill(255, 255, 255, 220);
  rect(120, 120, 560, 320, 20);

  fill(0);
  textAlign(CENTER);
  textSize(36);
  text("Quiz afgerond!", width / 2, 190);
  textSize(26);
  text(`Je score: ${score} / ${questions.length}`, width / 2, 245);
  textSize(18);
  text("Klik hieronder om opnieuw te beginnen.", width / 2, 285);

  let button = endButtonBounds();
  let hovering = isInside(mouseX, mouseY, button);

  fill(hovering ? 210 : 255);
  stroke(40, 90, 160);
  strokeWeight(2);
  rect(button.x, button.y, button.width, button.height, 12);
  noStroke();
  fill(0);
  textSize(24);
  text("Herstart", width / 2, button.y + 36);
  cursor(hovering ? HAND : ARROW);

  textAlign(LEFT);
}

function vragenbalk() {
  fill("rgb(247, 249, 250)");
  rect(0, 0, width, 72);
  fill(0);
  textSize(16);
  textLeading(18);
  textAlign(LEFT, TOP);
  if (currentQuestion < questions.length) {
    text(`Vraag ${currentQuestion + 1} van ${questions.length}: ${questions[currentQuestion].question}`, 
    10, 12, width - 20, 52);
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

  let answerText = questions[currentQuestion].answers;

  textAlign(LEFT, TOP);
  textLeading(18);

  for (let i = 0; i < answerText.length; i++) {
    let card = answerBounds(i);
    let hovering = isInside(mouseX, mouseY, card);

    fill(hovering ? 210 : 255);
    stroke(190);
    strokeWeight(1);
    rect(card.x, card.y, card.width, card.height, 10);
    noStroke();
    fill(0);
    textSize(17);
    text(`${String.fromCharCode(65 + i)}. ${answerText[i]}`, card.x + 10, card.y + 10, card.width - 18, card.height - 18);
  }

  textAlign(LEFT, BASELINE);

  let hoveringAnswer = false;
  for (let i = 0; i < answerText.length; i++) {
    if (isInside(mouseX, mouseY, answerBounds(i))) hoveringAnswer = true;
  }
  cursor(hoveringAnswer ? HAND : ARROW);
}

function mousePressed() {
  if (gameState === "start") {
    if (isInside(mouseX, mouseY, startButtonBounds())) {
      gameState = "quiz";
      cursor(ARROW);
    }
    return;
  }

  if (currentQuestion >= questions.length) {
    if (isInside(mouseX, mouseY, endButtonBounds())) {
      restartGame();
    }
    return;
  }

  for (let i = 0; i < questions[currentQuestion].answers.length; i++) {
    if (isInside(mouseX, mouseY, answerBounds(i))) {
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

function restartGame() {
  currentQuestion = 0;
  score = 0;
  gameState = "quiz";
  cursor(ARROW);
}

function layout() {
  //question and each answer as separate quiz cards.
  noFill();
  stroke(40, 90, 160);
  strokeWeight(3);
  rect(4, 4, width - 8, 42, 8);
  noStroke();
}

function startButtonBounds() {
  return { x: width / 2 - 110, y: 330, width: 220, height: 60 };
}

function endButtonBounds() {
  return { x: width / 2 - 110, y: 320, width: 220, height: 60 };
}

function answerBounds(index) {
  let cardWidth = (width - 28) / 2;
  let cardHeight = 70;
  let gap = 10;
  let column = index % 2;
  let row = Math.floor(index / 2);
  return {
    x: 8 + column * (cardWidth + gap),
    y: height - 8 - cardHeight * 2 - gap + row * (cardHeight + gap),
    width: cardWidth,
    height: cardHeight
  };
}

function isInside(x, y, bounds) {
  return x >= bounds.x && x <= bounds.x + bounds.width &&
    y >= bounds.y && y <= bounds.y + bounds.height;
}