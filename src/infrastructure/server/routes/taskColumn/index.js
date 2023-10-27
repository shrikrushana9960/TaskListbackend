"use strict";

const { Router } = require(`express`);
const ExpressValidator = require(`express-validator`);
const { createAddTaskColumnRoute } = require(`./add-task-column`);
const { createGetTaskColumnByUserIdRoute } = require("./get-task-column-by-user_id");

const createTaskColumnRoute = ({ core }) => {
  const router = new Router();

  createAddTaskColumnRoute({ core, router, ExpressValidator });
  createGetTaskColumnByUserIdRoute({ core, router, ExpressValidator })
  return router;
};

module.exports = {
    createTaskColumnRoute,
};
