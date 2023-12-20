<template>
	<div class="project">
		<a class="project__img-wrapper" :href="project.link">
			<div class="project__img" :style="{ backgroundImage: 'url(' + project.imageUrl + ')' }"></div>
		</a>
		<div class="project__descr">{{ project.description }}</div>
		<div class="project__btn btn">FULL STORY</div>
	</div>
</template>

<script>
	export default {
		props: ["project"],
	};
</script>