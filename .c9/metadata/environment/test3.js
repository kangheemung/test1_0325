{"filter":false,"title":"test3.js","tooltip":"/test3.js","undoManager":{"mark":1,"position":1,"stack":[[{"start":{"row":0,"column":0},"end":{"row":22,"column":3},"action":"insert","lines":["process.stdin.resume();","process.stdin.setEncoding('utf8');","// 自分の得意な言語で","// Let's チャレンジ！！","var lines = [];","var reader = require('readline').createInterface({","  input: process.stdin,","  output: process.stdout","});","reader.on('line', (line) => {","  lines.push(line);","});","reader.on('close', () => {"," const [N,M]=lines[0].split(' ').map(Number);","  let count = 0;","  let dividend = N;","  while (dividend % M === 0 && dividend > 0) {","    dividend /= M;","    count++;","  }","  ","  console.log(count);","});"],"id":1}],[{"start":{"row":0,"column":0},"end":{"row":3,"column":16},"action":"remove","lines":["process.stdin.resume();","process.stdin.setEncoding('utf8');","// 自分の得意な言語で","// Let's チャレンジ！！"],"id":2}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":18,"column":21},"end":{"row":18,"column":21},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1711353933779,"hash":"76f4d9a46b4ec5dea64916d09197ca4f3966e094"}