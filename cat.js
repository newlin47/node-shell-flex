const fs = require('fs');

function catWrite(str) {
  fs.readFile(str, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      process.stdout.write(str.join('\n'));
      process.stdout.write('\nprompt > ');
    }
  });
}

module.exports = {
  catWrite,
};
