import { PrismaClient } from "@prisma/client";
import Joi from "joi";
import bcrypt from "bcrypt";
import { userExist } from "../../../services/userService";
import { createUser } from "../../../repositories/userRepository";
import { makeSession } from "../../../services/sessionService";
const schema = Joi.object({
	username: Joi.string().required(),
	email: Joi.string().required(),
	password: Joi.string().required(),
});
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
	const body = await readBody(event);

	const { error, value } = schema.validate(body);
	if (error) {
		console.log(error);
		throw createError({
			statusCode: 412,
			statusMessage: error.message,
		});
	}
	const { username, email, password } = body;
	const { value: exist, message: statusMessage } = await userExist(
		username,
		email
	);

	if (exist) {
		throw createError({
			statusCode: 403,
			statusMessage,
		});
	}
	const hashPassword = await bcrypt.hash(password, 10);

	const user = await createUser({
		...body,
		password: hashPassword,
	});
	return await makeSession(user, event);
	// return body;
});
