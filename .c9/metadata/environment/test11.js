{"filter":false,"title":"test11.js","tooltip":"/test11.js","undoManager":{"mark":3,"position":3,"stack":[[{"start":{"row":0,"column":0},"end":{"row":21,"column":3},"action":"insert","lines":["process.stdin.resume();","process.stdin.setEncoding('utf8');","// 自分の得意な言語で","// Let's チャレンジ！！","var lines = [];","var reader = require('readline').createInterface({","  input: process.stdin,","  output: process.stdout","});","reader.on('line', (line) => {","  lines.push(line);","});","reader.on('close', () => {","  const N = parseInt(lines[0], 10);","     let count = 0;","","  for (let i = 5; N / i >= 1; i *= 5) {","    count += Math.floor(N / i);","  }","","  console.log(count);","});"],"id":1}],[{"start":{"row":0,"column":0},"end":{"row":3,"column":16},"action":"remove","lines":["process.stdin.resume();","process.stdin.setEncoding('utf8');","// 自分の得意な言語で","// Let's チャレンジ！！"],"id":2},{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":1,"column":0},"end":{"row":1,"column":1},"action":"insert","lines":["g"],"id":3},{"start":{"row":1,"column":1},"end":{"row":1,"column":2},"action":"insert","lines":["i"]},{"start":{"row":1,"column":2},"end":{"row":1,"column":3},"action":"insert","lines":["t"]}],[{"start":{"row":1,"column":2},"end":{"row":1,"column":3},"action":"remove","lines":["t"],"id":4},{"start":{"row":1,"column":1},"end":{"row":1,"column":2},"action":"remove","lines":["i"]},{"start":{"row":1,"column":0},"end":{"row":1,"column":1},"action":"remove","lines":["g"]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":1,"column":0},"end":{"row":1,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1711358802363,"hash":"1e4aa127a26c0506548b9755ad4e0f06014df6b5"}