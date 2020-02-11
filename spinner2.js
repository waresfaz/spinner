let time = 100;
let graphics = ['|   ', '/   ', '-   ', '\\   ', '|   ', '/   ', '-   ', '\\   ', '|   '];

const spinner = function (position) {
  for (let p of position) {
    setTimeout(() => process.stdout.write(`\r${p}`), time);
    time += 200
  }
}

spinner(graphics);