let image1;

function preload() {
  image1 = loadImage("starscream.jpg");
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(136, 215, 255);
  vragenbalk();
  answers();
  layout();

  if (image1) {
    image(image1, 100, 50, 600, 400);
  }
}

function vragenbalk() {
  val = "rgb(247, 249, 250)";
  fill(val);
  rect(0, 0, width, 50);
  fill(0);
  textSize(20);
  text("Vraag 1. in which series did starscream ride a scooter?", 10, 30);
}

function answers() {
  fill(200, 230, 255);
  rect(0, 50, width, height - 50);

  const answerText = [
    "A. Transformers: Prime",
    "B. Transformers: Cyberverse",
    "C. Transformers: Robots in Disguise",
    "D. Transformers: Animated"
  ];

  const cardWidth = (width - 28) / 2;
  const cardHeight = 50;
  const gap = 12;
  const startY = height - 8 - cardHeight * 2 - gap;

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
    rect(answerX, answerY, cardWidth, cardHeight, 6);
    noStroke();
    fill(0);
    textSize(20);
    text(answerText[i], answerX + 12, answerY + 32);
  }

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

function layout() {
  //question and each answer as separate quiz cards.
  noFill();
  stroke(40, 90, 160);
  strokeWeight(3);
  rect(4, 4, width - 8, 42, 8);
  noStroke();
}