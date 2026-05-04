import getListStudentIds from './1-get_list_student_ids.js';
import getListStudents from './0-get_list_students.js';

describe('getListStudentIds', () => {
  test('should return empty array if argument is not an array', () => {
    expect(getListStudentIds('hello')).toEqual([]);
  });

  test('should return array of ids', () => {
    expect(getListStudentIds(getListStudents())).toEqual([1, 2, 5]);
  });
});