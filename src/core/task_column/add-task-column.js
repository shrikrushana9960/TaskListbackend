"use strict";

const createAddTaskColumn = ({ sequelize }) => {
  const {
    models: { TaskColumn },
  } = sequelize;

  const addTaskColumn = async ({ title, user_id }) => {
  
    const task_column = await TaskColumn.create({ title, user_id });
    console.log({task_column})
    return task_column
  };

  return addTaskColumn;
};

module.exports = {
  createAddTaskColumn,
};
