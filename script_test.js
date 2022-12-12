// --------------------------
//#region Setup
// You can safely ignore the code in this region :)
// --------------------------
// This line of code uses Chai, which is our assertion library.
const { expect } = require("chai");

// This imports your code so we can test it!
const code = require("./script.js");

// Helpers to generate random arrays for test cases
// Don't worry about how this works for now :)
function generateRandomInteger(low = -50, high = 50) {
  return low + Math.floor(Math.random() * (high - low + 1));
}
function generateRandomNumberArray(low = -50, high = 50, n = 5) {
  return Array.from({ length: n }, () => generateRandomInteger(low, high));
}
//#endregion Setup

describe("getCohort", function () {
  it("is a function", function () {
    expect(code.getCohort).to.be.a("function");
  });

  it("returns a number", function () {
    const result = code.getCohort({ cohort: 2018 });
    expect(result).to.be.a("number");
  });

  describe("returns the correct cohort", function () {
    // Generate and test 3 random cohorts
    for (let i = 0; i < 3; i++) {
      const test = generateRandomInteger();
      it(`returns ${test} for the object {cohort:${test}}`, function () {
        const result = code.getCohort({ cohort: test });
        expect(result).to.equal(test);
      });
    }
  });
});

describe("increment", function () {
  it("is a function", function () {
    expect(code.increment).to.be.a("function");
  });

  it("returns an object", function () {
    const result = code.increment({ count: 10 });
    expect(result).to.be.an("object");
  });

  describe("returns an object with an incremented count", function () {
    // Generate and test 3 random counts
    for (let i = 0; i < 3; i++) {
      const test = generateRandomInteger();
      it(`returns ${test + 1} for the object ${{ count: test }}`, function () {
        const result = code.increment({ count: test });
        expect(result).to.eql({ count: test + 1 });
      });
    }
  });
});

describe("findHerbivores", function () {
  it("is a function", function () {
    expect(code.findHerbivores).to.be.a("function");
  });

  it("returns an array of objects", function () {
    const test = [
      { name: "lion", isHerbivore: false },
      { name: "deer", isHerbivore: true },
      { name: "penguin", isHerbivore: false },
      { name: "elephant", isHerbivore: true },
    ];
    const result = code.findHerbivores(test);
    expect(result).to.be.an("array");
    expect(result).to.have.lengthOf(2);
    for (const elem of result) {
      expect(elem).to.be.an("object");
    }
  });

  describe("returns the correct array of herbivores", function () {
    // Generate and test 3 random arrays of fake animals where
    // the animal is an herbivore if a random number is positive
    for (let i = 0; i < 3; i++) {
      const test = generateRandomNumberArray().map((n) => ({
        name: String(n),
        isHerbivore: n > 0,
      }));
      const expected = test.filter((a) => a.isHerbivore);
      it(`returns ${expected} for the array ${test}`, function () {
        const result = code.findHerbivores(test);
        expect(result).to.have.deep.members(expected);
      });
    }
  });
});

describe("findCarnivores", function () {
  it("is a function", function () {
    expect(code.findCarnivores).to.be.a("function");
  });

  it("returns an array of strings", function () {
    const test = [
      { name: "polar bear", isCarnivore: true },
      { name: "hyena", isCarnivore: true },
      { name: "rabbit", isCarnivore: false },
    ];
    const result = code.findCarnivores(test);
    expect(result).to.be.an("array");
    expect(result).to.have.lengthOf(2);
    for (const elem of result) {
      expect(elem).to.be.a("string");
    }
  });

  describe("returns the correct array of carnivore names", function () {
    // Generate and test 3 random arrays of fake animals where
    // the animal is a carnivore if a random number is positive
    for (let i = 0; i < 3; i++) {
      const test = generateRandomNumberArray().map((n) => ({
        name: String(n),
        isCarnivore: n > 0,
      }));
      const expected = test.filter((a) => a.isCarnivore).map((a) => a.name);
      it(`returns ${expected} for the array ${test}`, function () {
        const result = code.findCarnivores(test);
        expect(result).to.have.members(expected);
      });
    }
  });
});

describe("merge", function () {
  it("is a function", function () {
    expect(code.merge).to.be.a("function");
  });

  it("returns an object", function () {
    const result = code.merge(
      ["math", "history", "physics"],
      ["B-", "A+", "B+"]
    );
    expect(result).to.be.an("object");
  });

  describe(`returns an object with the correct keys and values`, function () {
    // Generate and test three random arrays of key/value pairs
    for (let i = 0; i < 3; i++) {
      const keys = generateRandomNumberArray();
      const values = generateRandomNumberArray();
      const expected = keys.reduce((a, k, i) => ({ ...a, [k]: values[i] }), {});
      it(`returns ${JSON.stringify(
        expected
      )} for keys: ${keys} and values: ${values}`, function () {
        const result = code.merge(keys, values);
        expect(result).to.eql(expected);
      });
    }
  });
});

describe("checkout", function () {
  it("is a function", function () {
    expect(code.checkout).to.be.a("function");
  });

  it("returns a number", function () {
    const result = code.checkout([]);
    expect(result).to.be.a("number");
  });

  describe(`correctly returns the total cost of all items in a given cart`, function () {
    for (let i = 0; i < 3; i++) {
      const test = Array.from({ length: 5 }, () => ({
        quantity: generateRandomInteger(1, 10),
        price: generateRandomInteger(1, 100),
      }));
      const expected = test.reduce((a, v) => a + v.quantity * v.price, 0);
      it(`returns ${expected} for the cart ${test}`, function () {
        const result = code.checkout(test);
        expect(result).to.equal(expected);
      });
    }
  });
});

describe("analyzeFrequencies", function () {
  it("is a function", function () {
    expect(code.analyzeFrequencies).to.be.a("function");
  });

  it("returns an object", function () {
    const result = code.analyzeFrequencies("apple");
    expect(result).to.be.an("object");
  });

  describe("returns the correct number of letters for a given string", function () {
    for (let i = 0; i < 3; i++) {
      const test = String(generateRandomInteger());
      const expected = Array.from(test).reduce(
        (a, v) => ({ ...a, [v]: (a[v] ?? 0) + 1 }),
        {}
      );
      it(`returns ${expected} for the string ${test}`, function () {
        const result = code.analyzeFrequencies(test);
        expect(result).to.eql(expected);
      });
    }
  });
});

describe("compareObjects", function () {
  it("is a function", function () {
    expect(code.compareObjects).to.be.a("function");
  });

  it("returns a boolean", function () {
    const result = code.compareObjects({}, {});
    expect(result).to.be.a("boolean");
  });

  it("returns true if both objects have identical key/value pairs", function () {
    const result = code.compareObjects({ a: 1, b: 2 }, { a: 1, b: 2 });
    expect(result).to.equal(true);
  });

  it("returns false if the objects have different keys", function () {
    const result = code.compareObjects({ a: 1, b: 2 }, { a: 1, c: 2 });
    expect(result).to.equal(false);
  });

  it("returns false if the objects have different values", function () {
    const result = code.compareObjects({ a: 1, b: 2 }, { a: 1, b: 3 });
    expect(result).to.equal(false);
  });

  it("returns false if the first object has an extra key/value pair", function () {
    const result = code.compareObjects({ a: 1, b: 2 }, { a: 1 });
    expect(result).to.equal(false);
  });

  it("returns false if the second object has an extra key/value pair", function () {
    const result = code.compareObjects({ a: 1 }, { a: 1, b: 2 });
    expect(result).to.equal(false);
  });
});
