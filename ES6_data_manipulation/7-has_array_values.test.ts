import hasValuesFromArray from "./7-has_array_values";

describe("hasValuesFromArray", () => {
  test("returns true if all elements exist in the set", () => {
    expect(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1])).toBe(true);
  });

  test("returns false if element does not exist in the set", () => {
    expect(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [10])).toBe(false);
  });

  test("returns false if one element is missing from the set", () => {
    expect(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1, 10])).toBe(false);
  });
});