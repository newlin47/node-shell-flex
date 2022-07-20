//Output a prompt
const pwdFunc = require('./pwd');
const lsFile = require('./ls');
const catFile = require('./cat');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  let cmdArr = cmd.split(' ');
  let firCmd = cmdArr[0];
  let file = cmdArr[1];
  if (firCmd === 'pwd') {
    pwdFunc.pwdFinder();
  }
  if (firCmd === 'ls') {
    lsFile.fileFind();
  }
  if (firCmd === 'cat') {
    catFile.catWrite(file);
  }
  process.stdout.write('\nprompt > ');
});
