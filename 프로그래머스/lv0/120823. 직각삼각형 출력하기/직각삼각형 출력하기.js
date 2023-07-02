const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [4, 4, 4];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  let arr = [];

  for (i = 1; i <= input[0]; i++) {
    arr.push("*".repeat(i));
  }

  const toString = arr.join("\n");

  console.log(toString);
});
