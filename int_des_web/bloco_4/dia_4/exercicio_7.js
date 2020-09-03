function verificaFimPalavra (word, ending) {
    let tamanhoEnding = ending.length;
    let tamanhoWord = word.length;
    let inicioSlice = (tamanhoWord - tamanhoEnding);
    let palavraCortada = word.slice(inicioSlice, tamanhoWord);

    if (palavraCortada == ending) {
        return true;
    } else {
        return false;
    }
}

console.log(verificaFimPalavra('joaofernando', 'fernando'));