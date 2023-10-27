

'use strict';

const createUpdateTasksById = ({ sequelize }) => {
	const { models: { Tasks } } = sequelize;

	const updateTask = async ({ id, column_id,status }) => {
		const criteria = { where: { id } };
		const dataToUpdate = { column_id,status };
		await Tasks.update(dataToUpdate, criteria);
		return;
	};

	return updateTask;
};

module.exports = {
	createUpdateTasksById,
};