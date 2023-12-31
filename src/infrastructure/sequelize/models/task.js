
'use strict';

const createTaskModel = ({ sequelize, Sequelize: { STRING, INTEGER } }) => {
	const Tasks = sequelize.define(`tasks`, {
		id: {
			allowNull: false,
			primaryKey: true,
			type: INTEGER,
			autoIncrement: true,
		},
		content: {
			type: STRING,
			allowNull: false,
		},
		status: {
			type: STRING,
			allowNull: false,
		},
        column_id: {
			type: INTEGER,
			allowNull: false,
		},
        user_id: {
            type: INTEGER
        },
	}, {
		freezeTableName: true,
		timestamps: false,
	});

	return Tasks;
};

module.exports = {
	createTaskModel,
};