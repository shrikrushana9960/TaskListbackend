/**
 * get-user-by-email.js
 * Vishal Kumar
 */

'use strict';

const createGetTasksByUserId = ({ sequelize }) => {
	const { models: { Tasks } } = sequelize;

	const getTasksByUserId = async ({ user_id }) => {
		const criteria = {
			where: { user_id,status:"ongoing" }
		};
		const tasks = await Tasks.findAll(criteria);
		return { tasks };
	};

	return getTasksByUserId;
};

module.exports = {
	createGetTasksByUserId,
};