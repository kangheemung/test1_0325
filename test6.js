
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
 const [N ,M] = lines[0].split(' ').map(Number);
 const binary = N.toString(M);
 console.log(binary);
 
});