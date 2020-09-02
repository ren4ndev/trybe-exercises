function qualMenorIndice (array) {
    let maiorNumero = 0;
    let indiceDoMenor = 0;
    for (i in array) {
        if (maiorNumero < array[i]) {
            maiorNumero = array[i];
        }
    }
    for (j in array) {
        if (array[j] < maiorNumero) {
            maiorNumero = array[j];
            indiceDoMenor = j;
        }
    }
    return indiceDoMenor;
}

let numbers = [2, 0, 6, 1, 10 ,7];
let menorIndice = qualMenorIndice (numbers);
console.log(menorIndice);