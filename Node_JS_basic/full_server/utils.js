import fs from 'fs';

const readDatabase = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      reject(err);
      return;
    }
    const lines = data
      .split('\n')
      .filter((line) => line.trim() !== '');
    const [, ...rows] = lines;
    const studentsByField = {};
    for (const row of rows) {
      const fields = row.split(',');
      const firstname = fields[0].trim();
      const field = fields[3].trim();
      if (firstname && field) {
        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        studentsByField[field].push(firstname);
      }
    }
    resolve(studentsByField);
  });
});
export default readDatabase;
