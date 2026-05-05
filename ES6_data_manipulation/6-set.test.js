import setFromArray from './6-set.js';

describe('setFromArray', () => {
  test('returns a Set instance', () => {
    const result = setFromArray([1, 2, 3]);
    expect(result).toBeInstanceOf(Set);
  });

  test('removes duplicate values', () => {
    const result = setFromArray([12, 32, 15, 78, 98, 15]);
    expect(result).toEqual(new Set([12, 32, 15, 78, 98]));
    expect(result.size).toBe(5);
  });

  test('works with an empty array', () => {
    const result = setFromArray([]);
    expect(result.size).toBe(0);
  });

  test('works with strings', () => {
    const result = setFromArray(['a', 'b', 'a', 'c']);
    expect(result).toEqual(new Set(['a', 'b', 'c']));
    expect(result.size).toBe(3);
  });

  test('works with mixed types', () => {
    const result = setFromArray([1, 'a', true, null, 1, 'a']);
    expect(result).toEqual(new Set([1, 'a', true, null]));
    expect(result.size).toBe(4);
  });

  test('works with all identical elements', () => {
    const result = setFromArray([5, 5, 5, 5]);
    expect(result).toEqual(new Set([5]));
    expect(result.size).toBe(1);
  });
});