let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorValor = 0;


for (i = 0; i < numbers.length; i++) {
    if (maiorValor < numbers [i]) {
        maiorValor = numbers[i];
    }
}

let menorValor = maiorValor;

for (i = 0; i < numbers.length; i++) {
    if (numbers [i] < maiorValor && numbers[i] < menorValor) {
        menorValor = numbers[i];
    }
}

console.log(menorValor);


