

'use strict';

const {  toApiResponse, ApiError, errorCodes: { internalServerErrorCode } } = require(`../../utils`);

const createAddTaskRoute = async ({ core: { Tasks: { addTask } }, router, ExpressValidator: { body, validationResult } }) => {
	router.post(
		`/add`,
		toApiResponse(async ({ body:{ content, column_id, user_id,status } }) => {
			
			try {
				
				let data = await addTask({ content, column_id, user_id,status });
				return { status: 201, data };
			} catch (error) {
				console.log(error)
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
	createAddTaskRoute,
};