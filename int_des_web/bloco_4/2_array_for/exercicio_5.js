let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let valor = 0;

for (i = 0; i < numbers.length; i++) {
    if (valor < numbers [i]) {
        valor = numbers[i];
    }
}

console.log(valor);


