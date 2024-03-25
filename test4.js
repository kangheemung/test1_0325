
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
 const N=parseInt(lines[0],10);
 const binary=N.toString(2);
 console.log(binary);
});