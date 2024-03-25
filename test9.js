var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  const N = parseInt(lines[0],10);
    let factorial = 1;

  for (let i = 1; i <= N; i++) {
    factorial *= i;
  }
    console.log(factorial); 
  
});