process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
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
 const[N,M]=lines[0].split(' ').map(value=>parseInt(value));
 let count =0;
 let current = N;
   while (current % M === 0 && current !== 0) {
    current /= M;
    count++;
  }
   console.log(count);
  reader.close();
});