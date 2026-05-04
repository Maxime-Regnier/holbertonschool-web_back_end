import getListStudents from './0-get_list_students.js';

describe('getListStudents', () => {
  test('should return an array', () => {
    expect(Array.isArray(getListStudents())).toBe(true);
  });

  test('should return 3 students', () => {
    expect(getListStudents()).toHaveLength(3);
  });

  test('should return correct students', () => {
    expect(getListStudents()).toEqual([
      { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
      { id: 2, firstName: 'James', location: 'Columbia' },
      { id: 5, firstName: 'Serena', location: 'San Francisco' },
    ]);
  });
});