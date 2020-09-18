const submit = document.querySelector('#btn-submit');
submit.addEventListener('click', function (event) {
	event.preventDefault();
});

window.onload = function () {
	montaOptions(estados);
};

function montaOptions(estados) {
	let select = document.querySelector('#estado');
	for (let index = 0; index < estados.length; index += 1) {
		let option = document.createElement('option');
		option.innerText = estados[index].Nome;
		option.id = estados[index].ID;
		select.appendChild(option);
	}
}