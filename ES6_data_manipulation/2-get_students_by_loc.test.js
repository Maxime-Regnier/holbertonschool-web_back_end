import getListStudents from './0-get_list_students.js';
import getStudentsByLocation from './2-get_students_by_loc.js';

describe('getStudentsByLocation', () => {
  test('should return students in San Francisco', () => {
    expect(getStudentsByLocation(getListStudents(), 'San Francisco')).toEqual([
      { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
      { id: 5, firstName: 'Serena', location: 'San Francisco' },
    ]);
  });

  test('should return students in Columbia', () => {
    expect(getStudentsByLocation(getListStudents(), 'Columbia')).toEqual([
      { id: 2, firstName: 'James', location: 'Columbia' },
    ]);
  });

  test('should return empty array if no match', () => {
    expect(getStudentsByLocation(getListStudents(), 'Paris')).toEqual([]);
  });
});