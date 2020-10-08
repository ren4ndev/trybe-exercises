    
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.table(arrays);

function flatten() {
  const flatten = arrays.reduce((accumulator, currentArray) => {
    accumulator.push(currentArray.reduce((previousValue, currentValue) => previousValue.push(currentValue)));
    return accumulator;
  }, []);
  return flatten;
}

assert.deepEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);