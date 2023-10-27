/**
 * get-user-by-email.js
 * Vishal Kumar
 */

"use strict";

const {
  validateInput,
  toApiResponse,
  ApiError,
  errorCodes: { internalServerErrorCode },
} = require(`../../utils`);

const createGetTasksByUserIdRoute = async ({
  core: {
    Tasks: { getTasksUserId },
  },
  router,
  ExpressValidator: { param, validationResult },
}) => {
  router.get(
    `/getTasksUserId/:user_id`,

    toApiResponse(async ({ params: { user_id } }) => {
      try {
        let data = await getTasksUserId({ user_id: parseInt(user_id) });
        return { status: 201, data };
      } catch (error) {
        let apiError = new ApiError({
          code: internalServerErrorCode,
          details: error,
        });

        if (error.code) {
          apiError = error;
        }

        throw apiError;
      }
    })
  );

  return router;
};

module.exports = {
  createGetTasksByUserIdRoute,
};
