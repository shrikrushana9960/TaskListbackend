

'use strict';

const { createUserCore } = require(`./user`);
const { createTaskColumnCore}=require('./task_column');
const { createTaskCore } = require('./tasks');

const createCore = ({ sequelize }) => {
	const User = createUserCore({ sequelize });
	const TaskColumn=createTaskColumnCore({sequelize});
	const Tasks=createTaskCore({sequelize})
	return {
		User,
		TaskColumn,
		Tasks
	};
};

module.exports = {
	createCore,
};