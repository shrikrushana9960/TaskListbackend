/**
 * user/index.js
 * Vishal Kumar
 */

'use strict';

const { createAddTaskColumn } = require(`./add-task-column`);
const { createGetTaskColumnByUserId } = require("./get-task-column-by-user_id");

const createTaskColumnCore = ({ sequelize }) => {
	const addTaskColumn = createAddTaskColumn({ sequelize });
	const getTaskColumnByUserId = createGetTaskColumnByUserId({ sequelize });
	return {
        addTaskColumn,
		getTaskColumnByUserId
	};
};

module.exports = {
	createTaskColumnCore,
};