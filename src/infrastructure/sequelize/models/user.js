
'use strict';

const createUserModel = ({ sequelize, Sequelize: { STRING, INTEGER } }) => {
	const User = sequelize.define(`User`, {
		userId: {
			allowNull: false,
			primaryKey: true,
			type: INTEGER,
			autoIncrement: true,
		},
		email: {
			type: STRING,
			allowNull: false,
			unique: true,
			validate: {
				isEmail: true,
			},
		},
		password: {
			type: STRING,
			allowNull: false
		},
	}, {
		freezeTableName: true,
		timestamps: false,
	});

	return User;
};

module.exports = {
	createUserModel,
};