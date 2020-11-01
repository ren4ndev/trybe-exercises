const getRepos = require('./fetch-repos.js');
const fetch = require('node-fetch');

describe('Request from API the repositories of Tryber', () => {
	it('should contain two specifics repositories', () => {
		expect.assertions(2);
		return getRepos('https://api.github.com/users/tryber/repos').then(list => {
			expect(list).toContain('event-project-color-guess');
			expect(list).toContain('exercise-contextAPI-refactoring');
		});
	});
});