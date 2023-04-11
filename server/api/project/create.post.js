import Joi from "joi";
import { PrismaClient } from "@prisma/client";
import { isProjectExist, saveProject } from "~~/services/projectService";
const prisma = new PrismaClient();
const schema = Joi.object({
	name: Joi.string().required(),
	url: Joi.string().required(),
	github: Joi.string().required(),
	description: Joi.string().required(),
	progress: Joi.number().required(),
	userId: Joi.number().required(),
	skills: Joi.array().items(Joi.number().required()),
});
/*
  id        Int     @id  @default(autoincrement())
  name      String  @unique()
  url       String
  user      User    @relation(fields: [userId], references: [id])
  userId    Int
  skills    ProjectSkills[]
*/

export default defineEventHandler(async (event) => {
	const body = await readBody(event);
	const { value, error } = schema.validate(body);

	if (error) {
		throw createError({
			statusCode: 422,
			statusMessage: error.message,
		});
	}
	try {
		const existingProject = await isProjectExist(body.name);
		if (existingProject) {
			throw createError({
				statusCode: 409,
				statusMessage: "Project Already exist",
			});
		}

		return await saveProject({ ...body });
	} catch (error) {
		console.log("------errror");
		console.log(error);
		throw createError({
			statusCode: 500,
			statusMessage: error.message,
		});
	}
});
