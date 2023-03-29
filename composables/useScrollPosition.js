export const useScrollPosition = () => {
	const scrollPosition = ref(null);
	const showFullNav = ref(true);

	const handleScroll = () => {
		if (process.client) {
			var currentScrollPosition = window.scrollY;
			if (currentScrollPosition < scrollPosition.value) {
				console.log("Scrolling up");
				showFullNav.value = true;
				//your desire logic
			} else {
				showFullNav.value = false;
				console.log("Scrolling down");
				//your desire logic
			}
			scrollPosition.value = currentScrollPosition;
		}
	};
	if (process.client) {
		window.addEventListener("scroll", handleScroll);
	}
	const scrollTop = () => {
		showFullNav.value = false;
		if (process.client) {
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: "smooth",
			});
		}
	};
	return { showFullNav, scrollTop };
	//const scrollPosition = ref(window.pageYOffset);
	// const scrollDirection = ref(null);

	// const updateScrollPosition = () => {
	// 	const newPosition = window.pageYOffset;
	// 	if (newPosition > scrollPosition.value) {
	// 		scrollDirection.value = "down";
	// 	} else if (newPosition < scrollPosition.value) {
	// 		scrollDirection.value = "up";
	// 	}
	// 	scrollPosition.value = newPosition;
	// };

	// onMounted(() => {
	// 	window.addEventListener("scroll", updateScrollPosition);
	// });

	// onUnmounted(() => {
	// 	window.removeEventListener("scroll", updateScrollPosition);
	// });

	// return {
	// 	scrollPosition,
	// 	scrollDirection,
	// };
};
