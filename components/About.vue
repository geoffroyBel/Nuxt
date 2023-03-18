<template>
	<div class="flex p-20">
		<div>
			<img
				src="~/assets/profile.jpg"
				alt=""
				class="h-[450px] w-1/1 rounded-md object-center" />
		</div>
		<div class="flex-1 space-y-10 flex flex-col px-10">
			<BaseTypography variant="h4">HELLO</BaseTypography>
			<BaseTypography variant="h2"
				>I'm<span class="px-2 font-bold">Geoffroy Bellemare,</span>
				a web developer / Backend / Frontent
			</BaseTypography>
			<BaseTypography variant="p">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
				laudantium dicta aliquam eius fuga quae neque dolorum. Quod ipsam
				quaerat, qBasedem possimus suscipit consequuntur reiciendis blanditiis
				sunt tenetur! Maxime, labore!</BaseTypography
			>

			<div class="flex space-x-4 mt-20">
				<BaseButton class="contained"> Download CV </BaseButton>
			</div>
		</div>
	</div>
</template>
<script setup></script>
