const uppercase = require("./uppercase.js");

describe("When uppercase function its called, it", () => {
	it('should return XABLAU when the word xablau is passed as an argument', done => {
		uppercase('xablau', (result) => {
			expect(result).toBe('XABLAU');
		})
		done();
	})
});
