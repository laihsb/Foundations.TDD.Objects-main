# TDD: Objects

This is going to be the last TDD problem set for a while! Let's put everything you've learned together :)

## Getting Started

1. The **Driver** should fork this repo.
2. The **Driver** should add the **Navigator** as a collaborator to their fork.
3. **Both partners** should clone the fork.
4. In your terminal, run `npm install`.
5. In your terminal, run `npm test`.
6. Edit `script.js` until you are passing all test cases!
   1. You can change `describe(...)` to `describe.only(...)` in `script_test.js` if you'd like to only run the tests for the problem you're working on.
7. Swap Driver/Navigator roles after each prompt.
8. Type `Control+C` in your terminal to close the Mocha process once you are done testing.

## Exercises

### getCohort

`getCohort({cohort:number, name: string})` takes an object as a parameter and returns the cohort of that object.

```js
getCohort({ cohort: 2108, name: "Lucian" }); // >>> 2108
getCohort({ cohort: 1938, name: "Shalini" }); // >>> 1938
```

### increment

`increment({count: number})` takes an object that contains a count and returns an object with that count increased by one.

```js
increment({ count: 0 }); // >>> { count: 1 }
increment({ count: 93 }); // >>> { count: 94 }
```

### findHerbivores

`findHerbivores({name: string, isHerbivore: boolean}[])` takes an array of animal objects and returns a new array of only the animals that are herbivores.

```js
findHerbivores([
  { name: "lion", isHerbivore: false },
  { name: "deer", isHerbivore: true },
  { name: "penguin", isHerbivore: false },
  { name: "elephant", isHerbivore: true },
]); // >>> [{name: "deer", isHerbivore: true}, {name: "elephant", isHerbivore: true}]
```

### findCarnivores

`findCarnivores({name: string, isCarnivore: boolean}[])` takes an array of animal objects and returns a new array of only the _names_ of the animals that are carnivores.

```js
findCarnivores([
  { name: "polar bear", isCarnivore: true },
  { name: "hyena", isCarnivore: true },
  { name: "rabbit", isCarnivore: false },
]); // >>> ["polar bear", "hyena"]
```

### merge

`merge(any[], any[])` takes two arrays of the same length as arguments, and returns an object with the corresponding keys and values.

```js
merge(["math", "history", "physics"], ["B-", "A+", "B+"]); // >>> {math: "B-", history: "A+", physics: "B+"}
```

### checkout

`checkout({name: string, quantity: number, price: number}[])` calculates the total price of all items in a given cart.

```js
const cart = [
  {
    name: "Blue Paint",
    quantity: 10,
    price: 4.99,
  },
  {
    name: "Red Paint",
    quantity: 5,
    price: 4.99,
  },
  {
    name: "Yellow Paint",
    quantity: 8,
    price: 4.99,
  },
  {
    name: "16x20in Canvas",
    quantity: 2,
    price: 2.99,
  },
  {
    name: "Paintbrush",
    quantity: 15,
    price: 1.5,
  },
];

checkout(cart); // >>> 143.25
```

### analyzeFrequencies

`analyzeFrequencies(string)` accepts a string of lowercase letters as an argument. It returns an object containing the number of times each letter appears in the string.

```js
analyzeFrequencies("abca"); // >>> {a: 2, b: 1, c: 1}
```

### compareObjects

`compareObjects(object, object)` returns true if both objects have exactly the same key/value pairs.

```js
compareObjects({ name: "nick" }, { name: "nick" }); // -> true
compareObjects({ name: "zeke" }, { name: "zeke", age: 12 }); // -> false
```
