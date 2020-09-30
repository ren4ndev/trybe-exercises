const removeVowels = (word) => {
  const characters = word.split("");
  let results = '';
  let vowelsCount = 1;

  for (let i = 0; i < characters.length; i += 1) {
    if (
      characters[i] === "a" ||
      characters[i] === "o" ||
      characters[i] === "i" ||
      characters[i] === "e" ||
      characters[i] === "u"
    ) {
      results += vowelsCount;
      vowelsCount += 1;
    } else {
      results += characters[i];
    }
  }
  return results;
};

const parameter = "Dayane";
const result = "D1y2n3";

//   Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.
const assert = require('assert');

assert.strictEqual(removeVowels(parameter), result);
assert.strictEqual(removeVowels('Renan'), 'R1n2n');