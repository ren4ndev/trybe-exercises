const longestWord = string => {
    const frase = string.split(' ');
    let maiorPalavra = '';
    for (let index = 0; index < frase.length; index += 1) {
        if (frase[index].length > maiorPalavra.length) {
            maiorPalavra = frase[index];
        }
    }
    return maiorPalavra;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")); // retorna 'aconteceu'