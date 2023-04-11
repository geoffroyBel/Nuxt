import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getUserByEmail = async (email) => {
	return prisma.user.findUnique({
		where: {
			email,
		},
	});
};

export const getUserByUsername = async (username) => {
	return await prisma.user.findUnique({
		where: {
			username,
		},
		select: {
			id: true,
			username: true,
		},
	});
};

export const createUser = async (values) => {
	return await prisma.user.create({
		data: {
			...values,
		},
	});
};
