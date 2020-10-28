const getNumber = () => {
  return Math.round(Math.random() * 50);
};

const division = (number) => {
	const factor = [2, 3, 5, 10];
	const result = factor.map(factor => number / factor);
	return result;
}

const lowerThanEightThousand = () => {
  return new Promise((resolve, reject) => {
    const arr = [];
    for (let index = 0; index < 10; index += 1) {
      arr.push(getNumber());
		}
    const square = arr.map((number) => number * number);
		const result = square.reduce((acc, curr) => acc + curr);
    if (result < 8000) {
      resolve(result);
    } else {
      reject('É mais de oito mil! Essa promise deve estar quebrada!');
    }
  });
};


lowerThanEightThousand()
	.then((number) => division(number))
	.then(result => console.log(result.reduce((acc, curr) => acc + curr)))
	.catch(msg => console.log(msg));