/**
 * get-user-by-email.js
 * Vishal Kumar
 */

'use strict';

const createGetTaskColumnByUserId = ({ sequelize }) => {
	const { models: { TaskColumn } } = sequelize;

	const getTaskColumnByUserId = async ({ user_id }) => {
		const criteria = {
			where: { user_id }
		};
		const taskColumn = await TaskColumn.findAll(criteria);
		return { taskColumn };
	};

	return getTaskColumnByUserId;
};

module.exports = {
	createGetTaskColumnByUserId,
};