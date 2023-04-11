export default defineNuxtRouteMiddleware(async (to) => {
	const user = await useUser();
	console.log("ooooooooooooh");
	console.log(user);
	if (user !== "null" && user !== undefined) {
		navigateTo("/");
	}
});
