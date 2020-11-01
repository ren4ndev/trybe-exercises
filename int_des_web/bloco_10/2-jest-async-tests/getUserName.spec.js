const { findUserById, getUserName } = require('./getUserName');

// describe('When a user is find or not, it', () => {
// 	it('should return the name of the user', () => {
// 		return expect(getUserName(4)).resolves.toEqual('Mark');
// 	})
// 	it('should return an error when a false id is passed as an argument', () => {
// 		return expect(getUserName(7)).rejects.toEqual({ error: "User with " + 7 + " not found." });
// 	})
// })

describe('When a user is find or not, it', () => {
	it('should return the name of the user', async () => {
		const response = await getUserName(4);
		expect(response).toBe('Mark');
	});
	it('should return an error when a false id is passed as an argument', async () => {
		try {
			await getUserName(7);
		} catch (error) {
			expect(error).toEqual({ error: "User with " + 7 + " not found." });
		}
	});
})