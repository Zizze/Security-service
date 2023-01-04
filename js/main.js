const menuBtn = document.querySelector(".nav__burger");
const menuWindow = document.querySelector(".window-menu");
const menuCloseBtn = document.querySelector(".window-menu__close");
const menuListMob = document.querySelectorAll(".window-menu__list li");
const menuList = document.querySelectorAll(".nav__row li");

const ourServiceEl = document.querySelector(".services");
const feelSafeEl = document.querySelector(".safe");
const contactUsEl = document.querySelector(".contacts");

const safeBtn = document.querySelector(".safe__button");
const mainScreenBtn = document.querySelector(".bg-screen__button");

const closeMenu = () => {
	setTimeout(() => menuWindow.classList.add("none"), 300);
	document.body.style.overflow = "auto";
};

const scrollToContacts = () => contactUsEl.scrollIntoView({ block: "start", behavior: "smooth" });

menuBtn.onclick = () => {
	menuWindow.classList.remove("none");

	if (!menuWindow.className.includes("none")) {
		document.body.style.overflow = "hidden";
	}
};

menuCloseBtn.onclick = () => closeMenu();

safeBtn.onclick = (e) => {
	e.preventDefault();
	scrollToContacts();
};

mainScreenBtn.onclick = (e) => {
	e.preventDefault();
	scrollToContacts();
};

menuListMob.forEach((el) => {
	el.onclick = (e) => {
		e.preventDefault();

		const blockName = e.target.textContent.toLowerCase();

		switch (blockName) {
			case "our services":
				closeMenu();
				ourServiceEl.scrollIntoView({ block: "start", behavior: "smooth" });
				break;

			case "home":
				closeMenu();
				document.body.scrollIntoView({ block: "start", behavior: "smooth" });
				break;

			case "about us":
				closeMenu();
				feelSafeEl.scrollIntoView({ block: "start", behavior: "smooth" });
				break;

			case "contact us":
				closeMenu();
				scrollToContacts();
				break;
		}
	};
});

menuList.forEach((el) => {
	el.onclick = (e) => {
		e.preventDefault();

		const blockName = e.target.textContent.toLowerCase();

		switch (blockName) {
			case "our services":
				ourServiceEl.scrollIntoView({ block: "start", behavior: "smooth" });
				break;

			case "about us":
				feelSafeEl.scrollIntoView({ block: "start", behavior: "smooth" });
				break;

			case "contact us":
				contactUsEl.scrollIntoView({ block: "start", behavior: "smooth" });
				break;
		}
	};
});
