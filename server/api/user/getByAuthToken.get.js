import { getUserBySessionToken } from "~~/services/sessionService";

export default defineEventHandler(async (event) => {
	const authToken = parseCookies(event).authToken;
	const user = getUserBySessionToken(authToken);
	console.log(authToken);
	return user;
});
