
'use strict';

const { createUserRoute } = require(`./user`);
const { createErrorRoute } = require(`./error`);
const { createNotFoundRoute } = require(`./not-found`);
const {createTaskColumnRoute}=require("./taskColumn")
const {createTaskRoute}=require("./tasks")

module.exports = {
	createUserRoute,
	createErrorRoute,
	createNotFoundRoute,
	createTaskColumnRoute,
	createTaskRoute
};