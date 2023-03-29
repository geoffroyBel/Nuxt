export const useBreadCrumb = (title = "Not Specified") => {
	const name = useState("breadCrumb", () => title);
	const setTitle = (_title) => {
		name.value = _title;
	};
	return { title: name, setTitle };
};
