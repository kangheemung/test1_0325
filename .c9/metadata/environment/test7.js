{"filter":false,"title":"test7.js","tooltip":"/test7.js","undoManager":{"mark":1,"position":1,"stack":[[{"start":{"row":0,"column":0},"end":{"row":21,"column":3},"action":"insert","lines":["process.stdin.resume();","process.stdin.setEncoding('utf8');","// 自分の得意な言語で","// Let's チャレンジ！！","var lines = [];","var reader = require('readline').createInterface({","  input: process.stdin,","  output: process.stdout","});","reader.on('line', (line) => {","  lines.push(line);","});","reader.on('close', () => {","  const [N ,M ,K]=lines[0].split(' ').map(value=>parseInt(value));","   let count =0;","   let incrementedValue = N;","   while(incrementedValue <= K) {","   incrementedValue += M;","    count++;","  }","   console.log(count);","});"],"id":1}],[{"start":{"row":0,"column":0},"end":{"row":3,"column":16},"action":"remove","lines":["process.stdin.resume();","process.stdin.setEncoding('utf8');","// 自分の得意な言語で","// Let's チャレンジ！！"],"id":2}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":0,"column":0},"end":{"row":0,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1711356221893,"hash":"51684c3ccabe1c9b0b68893e9163aed3f0d9a162"}