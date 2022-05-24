const fs = require('fs');
const path = require('path');

fs.readdir(path.join(__dirname, 'secret-folder'), {
  withFileTypes: true
}, (err, files) => {
  if (err) throw err;
  files.forEach(file => {
    fs.stat(path.join(__dirname, 'secret-folder', file.name), (err, stats) => {
      if (err) throw err;
      if (file.isFile())
        console.log(`${file.name.split('.')[0]} - ${path.extname(file.name)} - ${stats.size}b`);
    });
  });
});