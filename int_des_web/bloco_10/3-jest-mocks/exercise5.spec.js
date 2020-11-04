const strings = require('./strings.js');

it('should return lower after upper', () => {

	expect(strings.cxAlta('boo')).toBe('BOO');

	const cxBaixa = jest
		.spyOn(strings, 'cxAlta')
		.mockImplementation(string => string.toLowerCase());

	expect(cxBaixa('UPPER')).toBe('upper');

	strings.cxAlta.mockRestore();

	expect(strings.cxAlta('upper')).toBe('UPPER');
});