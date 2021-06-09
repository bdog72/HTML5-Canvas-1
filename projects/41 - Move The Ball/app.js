//
//

const canvasEl = document.querySelector('canvas');
const canvasContext = canvasEl.getContext('2d');

canvasEl.height = 600;
canvasEl.width = 800;

let yP = 300;
let xP = 400;

let radius = 50;
let speed = 10;

// Arrow Direction Event Listeners
let upDir = false;
let downDir = false;
let leftDir = false;
let rightDir = false;

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);

// Running the Game - The Game Loop
function runGame() {
  requestAnimationFrame(runGame);

  canvasContext.clearRect(0, 0, canvasEl.width, canvasEl.height);

  arrowInputs();

  drawBall();
}

// Moving the Balls
function arrowInputs() {
  if (upDir) {
    yP = yP - speed;
  }
  if (downDir) {
    yP = yP + speed;
  }
  if (leftDir) {
    xP = xP - speed;
  }
  if (rightDir) {
    xP = xP + speed;
  }
}

function randomColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red},${green},${blue})`;
}

// console.log(randomColor());

// Drawing the Ball
function drawBall() {
  canvasContext.fillStyle = '#fff';
  // canvasContext.fillStyle = randomColor();
  canvasContext.beginPath();
  canvasContext.arc(xP, yP, radius, 0, Math.PI * 2);
  canvasContext.fill();
}

// Arrow Key Functions
function keyDown(e) {
  if (e.keyCode === 38) {
    upDir = true;
  }
  if (e.keyCode === 40) {
    downDir = true;
  }
  if (e.keyCode === 37) {
    leftDir = true;
  }
  if (e.keyCode === 39) {
    rightDir = true;
  }
}

function keyUp(e) {
  if (e.keyCode === 38) {
    upDir = false;
  }
  if (e.keyCode === 40) {
    downDir = false;
  }
  if (e.keyCode === 37) {
    leftDir = false;
  }
  if (e.keyCode === 39) {
    rightDir = false;
  }
}

runGame();
