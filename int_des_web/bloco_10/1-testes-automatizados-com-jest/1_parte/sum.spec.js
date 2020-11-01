const sum = require('./sum.js');

describe('Sum function tests', () => {
	it('should return 9 with parameters 4 and 5', () => {
		expect(sum(4, 5)).toBe(9);
	});
	it('should return 0 with parameters 0 and 0', () => {
		expect(sum(0, 0)).toBe(0);
	});
	it('should throw an error (parameters must be numbers) with parameters 4 and "5"', () => {
		expect(() => {
			sum(4, '5');
		}).toThrow('parameters must be numbers');
	})
});