const { cxAlta, primeiraLetra, junta } = require('./playing-with-strings');

jest.mock('./playing-with-strings');

it('should return a string to lower case', () => {
	cxAlta.mockImplementation((string) => {
		return string.toLowerCase();
	});
	expect(cxAlta('HAHAHA')).toBe('hahaha');
});

it('should return the last letter', () => {
	primeiraLetra.mockImplementation((string) => {
		return string[string.length - 1];
	});
	expect(primeiraLetra('expect')).toBe('t');
});

it('should concatenate 3 strings', () => {
	junta.mockImplementation((string1, string2, string3) => {
		return string1 + string2 + string3;
	});
	expect(junta('Oi ', 'meu nome é ', 'Renan')).toBe('Oi meu nome é Renan');
});

it('should act normal', () => {
	cxAlta.mockImplementation((string) => {
		return string.toLowerCase();
	});
	cxAlta.mockRestore();
	expect(cxAlta('hahaha')).toBe('HAHAHA');
})
