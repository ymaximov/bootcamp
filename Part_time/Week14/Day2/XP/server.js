const fs = require('fs');

fs.readFile('index.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

fs.writeFile('index2.txt', 'Hello World!', function (err) {
    if (err) return console.log(err);
    console.log('Hello World > helloworld.txt');
  });

  fs.appendFile('index2.txt', 'new data appended', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

  fs.unlinkSync('index.txt')