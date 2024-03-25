
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
let lineNumber=0;
let n = 0;
let numbers=[];
reader.on('line', (line) => {
 if  (lineNumber === 0){
     n=parseInt(line);
 }else{
     numbers=line.trim().split(' ').map(Number);
     for (let i = 0; i<n; i++){
         console.log(numbers[i]*(i+1));
     }
 }
 lineNumber++;
});
reader.on('close', () => {

});