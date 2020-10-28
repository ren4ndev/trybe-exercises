function somaArray (number) {
    let arrayNumbers = [];
    let soma = 0;
    for (i = 0; i <= number; i += 1) {
        arrayNumbers.push(i);
    }
    for (index in arrayNumbers) {
        soma += arrayNumbers[index];
    }
    return soma;
}

console.log(somaArray(5));