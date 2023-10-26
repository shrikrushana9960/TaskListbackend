
'use strict';

const createTaskColumnModel = ({ sequelize, Sequelize: { STRING, INTEGER } }) => {
	const TaskColumn = sequelize.define(`task_column`, {
		column_id: {
			allowNull: false,
			primaryKey: true,
			type: INTEGER,
			autoIncrement: true,
		},
		title: {
			type: STRING,
			allowNull: false,
		},
        user_id: {
            type: INTEGER
        },
	}, {
		freezeTableName: true,
		timestamps: false,
	});

	return TaskColumn;
};

module.exports = {
	createTaskColumnModel,
};