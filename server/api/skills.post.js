import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();
const prisma = new PrismaClient({
	datasources: { db: { url: process.env.DATABASE_URL } },
});
export default defineEventHandler(async (event) => {
	const body = readBody(event);

	if (0) {
		throw createError({
			statusCode: 412,
			statusMessage: "Spmething wen t wrong",
		});
	}
	// const skill = await prisma.skill.create({
	// 	data: {
	// 		name: body.name,
	// 	},
	// });
	const car = await prisma.skill.create({
		data: {
			name: "gggg",
		},
	});
	return body;
});
