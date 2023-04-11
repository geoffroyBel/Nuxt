import { v4 as uuid4 } from "uuid";
import {
	createSession,
	getSessionByAuthToken,
	updateUserSession,
} from "../repositories/sessionRepository";
import { sanitizeUserForFrontend } from "./userService";

export const makeSession = async (user, event) => {
	const token = uuid4().replaceAll("-", "");
	try {
		const session = await createSession(token, user.id);
		if (session) {
			setCookie(event, "authToken", token, { path: "/", httpOnly: true });
			return await getUserBySessionToken(token);
		}
	} catch (e) {
		throw Error("Create session rep fail");
	}

	throw Error("Error crerating session");
};
export const updateSession = async (user, event) => {
	const token = uuid4().replaceAll("-", "");
	const session = await updateUserSession(user.id, token);

	if (session) {
		setCookie(event, "authToken", token, { path: "/", httpOnly: true });
		return sanitizeUserForFrontend(user);
	}

	throw Error("Error updateting prev session");
};
export const getUserBySessionToken = async (token) => {
	const session = await getSessionByAuthToken(token);
	return sanitizeUserForFrontend(session.user);
};
