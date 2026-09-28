function setup() {
  createCanvas(380, 350);
}

function draw() {
  background(220);
  let colors = ["red", "green", "blue", "purple", "yellow"];

  text("1.", 20, 15);
  text("2.", 20, 100);
  text("3.", 20, 190);
  text("4.", 20, 250);
  text("5.", 120, 15);
  text("6.", 120, 100);
  text("7.", 120, 190);
  text("8.", 120, 280);
  text("9.", 240, 15);

  //1. 
  for (let i = 0; i < colors.length; i++) {
    fill(colors[i]);
    text(colors[i], 20,30 + i * 10);
  }

  //2.
  colors.push(colors.shift());
  for (let i = 0; i < colors.length; i++) {
    fill(colors[i]);
    text(colors[i], 20, 125 + i * 10);
  }

  //3.
  colors.splice(1, 2);
  for (let i = 0; i < colors.length; i++) {
    fill(colors[i]);
    text(colors[i], 20, 215 + i * 10);
  }

  //4.
  fill(0);
  let numbers = [400, 240, 10, 490, 30, 60, 244, 500, 301, 300];
  let y = 265;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 300) {
      text(numbers[i], 20, y);
      y += 10;
    }
  }
}

