let generateNumber = require('./the-hundred.js');

describe('When generateNumber function is called', () => {
	it('should be mocked, called, and return 10', () => {
		generateNumber = jest.fn().mockReturnValue(10);

		generateNumber();
		expect(generateNumber).toHaveBeenCalled();
		expect(generateNumber()).toBe(10);
	});

	it('should divide two arguments', () => {
		generateNumber.mockImplementation((a, b) => a / b);
		expect(generateNumber(10, 5)).toBe(2);
	});

	it('should multiply 3 arguments', () => {
		generateNumber.mockImplementation((a, b, c) => a * b * c);
		expect(generateNumber(2, 5, 9)).toBe(90);
		generateNumber.mockReset();
		generateNumber.mockImplementation(a => a * 2);
		expect(generateNumber(8)).toBe(16);
	});


});