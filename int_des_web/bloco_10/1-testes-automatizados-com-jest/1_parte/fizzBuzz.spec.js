const myFizzBuzz = require('./fizzBuzz.js');

describe('When myFizzBuzz function tests its called, it', () => {
	it('should return fizzbuzz when its called with a number divisible for 3 and 5', () => {
		expect(myFizzBuzz(15)).toBe('fizzbuzz');
	});

	it('should return fizz when its called with a number divisible only for 3', () => {
		expect(myFizzBuzz(9)).toBe('fizz');
	});

	it('should return buzz when its called with a number only divisible for 5', () => {
		expect(myFizzBuzz(10)).toBe('buzz');
	});

	it('should return fizzbuzz when its called with a number divisible for 3 and 5', () => {
		expect(myFizzBuzz(15)).toBe('fizzbuzz');
	});

	it('should return the argument when its called with a number thats not divisible for 3 or 5', () => {
		expect(myFizzBuzz(7)).toBe(7);
	}); 
});