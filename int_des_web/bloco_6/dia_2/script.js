const submit = document.querySelector('#btn-submit');
submit.addEventListener('click', function (event) {
	event.preventDefault();
	new window.JustValidate('.js-form', {
		submitHandler: function (form, values, ajax) {
			ajax({
				url: 'https://just-validate-api.herokuapp.com/submit',
				method: 'POST',
				data: values,
				async: true,
				callback: function (response) {
					alert('AJAX submit successful! \nResponse from server:' + response)
				},
				error: function (response) {
					alert('AJAX submit error! \nResponse from server:' + response)
				}
			});
		}
	})	
});

let picker = new Pikaday({ 
	field: document.querySelector('#datepicker'),
	onSelect: function(date) {
		console.log(date);
	}
});
console.log(picker);



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
