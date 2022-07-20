//Output a prompt
const pwdFunc = require('./pwd');
const lsFile = require('./ls');
const catFile = require('./cat');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  if (cmd === 'pwd') {
    pwdFunc.pwdFinder();
  }
  if (cmd === 'ls') {
    lsFile.fileFind();
  }
  if (cmd === 'cat') {
    catFile.catWrite();
  }
  process.stdout.write('\nprompt > ');
});
