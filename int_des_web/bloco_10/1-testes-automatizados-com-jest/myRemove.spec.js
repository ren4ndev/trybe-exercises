const myRemove = require('./myRemove.js');

describe('myRemove function tests', () => {
	it('should return the expected arrays', () => {
		const arr = [1, 2, 3, 4];
		expect(myRemove(arr, 3)).toEqual([1, 2, 4]);
		expect(myRemove(arr, 3)).not.toEqual(arr);
		expect(myRemove(arr, 5)).toEqual(arr);
	})
	it('should not modify the parameter array', () => {
		const arr = [1, 2, 3, 4];
		myRemove(arr, 1);
		expect(arr).toBe(arr);
	})
});