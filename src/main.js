const header = document.getElementById("site-header");
let lastScroll = 0;

window.addEventListener("scroll", () => {
	let currentScroll = window.scrollY;

	if (currentScroll > lastScroll) {
		// On descend : cacher le header
		header.classList.remove("translate-y-0");
		header.classList.add("-translate-y-full");
	} else {
		// On remonte : montrer le header
		header.classList.remove("-translate-y-full");
		header.classList.add("translate-y-0");
	}

	lastScroll = currentScroll;
});

d