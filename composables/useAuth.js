export const useAuthCookie = () => useCookie("authToken");
export const useUser = async () => {
	const authCookie = useAuthCookie().value;
	const user = useState("user");
	console.log(user.value);
	if (authCookie && !user.value) {
		const { data } = await useFetch(`/api/user/getByAuthToken`, {
			headers: useRequestHeaders(["cookie"]),
		});
		user.value = data;

		console.log("---------------------");
		console.log(user.value);
	}

	return user.value;
};
export const userLogout = async () => {
	const authToken = useCookie("authToken");
	console.log(authToken);
	authToken.value = null;
	useState("user").value = null;
	navigateTo("/");
};
export const registerWithEmail = async (body) => {
	const { data, error } = await useFetch("/api/user/register", {
		method: "POST",
		body,
	});
	console.log("ergister with email");
	console.log(body);
	if (error.value) {
		const errorData = error.value;
		const errors = errorData.data.data;
		throw createError({
			statusCode: error.value.statusCode,
			statusMessage: "fail fetch register",
		});
	}

	useState("user").value = data;
	navigateTo("/project");
};

export const loginWithEmail = async (body) => {
	const { data, error } = await useFetch("/api/user/login", {
		method: "POST",
		body,
	});

	console.log(body);
	if (error.value) {
		const errorData = error.value;
		const errors = errorData.data.data;
		throw createError({
			statusCode: error.value.statusCode,
			statusMessage: "fail fetch login",
		});
	}

	useState("user").value = data;
	navigateTo("/project");
};
