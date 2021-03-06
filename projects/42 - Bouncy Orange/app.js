//
//

const canvasEl = document.querySelector('canvas');
const canvasContext = canvasEl.getContext('2d');
const FPS = 60;

let radius = 50;
let xP, yP;
let xV, yV;

xP = canvasEl.width / 2;
yP = canvasEl.height / 2;

xV = Math.floor(Math.random() * 201 + 90) / FPS;
yV = Math.floor(Math.random() * 201 + 90) / FPS;

// Coin Toss Situatiin
if (Math.floor(Math.random() * 2) === 0) {
  xV = -xV;
}

if (Math.floor(Math.random() * 2) === 0) {
  yV = -yV;
}

// The Game Loop
function runGame() {
  // Moving the Ball from current position
  xP += xV;
  yP += yV;

  // Clear the Ball
  canvasContext.clearRect(0, 0, canvasEl.width, canvasEl.height);

  // ******************** Collision Detection ********************
  // Bottom Boundary
  if (yV > 0 && yP >= canvasEl.height - radius) {
    yV = -yV;
  }

  // Right Boundary
  if (xV > 0 && xP > canvasEl.width - radius) {
    xV = -xV;
  }

  // Top Boundary
  if (yV < 0 && yP <= radius) {
    yV = -yV;
  }

  // Left Boundary
  if (xV < 0 && xP <= radius) {
    xV = -xV;
  }

  // Drawing the Ball
  canvasContext.beginPath();
  canvasContext.fillStyle = 'blue';
  canvasContext.arc(xP, yP, radius, 0, Math.PI * 2);
  canvasContext.fill();
}

// set Interval
setInterval(runGame, 1000 / FPS);

// function randomColor() {
//   const red = Math.floor(Math.random() * 255);
//   const green = Math.floor(Math.random() * 255);
//   const blue = Math.floor(Math.random() * 255);

//   return `rgb(${red},${green},${blue})`;
// }
