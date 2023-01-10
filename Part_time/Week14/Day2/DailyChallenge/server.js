const fs = require('fs');

fs.readFile('index.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  } 
  const seperate = data.split('')
  let position = 0
  let steps = 0
//   console.log(seperate);
  seperate.forEach(element => {
    steps++
    if (element == '>'){
        position += 1
        if (position == -1) {
            console.log('line 17',steps);
        }
    } 
    else if (position -= 1) {
    if (position == -1) {
        console.log('line 22', steps);
    }
}
  });
  console.log('line 26', position);
});