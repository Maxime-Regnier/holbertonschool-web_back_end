import groceriesList from "./9-groceries_list.js";

describe("groceriesList", () => {
  test("returns a Map", () => {
    expect(groceriesList()).toBeInstanceOf(Map);
  });

  test("returns the correct groceries with correct quantities", () => {
    const map = groceriesList();
    expect(map.get('Apples')).toBe(10);
    expect(map.get('Tomatoes')).toBe(10);
    expect(map.get('Pasta')).toBe(1);
    expect(map.get('Rice')).toBe(1);
    expect(map.get('Banana')).toBe(5);
  });

  test("returns a map with 5 items", () => {
    expect(groceriesList().size).toBe(5);
  });
});