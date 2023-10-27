

'use strict';

const { validateInput, toApiResponse, ApiError, errorCodes: { internalServerErrorCode } } = require(`../../utils`);

const createUpdateTaskByIdRoute = async ({ core: { Tasks: { updateTasksById } }, router, ExpressValidator: { body, validationResult } }) => {
	router.put(
		`/updateTasksById`,
		validateInput(validationResult),
		toApiResponse(async ({ body: { id, column_id,status } }) => {
			try {
				await updateTasksById({ id, column_id,status });
				return {};
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
	createUpdateTaskByIdRoute,
};