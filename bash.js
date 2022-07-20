//Output a prompt
const pwdFunc = require('./pwd');
const lsFile = require('./ls');
const catFile = require('./cat');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  let [firCmd, file] = cmd.split(' ');
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
