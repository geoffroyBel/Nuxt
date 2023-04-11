import {
	createProject,
	getProjectByName,
} from "../repositories/projectRepository";
export const isProjectExist = async (name) => {
	try {
		return await getProjectByName(name);
	} catch (error) {
		throw new Error("Unable to reach Project db");
	}
};

export const saveProject = async ({
	name,
	url,
	github,
	userId,
	description,
	progress,
	skills,
}) => {
	const data = {
		name,
		url,
		github,
		userId,
		description,
		progress,
		skills: {
			create: skills.map((id) => ({
				skill: {
					connect: {
						id: id,
					},
				},
			})),
		},
	};
	console.log(data);
	// return data;
	return await createProject(data);
};
