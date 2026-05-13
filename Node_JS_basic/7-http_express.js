const express = require('express');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1);
      const fields = {};
      for (const student of students) {
        const parts = student.split(',');
        if (parts.length >= 4) {
          const field = parts[3].trim();
          const firstname = parts[0].trim();
          if (!fields[field]) fields[field] = [];
          fields[field].push(firstname);
        }
      }
      const linesOut = [];
      linesOut.push(`Number of students: ${students.length}`);
      for (const [field, names] of Object.entries(fields)) {
        linesOut.push(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }
      resolve(linesOut.join('\n'));
    });
  });
}
const app = express();
app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Hello Holberton School!');
});
app.get('/students', (req, res) => {
  res.type('text/plain');
  const dbPath = process.argv[2];
  const header = 'This is the list of our students';
  if (!dbPath) {
    res.send(`${header}\nCannot load the database`);
    return;
  }
  countStudents(dbPath)
    .then((studentData) => {
      res.send(`${header}\n${studentData}`);
    })
    .catch((err) => {
      res.send(`${header}\n${err.message}`);
    });
});
app.listen(1245);
module.exports = app;
