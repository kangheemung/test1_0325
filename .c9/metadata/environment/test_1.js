{"filter":false,"title":"test_1.js","tooltip":"/test_1.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":22,"column":3},"action":"insert","lines":["process.stdin.resume();","process.stdin.setEncoding('utf8');","// 自分の得意な言語で","// Let's チャレンジ！！","var lines = [];","var reader = require('readline').createInterface({","  input: process.stdin,","  output: process.stdout","});","reader.on('line', (line) => {","  lines.push(line);","});","reader.on('close', () => {"," const[N,M]=lines[0].split(' ').map(value=>parseInt(value));"," let count =0;"," let current = N;","   while (current % M === 0 && current !== 0) {","    current /= M;","    count++;","  }","   console.log(count);","  reader.close();","});"],"id":1}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":22,"column":3},"end":{"row":22,"column":3},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1711350531713,"hash":"1a422e33e4231c2aa78b8ddf8ac3f411db862bc1"}