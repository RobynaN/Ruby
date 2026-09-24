function setup() {
  createCanvas(850, 600);
}


function draw() {
  background(220);
  fill(0);
  drawStar(drawingContext, 150, 150, 5, 70, 30);
}

function drawStar(ctx, cx, cy, spikes, outerRadius, innerRadius) {
  let rotation = -Math.PI / 2;
  const step = Math.PI / spikes;

  ctx.beginPath();
  ctx.moveTo(
    cx + Math.cos(rotation) * outerRadius,
    cy + Math.sin(rotation) * outerRadius
  );

  for (let i = 0; i < spikes; i++) {
    rotation += step;
    ctx.lineTo(
      cx + Math.cos(rotation) * innerRadius,
      cy + Math.sin(rotation) * innerRadius
    );
    rotation += step;
    ctx.lineTo(
      cx + Math.cos(rotation) * outerRadius,
      cy + Math.sin(rotation) * outerRadius
    );
  }

  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}



