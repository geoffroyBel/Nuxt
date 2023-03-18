import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();
const prisma = new PrismaClient({
	datasources: {
		db: {
			url: "mysql://b8816947a9de57:2a9be7a5@us-cdbr-east-06.cleardb.net/heroku_803f032d43b2db8?reconnect=true",
		},
	},
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
