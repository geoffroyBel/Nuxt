import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const userExist = async (username, email) => {
	const errors = {};
	const usernames = await prisma.user.findMany({
		where: {
			username,
		},
	});

	const emails = await prisma.user.findMany({
		where: {
			email,
		},
	});

	if (usernames.length) {
		errors.username = "username already exist";
	}
	if (emails.length) {
		errors.userEmail = "email already exist";
	}

	if (usernames.length || emails.length) {
		return { value: true, message: JSON.stringify(errors) };
	}

	return { value: false };
};
// devolis
export const sanitizeUserForFrontend = (user) => {
	if (!user) return user;
	delete user.password;
	delete user.loginType;
	return user;
};
