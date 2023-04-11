import { PrismaClient } from "@prisma/client";
import Joi from "joi";
import bcrypt from "bcrypt";
import { sanitizeUserForFrontend } from "../../../services/userService";
import { getUserByEmail } from "../../../repositories/userRepository";
import { makeSession, updateSession } from "../../../services/sessionService";
const schema = Joi.object({
	email: Joi.string().required(),
	password: Joi.string().required(),
});

export default defineEventHandler(async (event) => {
	const body = await readBody(event);
	const { value, error } = schema.validate(body);
	const { email, password } = body;
	if (error) {
		throw createError({ statusCode: 422, statusMessage: error.message });
	}

	const user = await getUserByEmail(email);
	console.log(user);
	if (!user) {
		throw createError({ statusCode: 401, statusMessage: "wrong Email" });
	}

	const isPasswordValid = await bcrypt.compare(password, user.password);
	if (!isPasswordValid) {
		throw createError({ statusCode: 401, statusMessage: "wrong password" });
	}
	return await updateSession(user, event);
});
