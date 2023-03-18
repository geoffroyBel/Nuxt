<template>
	<div class="p-20 bg-primary-light">
		<BaseTypography
			variant="h4"
			align="center"
			>Services</BaseTypography
		>
		<BaseTypography
			variant="h2"
			class="mb-20"
			align="center"
			>What can i do for you !</BaseTypography
		>
		<div class="grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4">
			<div>
				<BaseCard
					title="test"
					body="whatever">
					<template v-slot:header>
						<div class="flex justify-between">
							<BaseIcon
								name="skill"
								size="sm" />
							<BaseTypography variant="h5">01</BaseTypography>
						</div>
						<BaseTypography
							class="mb-5"
							variant="h4"
							>UX/DESIGN</BaseTypography
						>
					</template>
					<template v-slot:body>
						<BaseTypography variant="p"
							>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
							possimus molestias ducimus ipsa ipsum! Cum eum ipsa itaque
							accusantium debitis tempore ut adipisci id beatae architecto
							nulla, dolores voluptate pariatur.</BaseTypography
						>
					</template>
				</BaseCard>
			</div>
			<div>
				<BaseCard
					title="test"
					body="whatever">
					<template v-slot:header>
						<div class="flex justify-between">
							<BaseIcon
								name="skill"
								size="sm" />
							<BaseTypography variant="h5">01</BaseTypography>
						</div>
						<BaseTypography
							class="mb-5"
							variant="h4"
							>UX/DESIGN</BaseTypography
						>
					</template>
					<template v-slot:body>
						<BaseTypography variant="p"
							>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
							possimus molestias ducimus ipsa ipsum! Cum eum ipsa itaque
							accusantium debitis tempore ut adipisci id beatae architecto
							nulla, dolores voluptate pariatur.</BaseTypography
						>
					</template>
				</BaseCard>
			</div>
			<div>
				<BaseCard
					title="test"
					body="whatever">
					<template v-slot:header>
						<div class="flex justify-between">
							<BaseIcon
								name="skill"
								size="sm" />
							<BaseTypography variant="h5">01</BaseTypography>
						</div>
						<BaseTypography
							class="mb-5"
							variant="h4"
							>UX/DESIGN</BaseTypography
						>
					</template>
					<template v-slot:body>
						<BaseTypography variant="p"
							>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
							possimus molestias ducimus ipsa ipsum! Cum eum ipsa itaque
							accusantium debitis tempore ut adipisci id beatae architecto
							nulla, dolores voluptate pariatur.</BaseTypography
						>
					</template>
				</BaseCard>
			</div>
		</div>
	</div>
</template>
<script setup></script>
