import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getSkillByName = async (name) => {
	return await prisma.skill.findUnique({
		where: {
			name,
		},
	});
};

export const getAllSkills = async () => {
	return await prisma.skill.findMany();
};

export const createSkill = async (name, category) => {
	return await prisma.skill.create({
		data: {
			name,
			category,
		},
	});
};
