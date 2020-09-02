let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];


function qualMaiorNome (names) {
    let maiorNome = "";
    for (i in names) {
        if (names[i].length > maiorNome.length) {
            maiorNome = names[i];
        }
    }
    return maiorNome;
}

console.log(qualMaiorNome(nomes));
