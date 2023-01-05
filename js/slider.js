const images = document.querySelectorAll(".screens__img");
const sliderSteps = document.querySelectorAll(".step");

let num = 0;

setInterval(() => {
	images.forEach((img, indx) => {
		const trueClass = img.className.includes("none");

		if (!trueClass) {
			num = indx;
			img.classList.add("none");

			sliderSteps[indx - 1].classList.remove("active");
			return;
		} else if (trueClass && +indx === +num + 1) {
			img.classList.remove("none");

			sliderSteps[indx - 1].classList.add("active");
			return;
		}
		if (images.length - 1 === +num + 1) {
			num = 0;
		}
	});
}, 5000);
