'use strict';

const { createAddTask } = require(`./add-task`);
const { createGetTasksByUserId } = require("./get-task-by-user_id");
const { createUpdateTasksById } = require("./update-task-by-id");
// const { createGetTaskColumnByUserId } = require("./get-task-column-by-user_id");

const createTaskCore = ({ sequelize }) => {
	const addTask = createAddTask({ sequelize });
	const getTasksUserId = createGetTasksByUserId({ sequelize });
	const updateTasksById = createUpdateTasksById({ sequelize });
	return {
        addTask,
		getTasksUserId,
		updateTasksById
	};
};

module.exports = {
	createTaskCore,
	
};