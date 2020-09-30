const assert = require('assert');
// escreva a função wordLengths aqui
const wordLengths = (wordsArray) => {
    let newArray = [];
    for (let index = 0; index < wordsArray.length; index += 1) {
        newArray.push(wordsArray[index].length);
    }
    return newArray;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);