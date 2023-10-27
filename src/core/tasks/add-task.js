"use strict";

const createAddTask = ({ sequelize }) => {
  const {
    models: { Tasks },
  } = sequelize;

  const addTask = async ({ content, column_id, user_id,status }) => {
    const task_column = await Tasks.create({
      content,
      user_id,
      status,
      column_id,
    });
    return {
      id: task_column.id,
      content: task_column.content,
      column_id: task_column.column_id,
      user_id: task_column.user_id,
    };
  };

  return addTask;
};

module.exports = {
  createAddTask,
};
