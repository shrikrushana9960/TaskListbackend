/**
 * models/index.js
 * Vishal Kumar
 */

"use strict";

const User = require(`./user`);
const TaskColumn = require("./task_column");
const Tasks = require("./task");
module.exports = {
  User,
  TaskColumn,
  Tasks,
};
