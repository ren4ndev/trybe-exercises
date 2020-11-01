const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByAge = (age) => {
	const promise = new Promise((resolve, reject) => {
		const listOfDogs = Animals.filter(animal => animal.age === age);
		if(listOfDogs !== 0) {
			resolve(listOfDogs);
		}
		reject('Não há nenhum animal com essa idade');
	})
  return promise;
}

const getAnimal = (name) => {
  const promise = new Promise((resolve, reject) => {
		const dog = Animals.filter(animal => animal.name === name);
		if (dog.length !== 0) {
			resolve(dog[0]);
		} else {
			reject('Nenhum animal com esse nome!');
		} 
	});
	return promise;
}
// ---------------------

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

describe('Find animal by age', () => {
	it('should return the object of Soneca when called with argument 2', async () => {
		const result = await findAnimalByAge(2);
		expect(result).toEqual([{ name: 'Soneca', age: 2, type: 'Dog' }]);
	})
})