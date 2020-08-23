import { ctx, height, width } from "./index.js";

// Define enemy
class Enemy {
  constructor(x, y, velY, exist) {
    this.x = x;
    this.y = y;
    this.velY = velY;
    this.exist = exist;
  }
}

// Define rock
class Rock extends Enemy {
  constructor(x, y, velY, exist) {
    super(x, y, velY, exist);
    this.color = "red";
    this.size = 20;
    this.blood = 1;
    this.damage = 1;
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }

  update() {
    this.y += this.velY;
    if (this.y >= height) {
      this.exist = false;
    }
  }
}

// Define spacecraft
class Craft extends Enemy {
  constructor(x, y, velY, exist) {
    super(x, y, velY, exist);
    this.blood = 2;
    this.damage = 1;
    this.size = 15;
    this.color = "yellow";
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }

  update() {
    this.y += this.velY;
    if (this.y >= height) {
      this.exist = false;
    }
  }
}

// Define lightning
class Lightning extends Enemy {
  constructor(x, y, velY, exist) {
    super(x, y, velY, exist);
    this.damage = 1;
    this.color = "blue";
    this.size = 3;
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }

  update() {
    this.y += this.velY;
    if (this.y >= height) {
      this.exist = false;
    }
  }
}

export { Rock, Craft, Lightning };
