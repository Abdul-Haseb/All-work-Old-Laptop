// setup canvas

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

//CREATING BALLS OBJECT CLASS
class Balls {
  constructor(x, y, velocityx, velocityY, color, size) {
    this.x = x;
    this.y = y;
    this.velocityx = velocityx;
    this.velocityY = velocityY;
    this.color = color;
    this.size = size;
  }
  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }
  update() {
    if (this.x + this.size >= width) {
      this.velocityx = -this.velocityx;
    }
    if (this.x - this.size <= 0) {
      this.velocityx = -this.velocityx;
    }
    if (this.y - this.size >= height) {
      this.velocityY = -this.velocityY;
    }
    if (this.velocityY - this.size <= 0) {
      this.velocityY = -this.velocityY;
    }
    this.x += this.velocityx;
    this.y += this.velocityY;
  }
  collisionDetect() {
    for (const ball of balls) {
      const dx = this.x - ball.x;
      const dy = this.y - balls.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + ball.size) {
        ball.color = this.color = randomRGB();
      }
    }
  }
}

const testBall = new Balls(50, 100, 4, "blue", 10);

testBall.x;
testBall.size;
testBall.color;
testBall.draw();

const balls = [];

while (balls.length < 25) {
  const size = random(10, 20);
  const ball = new Balls(
    random(0 + size, width, size),
    random(0, size, height, size),
    random(-7, 7),
    random(-7, 7),
    randomRGB(),
    size
  );
  balls.push(ball);
}

function loop() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  ctx.fillRect(0, 0, width, height);

  for (const ball of balls) {
    ball.draw();
    ball.update();
    ball.collisionDetect();
  }
  requestAnimationFrame(loop);
}
loop();
