let circles = [];
let punten = 0;

function setup() {
  createCanvas(800, 600);
  for (let i = 0; i < 100; i++) {
    let circle = {
      x: random(width),
      y: random(height),
      size: random(40, 50),
      speedX: random(1, 3),
      speedY: random(1, 3),
      color: random(['blue', 'red', 'purple', 'green', 'yellow', 'orange'])
    };
    circles.push(circle);
  }
}

//als ik op de muis klik dan verdwijnen de cirkels en krijg ik punten.
function mousePressed() {
  for (let i = circles.length - 1; i >= 0; i--) {
    let circle = circles[i];
    let afstandToMuis = dist(mouseX, mouseY, circle.x, circle.y);

    if (afstandToMuis <= circle.size / 2) {
      punten += 1;
      circles.splice(i, 1);
    }
  }

  circles.push({
    x: mouseX,
    y: mouseY,
    size: random(20, 50),
    speedX: random(1, 3),
    speedY: random(1, 3),
    color: random(['blue', 'red', 'purple', 'green', 'yellow', 'orange'])
  });
}




function draw() {
  background(220);
  fill(0);
  textSize(20);
  
  text("Score:" + punten, 10, 25);

  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];

    fill(circle.color);
    ellipse(circle.x, circle.y, circle.size);

    circle.x += circle.speedX;
    circle.y += circle.speedY;

//hier stuiteren de cirkels tegen de randen van het canvas.
// bij de x-as, als de cirkel de rand raakt, dan verandert de snelheid van richting.
// bij de y-as, als de cirkel de rand raakt, dan verandert de snelheid van richting. 
//- beter gezegd, de snelheid wordt negatief.
//circle.x - circle.size / 2 < 0 = als de cirkel de linkerkant raakt. etc
    if (circle.x - circle.size / 2 < 0 || circle.x + circle.size / 2 > width) {
      circle.speedX *= -1;
    }

    if (circle.y - circle.size / 2 < 0 || circle.y + circle.size / 2 > height) {
      circle.speedY *= -1;
    }
  }
}
