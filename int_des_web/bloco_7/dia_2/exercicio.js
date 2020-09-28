const lesson1 = {
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

//	Exercício 1
const addShift = (obj, key, value) => {
	obj[key] = value;
}
addShift(lesson2, 'turno', 'manhã');
console.table(lesson2);

//	Exercício 2

const listKeys = obj => Object.keys(obj);
console.log(listKeys(lesson1));

//	Exercicio 3
const objLength = obj => Object.entries(obj).length;
console.log(objLength(lesson1));

//	Exercicio 4
const listValues = obj => Object.values(obj);
console.log(listValues(lesson1));
