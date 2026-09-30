let randomColors = [];

function setup() {
  createCanvas(380, 350);
  for (let i = 0; i < 5; i++) {
    randomColors.push(color(random(255), random(255), random(255)));
    //for → 5 keer herhalen
    //random(255) → willekeurige kleurwaarde
    // color(...) → maakt een kleur
    // push() → stopt de kleur in randomColors
  }
}

function draw() {
  background(220);
  frameRate(1); // laat de animatie langzamer gaan
  fill(0)
  let colors = ["red", "green", "blue", "purple", "yellow"];

  text("1.", 20, 15);
  text("2.", 20, 100);
  text("3.", 20, 190);
  text("4.", 20, 250);
  text("5.", 120, 15);
  text("6.", 120, 100);
  text("7.", 120, 190);
  text("8.", 120, 280);
  text("9.", 200, 15);

  //1. 
  //alle kleuren van de array's worden onder elkaar gezet. 
  //i < colors.lenght = ga door zolang i kleiner is dan het aantal kleuren.
  for (let i = 0; i < colors.length; i++) {
    fill(colors[i]);
    text(colors[i], 20, 30 + i * 10);
  }

  //2.
  //colors.push(colors.shift()); = het pakt de eerste kleur uit de array en zet die helemaal achteraan. 
  //for (let i = 0; i < colors.length; i++) = het loopt door alle kleuren van de array.
  // fill(colors[i]); = welke kleur er word neergezet. 
  colors.push(colors.shift());
  for (let i = 0; i < colors.length; i++) {
    fill(colors[i]);
    text(colors[i], 20, 125 + i * 10);
  }

  //3.
  //colors.splice(1, 2); = 1 -> begin bij 1 en 2 -> verwijder 2 element kleuren. 
  //215 + i * 10 zorgt ervoor dat ze 10 pixels onder elkaar komen te staan.
  colors.splice(1, 2);
  for (let i = 0; i < colors.length; i++) {
    fill(colors[i]);
    text(colors[i], 20, 215 + i * 10);
  }

  //4.
  //for (let i = 0; i < numbers.length; i++) = De lus gaat alle getallen één voor één langs.
  //if (numbers[i] < 300) = als het getal kleiner is dan 300, doe dan wat hieronder staat.
  //y += 10; = Na ieder getal dat wordt weergegeven, gaat de volgende tekst 10 pixels naar beneden.
  fill(0);
  let numbers = [400, 240, 10, 490, 30, 60, 244, 500, 301, 300];
  let y = 265;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 300) {
      text(numbers[i], 20, y);
      y += 10;
    }
  }
  

  //5.
  //let total 0 = een variable waarbij total bij 0 begint.
  //for (let i = 0; i < firstArray.length; i++) {total += firstArray[i]; =
  // Deze loopt door alle getallen van de firstArray.
  // total += firstArray[i]; = Tel het getal op positie i op bij total.
  let firstArray = [3, 55, 93, 20, 102, 6];
  let secondArray = [14, 22, 80, 5];
  let total = 0;

  for (let i = 0; i < firstArray.length; i++) {
    total += firstArray[i];
  }
  for (let i = 0; i < secondArray.length; i++) {
    total += secondArray[i];
  }
   fill(0);
  text(total, 120, 40);

  //6.
  //let letterCount = 0; = Hij begint bij 0.
  //if (word[i].toLowerCase() === "e") { = Als de letter op plek i gelijk is aan e, doe dan iets.
  //"O".toLowerCase() = zorgt ervoor dat zowel een hoofdletter E als een kleine e gevonden kan worden.
  let word = "Overheidsfinancieringstekort.";
  let letterCount = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i].toLowerCase() === "e") {
      letterCount++;
    }
  }
  text(letterCount, 120, 115);

  //7
  //for (let i = 0; i < sortedColors.length; i++) { = de lus gaat door de kleuren heen. 
  let sortedColors = ["red", "green", "blue", "purple", "yellow"];
  sortedColors.sort();
  for (let i = 0; i < sortedColors.length; i++) {
    fill(sortedColors[i]);
    text(sortedColors[i], 120, 205 + i * 10);
  }

  //8
  for (let i = 0; i < 5; i++) {
    fill(randomColors[i]);
    rect(120 + i * 25, 295, 20, 20);
  }

  //9
  fill(0)
  let randomNumbers = [];
  let randomTotal = 0;
  for (let i = 0; i < 12; i++) {
    randomNumbers.push(round(random(100)));
  }
  for (let i = 0; i < randomNumbers.length; i++) {
    text(randomNumbers[i], 200, 30 + i * 15);
    randomTotal += randomNumbers[i];
  }
  text("Totaal: " + randomTotal, 200, 225);
  text("Gemiddelde: " + (randomTotal / randomNumbers.length), 200, 245);
}