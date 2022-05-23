const fs = require('fs');
const path = require('path');
const readline = require('readline');
const {
  stdin: input,
  stdout: output
} = require('process');
const rl = readline.createInterface({
  input,
  output
});
output.write('Введите текст:\n');
fs.writeFile(
  path.join(__dirname, 'text.txt'),
  '',
  (err) => {
    if (err) throw err;
  }
);
rl.on('line', (data) => {
  if (data === 'exit') {
    output.write('Завершение программы');
    rl.close();
  } else {
    fs.appendFile(
      path.join(__dirname, 'text.txt'),
      data + '\n',
      err => {
        if (err) throw err;
      }
    );
  }
});
rl.on('SIGINT', () => {
  output.write('Завершение программы');
  rl.close();
});