import { PrismaClient } from "@prisma/client";
const p = new PrismaClient();
export const createSession = async (authToken, userId) => {
	return await p.session.create({
		data: {
			authToken,
			userId,
		},
	});
};

export const updateUserSession = async (userId, authToken) => {
	return await p.session.update({
		where: {
			userId,
		},
		data: {
			authToken,
		},
	});
};
export const getSessionByAuthToken = async (authToken) => {
	const user = await getUserByAuthToken(authToken);
	return { user, authToken };
};

export const getUserByAuthToken = async (authToken) => {
	return await p.session
		.findUnique({
			where: {
				authToken,
			},
		})
		.user();
};
