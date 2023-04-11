import { getAllProject } from "~~/repositories/projectRepository";

export default defineEventHandler(async (event) => {
	try {
		return await getAllProject();
	} catch (error) {
		throw createError({
			statusCode: 500,
			statusMessage: error.message,
		});
	}
});
