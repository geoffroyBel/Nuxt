export const createProject = async (body) => {
	try {
		const project = await useFetch("/api/project/create", {
			method: "POST",
			body,
		});
	} catch (error) {
		throw error;
	}
};

export const getAllProject = async () => {
	return await useFetch("/api/project/list");
};
export const createSkill = async (body) => {
	try {
		const skill = await useFetch("/api/skill/create", {
			method: "POST",
			body,
		});
		navigateTo("/profile/create");
	} catch (error) {
		console.log(error.message);
	}
};

export const getSkills = async () => {
	return await useFetch("/api/skill/list");
};
