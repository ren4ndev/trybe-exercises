const assert = require("assert");

const names = [
  "Aanemarie",
  "Adervandes",
  "Akifusa",
  "Abegildo",
  "Adicellia",
  "Aladonata",
  "Abeladerco",
  "Adieidy",
  "Alarucha",
];

function containsA() {
  return names.reduce((acc, name) => {
    return acc +
      name.split("").reduce((acumulator, letter) => {
        if (letter === "A" || letter === "a") {
          return acumulator + 1;
        }
				return acumulator;
      }, 0);
  }, 0);
}

assert.deepEqual(containsA(), 20);
