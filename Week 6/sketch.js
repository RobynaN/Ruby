let homescreen;
let grimGif;

function preload() {
  homescreen = loadImage('start5.png');
  grimGif = loadImage('Grim.gif');
}

function setup() {
  createCanvas(1200, 600);
}

function draw() {
  if (homescreen) {
    image(homescreen, 0, 0, width, height);
  }

  if (grimGif) {
    image(grimGif, 200,120, 400, 500,);
  }
}
