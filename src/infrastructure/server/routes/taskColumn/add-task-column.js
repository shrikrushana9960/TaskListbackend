
'use strict';

const { validateInput, toApiResponse, ApiError, errorCodes: { internalServerErrorCode } } = require(`../../utils`);

const createAddTaskColumnRoute = async ({ core: { TaskColumn: { addTaskColumn } }, router, ExpressValidator: { body, validationResult } }) => {
	router.post(
		`/add`,
		toApiResponse(async ({ body:{ title, user_id } }) => {
			
			try {
				console.log("hii")
				let data = await addTaskColumn({ title, user_id });
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
	createAddTaskColumnRoute,
};