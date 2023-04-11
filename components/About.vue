<template>
	<div class="flex p-20">
		<div class="hidden md:block">
			<img
				v-motion-pop
				v-motion-pop-visible
				src="~/assets/profile.jpg"
				alt=""
				class="h-[450px] w-1/1 rounded-md object-center" />
		</div>
		<div class="flex-1 space-y-10 flex flex-col px-10">
			<BaseTypography variant="h4">HELLO</BaseTypography>
			<BaseTypography
				v-motion-slide-right
				v-motion-slide-visible-right
				variant="h2"
				>I'm<span class="px-2 font-bold">Geoffroy Bellemare,</span>
				a web developer / Backend / Frontent
			</BaseTypography>
			<BaseTypography variant="p">
				Je suis un développeur autodidacte passionné par la programmation depuis
				plusieurs années, Actuellement en formation de développeur web&mobile,
				je suis à la recherche d'un stage validant l'obtention de mon
				diplôme.</BaseTypography
			>

			<div class="flex space-x-4 mt-20">
				<BaseButton
					v-motion
					:initial="{ opacity: 0 }"
					:enter="{ opacity: 1, scale: 1 }"
					:variants="{ custom: { scale: 2 } }"
					:hovered="{ scale: 1.2 }"
					:delay="200"
					class="contained">
					<a
						href="/img/CV.pdf"
						download
						>Download CV</a
					>
				</BaseButton>
			</div>
		</div>
	</div>
</template>
<script setup>
useBreadCrumb().setTitle("About Me");
</script>
