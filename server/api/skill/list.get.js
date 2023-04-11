import { getAllSkills } from "~~/repositories/skillRepository";

export default defineEventHandler(async (event) => {
	return await getAllSkills();
});
