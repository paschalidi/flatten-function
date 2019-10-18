import { flatten } from "./flatten";

describe("flatten method", function() {
  it("should flatten deeply arrays", function() {
    const array = [1, [2, [3, [4]], 5]];
    const flatArray = flatten(array);
    const expected = [1, 2, 3, 4, 5];
    expect(flatArray).toEqual(expected);
  });

  it("should work with empty arrays", function() {
    var array = [[], [[]], [[], [[[]]]]];
    const flatArray = flatten(array);
    const expected = [];
    expect(flatArray).toEqual(expected);
  });

  it("should skip from adding empty arrays to the result", function() {
    const array = [[1, 2, 3], [], [], []];
    const flatArray = flatten(array);
    const expected = [1, 2, 3];
    expect(flatArray).toEqual(expected);
  });

  it("should work only with objects", function() {
    const array = [{ zero: true }, [{ one: true }, [{ two: true }]]];
    const flatArray = flatten(array);
    const expected = [{ zero: true }, { one: true }, { two: true }];
    expect(flatArray).toEqual(expected);
  });

  it("should work with a empty strings", function() {
    const array = ["", [[[""], ""]]];
    const flatArray = flatten(array);
    const expected = ["", "", ""];
    expect(flatArray).toEqual(expected);
  });

  it("should work with a variaty of types", function() {
    const array = [[1, 2, 3], { zero: true }, [[[{ one: true }, ["a"]]]]];
    const flatArray = flatten(array);
    const expected = [1, 2, 3, { zero: true }, { one: true }, "a"];
    expect(flatArray).toEqual(expected);
  });

  it("should work with a variaty of types", function() {
    const array = [[1, 2, 3], { zero: true }, [[[{ one: true }, ["a"]]]]];
    const flatArray = flatten(array);
    const expected = [1, 2, 3, { zero: true }, { one: true }, "a"];
    expect(flatArray).toEqual(expected);
  });
});
