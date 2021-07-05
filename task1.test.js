const { findNumber, findSum, findPerfect } = require("./task 1");

describe("Algorithmic tests", () => {
  test("findNumber should return correct value of ordinary formarly correct number", () => {
    let result = findNumber(123);
    expect(result).toBe(3);
  });
  test("findNumber with the incorrect input", () => {
    let result = findNumber(-123);
    expect(result).toBeNull();
  });

  test("findNumber with the string input", () => {
    let result = findNumber("asd");
    expect(result).toBe(3);
  });
  test("findNumber with the maximum possible number", () => {
    let result = findNumber(Number.MAX_SAFE_INTEGER);
    expect(result).toBe(16);
  });

  test("findNumber with undefined", () => {
    let result = findNumber(undefined);
    expect(result).toBeNaN();
  });

  test("findNumber with object", () => {
    let result = findNumber({});
    expect(result).toBeNaN();
  });
});

describe("Testing findSum", () => {
  test("findSum should return correct value for correct input", () => {
    let result = findSum(12);
    expect(result).toBe(3);
  });

  test("findSum should return correct value for MAX_SAFE_INTEGER", () => {
    let result = findSum(Number.MAX_SAFE_INTEGER);
    expect(result).toBe(76);
  });

  test("findSum should return NaN for null object", () => {
    let result = findSum(null);
    expect(result).toBeNaN();
  });

  test("findSum should return NaN for functions", () => {
    const mockFn = jest.fn(() => {});
    const result = findSum(mockFn);
    expect(result).toBeNaN();
  });

  test("findSum should discard Symbol", () => {
    const result = findSum(Symbol.for("1234"));
    expect(result).toBeNaN();
  });
});

describe("Testing FindPerfect", () => {
  test("should return correct output for the correct input", () => {
    const result = findPerfect(1000);
    expect(result).toEqual([6, 28, 496]);
  });

  test("should return correct length at big value", () => {
    const result = findPerfect(10000);
    expect(result.length).toBe(4);
  });

  test("should return empty array with small correct input", () => {
    const result = findPerfect(5);
    expect(result).toEqual([]);
  });

  test("should return array without the number that is placed as the limit of the range", () => {
    const result = findPerfect(6);
    expect(result).not.toEqual([6]);
    expect(result).toEqual([]);
  });

  test("all numbers should follow the condition of divisors", () => {
    const blueprintedNumber = 1000;
    const mockFindAllDivisors = jest.fn((n) => {
      const arr = [];
      for (let i = 1; i <= n; i++) {
        if (n % i == 0) arr.push(n);
      }
      return arr;
    });

    const mockHelper = jest.fn((number) => {
      const arr = mockFindAllDivisors(blueprintedNumber);
      for (const el of arr) {
        if (number % el !== 0) return false;
      }
      return true;
    });

    const result = findPerfect(blueprintedNumber);
    expect(result.map((num) => mockHelper(num)[0])).toBeTruthy();
  });
});
