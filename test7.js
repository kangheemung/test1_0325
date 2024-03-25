
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  const [N ,M ,K]=lines[0].split(' ').map(value=>parseInt(value));
   let count =0;
   let incrementedValue = N;
   while(incrementedValue <= K) {
   incrementedValue += M;
    count++;
  }
   console.log(count);
});