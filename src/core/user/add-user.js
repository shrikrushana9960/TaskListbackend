
'use strict';

const createAddUser = ({ sequelize }) => {
	const { models: { User } } = sequelize;

	const addUser = async ({ email,password }) => {
		const user = await User.create({ email,password });
		return {
			userId: user.userId,
			email: user.email,
		};
	};

	return addUser;
};

module.exports = {
	createAddUser,
};