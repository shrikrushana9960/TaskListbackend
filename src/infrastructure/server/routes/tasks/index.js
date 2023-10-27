"use strict";

const { Router } = require(`express`);
const ExpressValidator = require(`express-validator`);
const { createAddTaskRoute } = require("./add-task");
const { createGetTasksByUserIdRoute } = require("./get-task-by-user_id");
const { createUpdateTaskByIdRoute } = require("./update-task-by-id");

// const { createGetTaskColumnByUserIdRoute } = require("./get-task-column-by-user_id");

const createTaskRoute = ({ core }) => {
  const router = new Router();

  createAddTaskRoute({ core, router, ExpressValidator });
  createGetTasksByUserIdRoute({ core, router, ExpressValidator })
  createUpdateTaskByIdRoute({ core, router, ExpressValidator })
  return router;
};

module.exports = {
    createTaskRoute,
};
