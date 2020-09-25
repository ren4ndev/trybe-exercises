const botao = document.querySelector('#botao');
let click = 0;
botao.addEventListener('click', () => document.querySelector('p').innerHTML = click += 1);

// const botao = document.querySelector('#botao');
// let click = 0;
// botao.addEventListener('click', function () {
//     click += 1;
//     const parag = document.querySelector('p')
//     parag.innerHTML = click;
// });