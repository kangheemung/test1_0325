
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
 const [N,M]=lines[0].split(' ').map(Number);
  let count = 0;
  let dividend = N;
  while (dividend % M === 0 && dividend > 0) {
    dividend /= M;
    count++;
  }
  
  console.log(count);
});