import getResponseFromAPI from "./0-promise.js";

describe("getResponseFromAPI", () => {
  test("returns a Promise", () => {
    expect(getResponseFromAPI()).toBeInstanceOf(Promise);
  });
});