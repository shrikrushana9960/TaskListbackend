/**
 * sequelize/index.js
 * Vishal Kumar
 */

'use strict';

require(`dotenv`).config();
const Sequelize = require(`sequelize`);

const { postgreConfig: { dialect } } = require(`../../config`);
const { url, logging, ssl, dialectOptions, sync } = require(`./config`);
const { User: { createUserModel },Tasks:{createTaskModel},TaskColumn:{createTaskColumnModel} } = require(`./models`);

const createSequelize = async () => {
	const sequelize = new Sequelize(url, {
		dialect,
		logging,
		ssl,
		dialectOptions
	});

	// Create Models
	const User = createUserModel({ sequelize, Sequelize });
	const TaskColumn=createTaskColumnModel({ sequelize, Sequelize })
	const Tasks=createTaskModel({ sequelize, Sequelize })
	// Associate Models
	const models = {
		User,
		TaskColumn,
		Tasks
	};
	Object.values(models).forEach(model => {
		if (typeof model.associate !== `function`) {
			return;
		}
		model.associate(models);
	});

	if (sync) await sequelize.sync({ force: true });

	return {
		db: sequelize,
		models,
		close: () => sequelize.connectionManager.close(),
		
	};
};

module.exports = {
	createSequelize,
};