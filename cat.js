const fs = require('fs');

function catWrite(file) {
  fs.readFile(file, 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      let lines = data.toString();
      process.stdout.write(lines);
      process.stdout.write('\nprompt > ');
    }
  });
}
module.exports = {
  catWrite,
};
