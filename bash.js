let pwdFunc = require('./pwd');
let lsFunc = require('./ls');
let catFunc = require('./cat');

process.stdout.write('prompt > ');

process.stdin.on('data', data => {
  // command pieces
  let cmdString = data.toString().split(' ').map(e => e.trim());
  let cmd = cmdString[0];
  let args = cmdString.slice(1)
  // code to run commands
  if (cmd === 'pwd') {
    pwdFunc();
  } else if (cmd === 'ls') {
    lsFunc();
  } else if (cmd === 'cat') {
    catFunc(args[0]);
  }
});
