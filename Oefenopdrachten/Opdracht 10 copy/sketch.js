let colors = ["red", "purple", "blue", "green", "yellow", "orange", "pink"];
let achtergrondkleur = 220;
let knop = [];
let afbeeldingen = [];
let bestanden = ["elephant", "giraffe", "hippo", "monkey", "panda",
  "parrot", "penguin", "pig", "rabbit", "snake"];
let dierKnoppen = [];
let actieveAfbeelding = -1;

function preload() {
  for (let i = 0; i < bestanden.length; i++) {
    afbeeldingen[i] = loadImage(bestanden[i] + ".png");
  }
}

function setup() {
  createCanvas(800, 450);
// buttons.
  for (let i = 0; i < colors.length; i++) { //loopt door alle kleuren heen. 
    let kleurKnop = createButton(colors[i]); //wordt de knop gemaakt. 
    knop.push(kleurKnop); //button wordt opgeslagen. 
    kleurKnop.style("background-color", colors[i]); //kleur word aangegeven. 
    if (colors[i] === "red") { 
      kleurKnop.position(20, 40); //knop positie. 
    } else {
      kleurKnop.position(i * 100, 40); //paars en blauw, etc positie. 
    }
    kleurKnop.mousePressed(() => {  //voert de code uit als je erop klikt. 
      achtergrondkleur = colors[i]; //kleur waar ik op druk is de achtergrond. 
      for (let j = 0; j < knop.length; j++) { //alle knoppen opnieuw langs gaan. 
        if (colors[j] === achtergrondkleur) { //is deze kleur hetzelfde als die knop. 
          knop[j].hide(); //knop word verborgen als je erop klikt. 
        } else {
          knop[j].show(); //andere buttons blijven staan. 
        }
      }
    });
  }

  // Dierknoppen
  for (let i = 0; i < bestanden.length; i++) { // Voor elk dier een knop maken
    let dierKnop = createButton(bestanden[i]);
    dierKnop.position(20, 100 + i * 35); //positie van de knoppen. 
    dierKnop.mousePressed(() => { //bij klikken word/worden? de afbeeldingen veranderd. 
      actieveAfbeelding = i; //checkt welke afbeelding actief is. 
    });
    dierKnoppen.push(dierKnop);
  }
}

function draw() {
  background(achtergrondkleur);

  if (actieveAfbeelding !== -1 && afbeeldingen[actieveAfbeelding]) { //is de afbeelding gekozen?
    image(afbeeldingen[actieveAfbeelding], 250, 150, 230, 220); //met image teken je de afbeelding op het 
    //bord.
  }

  for (let i = 0; i < dierKnoppen.length; i++) { //loopt door alle knoppen heen. 
    if (i === actieveAfbeelding) { //bij welke afbeelding hoort de knop? word hiero gecheckt. 
      dierKnoppen[i].hide(); //hoort de knop bij de afbeelding dan verberg je de knop
    } else {
      dierKnoppen[i].show(); //hoort die er niet bij? dan laat ze in zicht. 
    }
  }
}
