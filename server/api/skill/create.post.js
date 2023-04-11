import Joi from "joi";
import { getSkillByName } from "~~/repositories/skillRepository";
import { createSkill } from "../../../repositories/skillRepository";
const schema = Joi.object({
	name: Joi.string().required(),
	category: Joi.string().required(),
});
export default defineEventHandler(async (event) => {
	const body = await readBody(event);
	const { error } = schema.validate(body);

	if (error) {
		throw createError({
			statusCode: 422,
			statusMessage: error.message,
		});
	}

	try {
		const skill = await getSkillByName(body.name);
		if (skill) {
			throw createError({
				statusCode: 409,
				statusMessage: "skill already exist",
			});
		}

		return await createSkill(body.name, body.category);
	} catch (error) {
		throw createError({
			statusCode: 409,
			statusMessage: error.message,
		});
	}
	return {};
});
