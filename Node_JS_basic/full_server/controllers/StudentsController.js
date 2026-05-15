import readDatabase from '../utils';

export default class StudentsController {
  static getAllStudents(request, response) {
    const dbFile = process.argv[2];
    readDatabase(dbFile)
      .then((studentsByField) => {
        const sortedFields = Object.keys(studentsByField)
          .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
        const lines = ['This is the list of our students'];
        for (const field of sortedFields) {
          const students = studentsByField[field];
          lines.push(
            `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`,
          );
        }
        response.status(200).send(lines.join('\n'));
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    const dbFile = process.argv[2];
    readDatabase(dbFile)
      .then((studentsByField) => {
        const students = studentsByField[major] || [];
        response.status(200).send(`List: ${students.join(', ')}`);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}
