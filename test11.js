

var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  const N = parseInt(lines[0], 10);
     let count = 0;

  for (let i = 5; N / i >= 1; i *= 5) {
    count += Math.floor(N / i);
  }

  console.log(count);
});