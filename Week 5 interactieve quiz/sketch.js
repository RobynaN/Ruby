//colors
//const moet je altijd meteen een waarde geven als je hem aanmaakt. Je kunt hem niet leeg declareren.
//de const declaratie lijkt heel erg op de 'let' variable. 
const soundwaveDark = '#0b1020'; //const is een vaste variabele. 
const soundwavePanel = '#1a2242'; //#1a2242 is een Hex decimale kleurcode
const soundwavePanelAlt = '#2a335c';
const soundwaveBlue = '#5f7cff';
const soundwaveCyan = '#8fe7ff';
const soundwaveSilver = '#dfe6f7';
const soundwaveSteel = '#8a95b6';

let quizImages = [];
let currentQuestion = 0;
let gameState = "start";
let score = 0;
let correctAnswers = 0;
let startButton;
let restartButton;
let imageDecoration = 1;

//quizz questions. 
let questions = [
  {
    question: "In which series did Starscream ride a scooter?",
    answers: ["Transformers: Prime", "Transformers: Cyberverse", "Transformers: Robots in Disguise", "Transformers: Animated"],
    correctAnswer: 0
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
    correctAnswer: 3
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
      "He was a warrior for the Autobots"],
    correctAnswer: 0
  },
  {
    question: "What is Optimus Prime's faction?",
    answers: ["Decepticon", "Autobot", "Predacon", "Maximal"],
    correctAnswer: 1
  },
  {
    question: "Who is the main human protagonist in the first Transformers movie (2007)?",
    answers: ["Sam Witwicky", "Cade Yeager", "William Lennox", "Joshua Joyce"],
    correctAnswer: 0
  },
  {
    question: "What type of vehicle does Bumblebee transform into in the 2018 movie Bumblebee?",
    answers: ["1977 Chevrolet Camaro", "1967 Volkswagen Beetle", "1987 Ford Mustang", "1970 Dodge Charger"],
    correctAnswer: 1
  }
];
//images.
function preload() {
   imageDecoration = loadImage("sounds2.png")

  let imageFiles = ["rise.jpg", "starscream.jpg", "bumblebee.jpg", "ratchet.jpg", "soundwave.jpg",
    "optimus.jpg", "bumblebee2.jpg", "soundwave2.jpg", "optimus2.jpg", "tfhumans.jpg", "bumblebee3.jpg"];
  for (let i = 0; i < imageFiles.length; i++) {
    quizImages.push(loadImage(imageFiles[i]));
  }
}

function setup() {
  createCanvas(1000, 600);

  startButton = createButton("Start");
  styleButton(startButton);
  startButton.position(width / 2 - 110, 330);
  startButton.style("font-size", "24px");
  startButton.style("background-color", soundwaveSilver);
  startButton.style("color", soundwaveDark);
  startButton.style("border", "2px solid " + soundwaveSteel);
  startButton.mousePressed(startQuiz);
  startButton.hide();
 
  // Als je met de muis over de knop gaat

function styleButton(tostyle){
  tostyle.style("border-radius", "12px"); //12px is dat het in zoveel pixels word afgerond. 
  tostyle.style("cursor", "pointer");
  tostyle.size(220, 60);
  tostyle.mouseOver(() => {
  tostyle.style("background-color", soundwaveBlue);
  tostyle.style("color", soundwaveDark);
});

//=> als dan, bijv (x) => x * 2 betekent neem input x en geef x*2 terug 
tostyle.mouseOut(() => {
  tostyle.style("background-color", soundwaveSilver);
  tostyle.style("color", soundwaveDark);
});
  
}
// Als je met de muis van de knop af gaat


startButton.mousePressed(startQuiz);
startButton.hide();

  restartButton = createButton("Herstart"); 
  styleButton(restartButton);
  restartButton.position(width / 2 - 110, 320);
  restartButton.style("font-size", "24px");
  restartButton.style("background-color", soundwaveSilver);
  restartButton.style("color", soundwaveDark);
  restartButton.style("border", "2px solid " + soundwaveSteel);
  restartButton.mousePressed(restartGame);
  restartButton.hide();

 

}

function startQuiz() {
  gameState = "quiz";
  cursor(ARROW);
  startButton.hide();
  restartButton.hide();
}

//main draw. 
function draw() {
  background(soundwaveDark);
  drawSlideDecoration();

  //startscreen

  if (gameState === "start") {
    startButton.show();
    restartButton.hide();
    drawStartScreen();
    return;
  }

  //endscreen.

  if (currentQuestion >= questions.length) {
    startButton.hide();
    restartButton.show();
    drawEndScreen();
    return; //Als alle vragen zijn beantwoord, laat je het eindscherm zien.
  }

  startButton.hide();
  restartButton.hide();

  // current images
  let currentImage = getCurrentImage(); //koppelt iedere vraag aan een afbeelding.
  if (currentImage) {
    image(currentImage, 250, 50, 400, 400);
    image(currentImage, 180, 50, 600, 400); //Als je nog bezig bent met de quiz,
    // wordt de huidige afbeelding getoond:
  }

  //functions
  vragenbalk();
  answers();
  layout();
  mouseHover();
}

// Click function/mouse hover.
function mouseHover() {
}

//Get current image.
function getCurrentImage() {
  let imageIndex = currentQuestion + 1;
  if (imageIndex >= quizImages.length) imageIndex = 1; //Als de index buiten de afbeeldingen valt,
  // begin je weer bij afbeelding 1.
  return quizImages[imageIndex];
}

//de soundwave die in de corner zit cuz why not?
function drawSlideDecoration() {
  if (!imageDecoration) return;

  push();
  imageMode(CORNER);
  tint(255, 130);
  image(imageDecoration, width - 210, height - 500, 180, 120);
  noTint();
  pop();
}

//Start screen.
function drawStartScreen() { ////tekent het begin scherm. 
  //background image. 
  if (quizImages[0]) {
    image(quizImages[0], 0, 0, width, height); // Fill the entire start screen with the image.
  }

  //background panel.
  fill(11, 16, 32, 180); //the invisible rect part btw. 180 maakt t doorzichtig. 
  rect(220, 120, 560, 320, 20);

  //Text. 
  fill(soundwaveSilver);
  textAlign(CENTER);
  textSize(42);
  text("Transformers Quiz", width / 2, 190);
  textSize(22);
  text("Test je kennis over de Transformer AU's!", width / 2, 250);
  textSize(18);
  text("Klik op Start om te beginnen.", width / 2, 290);

  cursor(ARROW);
  textAlign(LEFT);
}

//End screen. 
function drawEndScreen() {
  //Background image. 
  if (quizImages[0]) {
    image(quizImages[0], 0, 0, width, height);
  }
  //backgroundpanel.
  fill(11, 16, 32, 180);
  rect(220, 120, 560, 320, 20);

  //Text. 
  fill(soundwaveSilver);
  textAlign(CENTER);
  textSize(36);
  text("Quiz afgerond!", width / 2, 190);
  textSize(26);
  text("Je score: " + correctAnswers + " / " + questions.length, width / 2, 245); //score word weergeven.
  textSize(18);
  text("Klik hieronder om opnieuw te beginnen.", width / 2, 285);

  cursor(ARROW);
  textAlign(LEFT);
}

//question bar. 
function vragenbalk() {

  //Top Bar
  fill(soundwavePanel);
  rect(0, 0, width, 72);

  //Question text. 
  fill(soundwaveSilver);
  textSize(16);
  textLeading(18);
  textAlign(LEFT, TOP);
  if (currentQuestion < questions.length) { //bepaalt welke vraag je op dat moment laat zien.
    text("Vraag " + (currentQuestion + 1) + " van " + questions.length + ": "
      + questions[currentQuestion].question,
      10, 12, width - 20, 52);
  } else {
    text("Quiz klaar! Bedankt voor het spelen.", 10, 12, width - 20, 52);
  }
  textAlign(LEFT, BASELINE);
}

//Answers. 
function answers() {
  if (currentQuestion >= questions.length) {
    cursor(ARROW);
    return;
  }

  let answerText = questions[currentQuestion].answers;

  textAlign(LEFT, TOP);
  textLeading(18);

  //Draw every answer card. 
  for (let i = 0; i < answerText.length; i++) {
    let card = answerBounds(i); //bepaalt waar het kaartje op het scherm moet komen.
    let hovering = isInside(mouseX, mouseY, card);

    //Card background. 
    fill(hovering ? soundwaveBlue : soundwaveSilver);
    stroke(hovering ? soundwaveCyan : soundwaveSteel);
    strokeWeight(1.5);
    rect(card.x, card.y, card.width, card.height, 10);
    noStroke();
    fill(hovering ? soundwaveSilver : soundwaveDark);
    textSize(16);
    text(answerText[i], card.x + 10, card.y + 10, card.width - 18, card.height - 18);
  }

  textAlign(LEFT, BASELINE);

  //check if your mouse is above an answer 
  let hoveringAnswer = false; //bijv, "de muis hangt niet boven het antwoord."
  for (let i = 0; i < answerText.length; i++) {
    if (isInside(mouseX, mouseY, answerBounds(i))) hoveringAnswer = true; //controleert het antwoord. 
  }

  //change cursor. 
  //cursor() om te bepalen welk symbool je muisaanwijzer laat zien.
  cursor(hoveringAnswer ? HAND : ARROW); //pijl of handje?? 
}

//mousepressed
function mousePressed() {
  //Start Screen. 
  if (gameState === "start") { //gaat het spel van het startscherm naar de quiz.
    if (isInside(mouseX, mouseY, startButtonBounds())) { //Heeft de speler op antwoord 1, 2, 3 of 4 geklikt?"
      gameState = "quiz";
      cursor(ARROW);
    }
    return;
  }

  //End Screen. 
  if (currentQuestion >= questions.length) {
    if (isInside(mouseX, mouseY, endButtonBounds())) {
      restartGame(); //wordt het spel opnieuw gestart.
    }
    return;
  }

  //Answer buttons. 
  for (let i = 0; i < questions[currentQuestion].answers.length; i++) { //antwoorden gaan een voor 1
    if (isInside(mouseX, mouseY, answerBounds(i))) { //bevindt de muis zich boven het vakje?
      handleAnswerSelection(i); //bijv, "speler heeft antwoord 2 gekozen."
      break; //stopt met de for loop. 
    }
  }
}

//Answer logic. 
function handleAnswerSelection(selectedIndex) {
  const current = questions[currentQuestion];

  //Check if your answer is correct. 
  if (selectedIndex === current.correctAnswer) {//Als het antwoord goed is, gaat de score één omhoog
    correctAnswers++;//ga je automatisch naar de volgende vraag.
  }
  //Go to the next question.
  currentQuestion++;
}
//Restart quiz. 
//hier wordt alles terug naar de beginwaarden gezet.:
function restartGame() {
  currentQuestion = 0;
  correctAnswers = 0;
  gameState = "quiz";
  cursor(ARROW);
}

//Quiz layout. 
function layout() {
  //question and each answer as separate quiz cards.
  noFill();
  stroke(soundwaveCyan);
  strokeWeight(2.5);
  rect(4, 4, width - 8, 42, 8);
  noStroke();
}
//start button position. 
function startButtonBounds() {
  return { x: width / 2 - 110, y: 330, width: 220, height: 60 };
}
//end button position.  
function endButtonBounds() {
  return { x: width / 2 - 110, y: 320, width: 220, height: 60 }; // waar staat de knop/hoe groot is die.
}
// Answer cards position. 
function answerBounds(index) {
  let cardWidth = (width - 28) / 2;
  let cardHeight = 70;
  let gap = 10;
  let column = index % 2; //bepaalt of een antwoord links of rechts staat.
  let row = Math.floor(index / 2); //bepaalt of op welke rij het antwoord staat.
  return { //geeft alle info terug naar answerBounds. (waar ik het neergezet heb.)
    x: 8 + column * (cardWidth + gap), //bepaalt de horizontale positiie.
    y: height - 8 - cardHeight * 2 - gap + row * (cardHeight + gap), //bepaalt de verticale positie. 
    width: cardWidth, //de breedte. 
    height: cardHeight //hoe hoog. 
  };
}
//checks if its inside a rectangle
//is it inside the question balk.
function isInside(x, y, bounds) {
  return x >= bounds.x && x <= bounds.x + bounds.width &&
    y >= bounds.y && y <= bounds.y + bounds.height; //checkt of het binnen een bepaald,
  // rechthoekig gebied vallen.
  // => schrijf je hetzelfde zoals: const optellen = (a, b) => { return a + b; }
  // dus bijv (a,b => iets) betekent een functie die a en b krijggt en iets teruggeeft
  //Dus => kun je in het begin gewoon zien als "hier komt de functie die uitgevoerd moet worden".
  //oh en <= betekent kleiner dan of gelijk aan.

  
}