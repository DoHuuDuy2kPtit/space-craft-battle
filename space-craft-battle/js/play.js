import { ctx, height, width } from "./index.js";
import { Rock, Craft, Lightning } from "./enemies.js";

let universe = [];

function init() {
  render();
}

function render() {
  update();
  draw();
  requestAnimationFrame(render);
}

function update() {
  universe = universe.filter((enemy) => enemy.exist === true);
  universe.forEach((enemy) => enemy.update());

  let chance = Math.random();
  if (chance < 0.02) {
    const num = Math.floor(Math.random() * 3);
    if (num === 0) {
      const rock = new Rock(random(width), 20, 2, true);
      universe.push(rock);
    } else if (num === 1) {
      const craft = new Craft(random(width), 20, 2, true);
      universe.push(craft);
    } else if (num === 2) {
      const lightning = new Lightning(random(width), 20, 2, true);
      universe.push(lightning);
    }
  }
}

function draw() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, width, height);
  universe.map((item) => {
    item.draw();
  });
}

function random(num) {
  return Math.random() * num;
}

export { init };
