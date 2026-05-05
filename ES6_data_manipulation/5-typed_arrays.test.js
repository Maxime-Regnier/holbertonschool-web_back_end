import createInt8TypedArray from './5-typed_arrays.js';

describe('createInt8TypedArray', () => {
  test('returns a DataView with the correct byteLength', () => {
    const result = createInt8TypedArray(10, 2, 89);
    expect(result).toBeInstanceOf(DataView);
    expect(result.byteLength).toBe(10);
  });

  test('sets the value correctly at the given position', () => {
    const result = createInt8TypedArray(10, 2, 89);
    expect(result.getInt8(2)).toBe(89);
  });

  test('other positions remain at 0', () => {
    const result = createInt8TypedArray(10, 2, 89);
    expect(result.getInt8(0)).toBe(0);
    expect(result.getInt8(5)).toBe(0);
  });

  test('works at the first position (0)', () => {
    const result = createInt8TypedArray(5, 0, 42);
    expect(result.getInt8(0)).toBe(42);
  });

  test('works at the last position (length - 1)', () => {
    const result = createInt8TypedArray(5, 4, 99);
    expect(result.getInt8(4)).toBe(99);
  });

  test('throws an error if position >= length', () => {
    expect(() => createInt8TypedArray(10, 10, 89)).toThrow('Position outside range');
  });

  test('throws an error if position < 0', () => {
    expect(() => createInt8TypedArray(10, -1, 89)).toThrow('Position outside range');
  });

  test('handles negative Int8 values correctly', () => {
    const result = createInt8TypedArray(5, 1, -50);
    expect(result.getInt8(1)).toBe(-50);
  });
});