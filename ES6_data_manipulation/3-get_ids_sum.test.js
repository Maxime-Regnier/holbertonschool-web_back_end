import getListStudents from './0-get_list_students.js';
import getStudentIdsSum from './3-get_ids_sum.js';

describe('getStudentIdsSum', () => {
  test('should return the sum of all student ids', () => {
    expect(getStudentIdsSum(getListStudents())).toBe(8);
  });
});