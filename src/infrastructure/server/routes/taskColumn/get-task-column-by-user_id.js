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

const createGetTaskColumnByUserIdRoute = async ({
  core: {
    TaskColumn: { getTaskColumnByUserId },
  },
  router,
  ExpressValidator: { param, validationResult },
}) => {
  router.get(
    `/getTaskColumnByUserId/:user_id`,

    toApiResponse(async ({ params: { user_id } }) => {
      try {
        let data = await getTaskColumnByUserId({ user_id: parseInt(user_id) });
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
  createGetTaskColumnByUserIdRoute,
};
