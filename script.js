const lenis = new Lenis({ lerp: 0.1 });

function raf(time) {
	lenis.raf(time);
	requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

//---------------------------------------------------------

gsap.registerPlugin(ScrollTrigger);

const images = document.querySelectorAll(".image");

const middleImage = (images.length - 1) / 2;

const tl = gsap.timeline();

const secondImage = [images[1], images[3]];

const lastImage = [images[0], images[4]];

ScrollTrigger.create({
	animation: tl,
	trigger: ".row-gallery-container",
	start: "top top",
	end: "+=3500",
	scrub: true,
	pin: true,
});

gsap.set(images[middleImage], {
	width: "45%",
	height: "70vh",
	filter: "brightness(1)",
});

secondImage.forEach((image) => {
	gsap.set(image, {
		width: "15%",
		height: "40vh",
	});
});

lastImage.forEach((image) => {
	gsap.set(image, {
		width: "10%",
		height: "30vh",
	});
});

tl.to(images[middleImage], {
	width: "100%",
	height: "99vh",
	filter: "brightness(0.6)",
	borderRadius: 0,
});

secondImage.forEach((image) => {
	tl.to(
		image,
		{
			width: "0%",
			height: "30vh",
		},
		0,
	);
});

lastImage.forEach((image) => {
	tl.to(
		image,
		{
			width: "0%",
			height: "20vh",
		},
		0,
	);
});

//-----------------------------------------------------------------------------------------------

const parts = document.querySelectorAll(".row-part");

const rows = document.querySelectorAll(".row");

const slideTl = gsap.timeline();

ScrollTrigger.create({
	animation: slideTl,
	trigger: ".slide-container",
	start: "top 100%",
	end: "+=4500",
	scrub: 1,
});

rows.forEach((row, index) => {
	const direction = index % 2 === 0 ? ["0", "-70%"] : ["-70%", "0"];

	slideTl.fromTo(
		row,
		{
			x: direction[0],
		},
		{
			x: direction[1],
		},
		0,
	);
});

//-----------------------------------------------------------------------------------------------

const row = document.querySelectorAll("#row");

const gridTl = gsap.timeline();

ScrollTrigger.create({
	animation: gridTl,
	trigger: ".gallery-grid",
	start: "center 50% ",
	end: "+=4000",
	scrub: true,
	pin: true,
});

row.forEach((row, index) => {
	const colImage = Array.from(row.children);

	colImage.forEach((image, index) => {
		gsap.set(image, {
			width: "30%",
			filter: "grayscale(80%)",
		});

		if (index !== 1) {
			gridTl.to(
				image,
				{
					borderRadius: 0,
					width: 0,
					filter: "grayscale(0%)",
				},
				0,
			);
		} else {
			gridTl.to(
				image,
				{
					borderRadius: 0,
					width: "100%",
					filter: "grayscale(0%)",
				},
				0,
			);
		}
	});

	gsap.set(row, {
		height: "30vh",
	});

	if (index !== 1) {
		gridTl.to(
			row,
			{
				height: 0,
				borderRadius: 0,
			},
			0,
		);
	} else {
		gridTl.to(
			row,
			{
				height: "100vh",
				borderRadius: 0,
			},
			0,
		);
	}
});

//-----------------------------------------------------------------------------------------------

const gridSlideTl = gsap.timeline();

const gridSlideImg = document.querySelectorAll(
	".gallery-grid-slide > div > img",
);

ScrollTrigger.create({
	animation: gridSlideTl,
	trigger: ".gallery-grid-slide",
	start: "center center ",
	end: "+=5000",
	scrub: true,
	pin: true,
});

gridSlideImg.forEach((image, index) => {
	if ((gridSlideImg.length - 1) / 2 !== index) {
		gridSlideTl.to(image, {
			x: "0%",
			y: "0%",
		});
	}
});
