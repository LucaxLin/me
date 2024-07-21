import { random } from "@/assets/math.js";
const { sin, cos, PI } = Math;
function Point(ctx) {
  this.width = ctx.canvas.width;
  this.height = ctx.canvas.height;
  this.id = new Date().getTime();
  this.ctx = ctx;
  this.x = random(0, this.width);
  this.y = random(0, this.height);
  const speed = random(0.3, 1.4);
  const angle = random(0, 2 * PI);
  this.dx = sin(angle) * speed;
  this.dy = cos(angle) * speed;

  this.r = 1.2;

  this.color = "#fff";
  this.move = () => {
    this.x += this.dx;
    if (this.x < 0) {
      this.x = 0;
      this.dx = -this.dx;
    } else if (this.x > this.width) {
      this.x = this.width;
      this.dx = -this.dx;
    }
    this.y += this.dy;
    if (this.y < 0) {
      this.y = 0;
      this.dy = -this.dy;
    } else if (this.y > this.height) {
      this.y = this.height;
      this.dy = -this.dy;
    }
    this.draw()
  };
  this.draw = () => {
    this.ctx.fillStyle = this.color;
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.r, 0, PI * 2);
    this.ctx.closePath();
    this.ctx.fill();
  };
}

export default Point;
