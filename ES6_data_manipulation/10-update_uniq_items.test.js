import updateUniqueItems from "./10-update_uniq_items.js";
import groceriesList from "./9-groceries_list.js";

describe("updateUniqueItems", () => {
  test("updates quantities of 1 to 100", () => {
    const map = groceriesList();
    updateUniqueItems(map);
    expect(map.get('Pasta')).toBe(100);
    expect(map.get('Rice')).toBe(100);
  });

  test("does not update quantities that are not 1", () => {
    const map = groceriesList();
    updateUniqueItems(map);
    expect(map.get('Apples')).toBe(10);
    expect(map.get('Tomatoes')).toBe(10);
    expect(map.get('Banana')).toBe(5);
  });

  test("throws 'Cannot process' if argument is not a map", () => {
    expect(() => updateUniqueItems('not a map')).toThrow('Cannot process');
    expect(() => updateUniqueItems([])).toThrow('Cannot process');
    expect(() => updateUniqueItems(null)).toThrow('Cannot process');
  });
});