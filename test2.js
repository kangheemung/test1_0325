
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  const N= parseInt(line, 10);
 const binary = N.toString(2);
  console.log(binary);
});
reader.on('close', () => {

});
