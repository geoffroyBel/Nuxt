import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getProjectByName = async (name) => {
	return await prisma.project.findUnique({
		where: {
			name,
		},
	});
};
export const getAllProject = async () => {
	return await prisma.project.findMany({
		include: {
			skills: true,
		},
	});
};
export const getProjectByUserId = async (userId) => {
	return await prisma.project.findMany({
		where: {
			userId,
		},
	});
};

export const createProject = async (data) => {
	return await prisma.project.create({
		data: data,
	});
};
