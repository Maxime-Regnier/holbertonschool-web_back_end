import cleanSet from "./8-clean_set.js";

describe("cleanSet", () => {
  test("returns values without the startString, joined by '-'", () => {
    expect(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon')).toBe('jovi-aparte-appetit');
  });

  test("returns empty string if startString is empty", () => {
    expect(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), '')).toBe('');
  });

  test("returns empty string if no values start with startString", () => {
    expect(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'xyz')).toBe('');
  });

  test("returns empty string if set is empty", () => {
    expect(cleanSet(new Set([]), 'bon')).toBe('');
  });
});