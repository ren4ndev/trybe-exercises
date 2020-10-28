const habilidades = ['HTML5', 'CSS3', 'JavaScript', 'Flexbox', 'Mobile First'];
const funcao1 = (string, param) => string.replace('x', param);
const fraseInicial = funcao1('Trybe x aqui!', 'Renan');
const funcao2 = (skills, arr) => {
    return `${arr} Minhas principais habilidades são:
    ${skills[0]}
    ${skills[1]}
    ${skills[2]}    
    ${skills[3]}
    ${skills[4]}
    #goTrybe.`
}

console.log(funcao2(habilidades, fraseInicial));