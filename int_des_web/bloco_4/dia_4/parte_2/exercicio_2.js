function qualMaiorIndice (array) {
    let maiorNumero = 0;
    let indiceDoMaior = 0;
    for (i in array) {
        if (maiorNumero < array[i]) {
            indiceDoMaior = i -1;
        }
    }
    return indiceDoMaior;
}

let numbers = [2, 3, 6, 7, 10 ,1];
let maiorIndice = qualMaiorIndice (numbers);
console.log(maiorIndice);