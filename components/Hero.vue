<template>
	<div class="flex w-full h-screen bg-primary-light">
		<div class="flex-1 flex px-20">
			<div class="mt-auto w-[400px] flex flex-col justify-center space-y-4">
				<h3
					class="block uppercase font-bold text-xl text-gray-400 leading-normal">
					HELLO
				</h3>
				<h1 class="text-6xl text-gray-700 font-medium tracking-widest">
					<span class="font-thin">I'm</span> Geoffroy Bellemare
				</h1>
				<h3 class="block capitalize text-xl text-gray-400 leading-loose mb-5">
					Web Developpeur
				</h3>

				<div class="flex space-x-4 pt-5 pb-20">
					<button class="btn bg-primary-dark text-white capitalize">
						Hire Me
					</button>
					<button class="btn border border-primary-dark">PortFolio</button>
				</div>
			</div>
			<!-- -->
		</div>
		<div class="flex-1 flex flex-col justify-end items-center al">
			<svg
				width="400"
				height="450"
				class="mb-5">
				<defs>
					<clipPath id="svg-draw">
						<path
							ref="target"
							class="origin-center"
							:d="path"
							fill="bg-primary" />
					</clipPath>
				</defs>
				<path
					class="origin-center rotate-90"
					:d="path"
					fill="white" />
				<path
					class="origin-center bg-red-100"
					:d="path"
					fill="#D995D9" />

				<image
					class="w-[450px] object-top"
					clip-path="url(#svg-draw)"
					xlink:href="~/assets/profile.jpg" />
			</svg>
		</div>
	</div>
</template>
<style scoped>
figure {
	border-radius: 50% 50% 48% 52% / 19% 19% 77% 80%;
}
</style>
<script setup>
import { animate, linear, interpolate } from "popmotion";
const w = 400;
const path = ref();

const target = ref();
const draw = (value) => {
	const p1 = { x: (1 / 3) * w, y: 0 };
	const p2 = { x: 0, y: (2 / 3) * w };
	const p3 = { x: (2 / 3) * w, y: 0 };
	const p4 = { x: w, y: (2 / 3) * w };
	const getYfrom = (x, _a, _b) => {
		const b = { ..._b, y: _b.y * -1 };
		const a = { ..._a, y: _a.y * -1 };
		const coef = (b.y - a.y) / (b.x - a.x);
		let t = b.y + coef * b.x * -1;
		return (coef * x + t) * -1;
	};
	const m = `M ${(1 / 6) * w} ${getYfrom((1 / 6) * w, p1, p2)}`;
	const A = `L ${(1 / 10) * w} ${getYfrom((1 / 10) * w, p1, p2)}`;
	const seg = `Q ${-value} ${getYfrom(-value, p1, p2)} ${(1 / 4) * w} ${w}`;
	const seg2 = `L ${(3 / 4) * w} ${w}`;
	const B = `Q ${w + value} ${getYfrom(w + value, p3, p4)} ${
		w - (1 / 10) * w
	} ${getYfrom(w - (1 / 10) * w, p3, p4)}`;
	const seg3 = `L ${w - (1 / 6) * w} ${getYfrom(w - (1 / 6) * w, p3, p4)}`;
	const C = `Q ${w / 2} -${10 + value} ${(1 / 6) * w} ${getYfrom(
		(1 / 6) * w,
		p1,
		p2
	)}`;
	return `${m} ${A} ${seg} ${seg2} ${B} ${seg3} ${C}`;
};
path.value = draw(interpolate([0, 220], [40, 60])(0));
const variants = ref({
	initial: {
		rotate: 0,
		scale: 0.2,
	},
	enter: {
		scale: 0.8,
		rotate: 360,

		transition: {
			onUpdate: (e) => {
				path.value = draw(interpolate([0, 220], [40, 60])(e));
			},
			repeat: Infinity,
			delay: 1000,
			duration: 5000,
			repeatType: "mirror",
		},
	},
});

const motionInstance = useMotion(target, variants);

// animate({
// 	to: [40, 60, 40],
// 	repeat: 6,
// 	duration: 3000,
// 	ease: linear,

// 	onUpdate: (latest) => (path.value = draw(latest)),
// });
</script>
