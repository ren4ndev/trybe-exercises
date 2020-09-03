function inteiroMaisRepetido (numbers) {
    let contRepetido = 0;
    let contNumero = 0;
    let indexMaisRepetido = 0;
    for (index in numbers) {
        for (i in numbers) {
            if (numbers[index] === numbers[i]) {
                contNumero += 1;
            }
        }
        if (contNumero > contRepetido) {
            contRepetido = contNumero;
            indexMaisRepetido = index;
        }
        contNumero = 0;
    }
    return numbers[indexMaisRepetido];
}

let array = [2, 3, 2, 5, 8, 2, 3];
console.log(inteiroMaisRepetido(array));

//Exercicio resolvido com ajuda do gabarito