let button = document.createElement('button');
button.style.width = "100px";
button.innerText = "Clique aqui";

document.querySelector('.tarefa1').appendChild(button);

button.addEventListener('click', function()  {
    alert('Você clicou no botão!')
})