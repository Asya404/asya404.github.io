<template>
	<header>
		<div class="container">
			<div class="header">Strona osobista</div>
		</div>
	</header>
	<section class="section-hero">
		<div class="container">
			<div class="hero">
				<div class="hero__photo-wrapper">
					<div class="hero__photo" :style="{ backgroundImage: 'url(/assets/hero.jpg)' }"></div>
				</div>
				<div class="hero__text">
					<h1>I am Nastassia Kanavalava</h1>
					<p>
						My name's Nastassia (you can call me Asia) and I am a frontend developer. I specialise in VueJS:
						<br />
						<br />
						building SPAs, creating landing pages, integrating analytics tools like HubSpot, building and maintaining javascript frontend components in VueJS (both 2 and 3 in both options and composition api).
						<br />
						<br />
						I am able to work while maintaining focus, I have ease to understand domains.
						<br />
						<br />
						When communicating I am very calm, understanding and stoic. I also enjoy understanding all of the important things.
						<br />
						<br />
						Previously I used to work in React, however I find VueJS ecosystem quite interesting and started building my projects and I happily enjoy VueJS's ecosystem.
					</p>
					<div class="tools tools--main">
						<img src="/assets/tool-js.png" alt="" />
						<img src="/assets/tool-ts.png" alt="" />
						<img src="/assets/tool-vs.png" alt="" />
						<img src="/assets/tool-vue.png" alt="" />
						<img src="/assets/tool-nuxt.png" alt="" />
						<img src="/assets/tool-firebase.png" alt="" />
						<img src="/assets/tool-db.png" alt="" />
						<img src="/assets/tool-figma.png" alt="" />
						<img src="/assets/tool-adobe.png" alt="" />
						<img src="/assets/tool-webpack.png" alt="" />
						<img src="/assets/tool-vite.png" alt="" />
						<img src="/assets/tool-tailwind.png" alt="" />
					</div>
					<p>and</p>
					<div class="tools">
						<img src="/assets/tool-html.png" alt="" />
						<img src="/assets/tool-css.png" alt="" />
						<img src="/assets/tool-sass.png" alt="" />
					</div>
					<a class="hero__cta btn" href="https://github.com/Asya404">See my GH</a>
				</div>
			</div>
		</div>
	</section>
	<section class="section-projects">
		<div class="container">
			<h2>My works</h2>
			<div class="projects">
				<project v-for="project in getProjects" :key="project.description" :project="project"></project>
			</div>
		</div>
	</section>
</template>

<script>
	import project from "../components/project.vue";

	export default {
		components: {
			project,
		},
		computed: {
			getProjects() {
				return this.$store.getters.getProjects;
			},
		},
	};
</script>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		color: #7f888f;
		font-family: "Open Sans", sans-serif;
		font-size: 17px;
		line-height: 28px;
	}

	a {
		all: unset;
	}

	h1 {
		font-size: 30px;
		line-height: 1.1;
		margin-bottom: 35px;
		color: #3d4449;
	}

	h2 {
		font-size: 30px;
		color: #3d4449;
		padding-bottom: 20px;
		border-bottom: 4px solid #cd6629;
		display: inline-block;
	}

	.container {
		padding: 0 20px;
	}

	.btn {
		display: inline-block;
		margin-top: 45px;
		text-transform: uppercase;
		padding: 10px 35px;
		border: 2px solid #cd6629;
		color: #cd6629;
		background-color: transparent;
		border-radius: 5px;
		font-weight: 700;
		cursor: pointer;
		transition: all 0.3s ease;
		font-size: 13px;
		font-family: "Roboto Slab", serif;
	}

	.btn:hover {
		color: #fff;
		background-color: #cd6629;
	}

	.header {
		margin-top: 130px;
		border-bottom: 5px solid #cd6629;
	}

	.section-hero {
		margin-bottom: 70px;
	}

	.hero {
		padding: 70px 0;
		border-bottom: 2px solid #d2d7d9bf;
	}

	.hero__photo-wrapper {
		overflow: clip;
		margin-bottom: 30px;
	}

	.hero__photo {
		width: 100%;
		height: 566px;
		background-position: center;
		background-size: cover;
		border-radius: 5px;
		transition: all 0.2s ease;
		cursor: pointer;
	}

	.hero__photo-wrapper:hover .hero__photo {
		transform: scale(1.075);
	}

	.tools {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		margin: 10px 0;
	}

	.tools--main {
		margin-top: 30px;
	}

	.tools img {
		max-width: 64px;
	}

	.projects {
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		gap: 90px;
		margin-top: 60px;
	}

	.project {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.project:after {
		background: rgba(210, 215, 217, 0.75);
		bottom: -3em;
		content: "";
		display: block;
		height: 1px;
		position: absolute;
		right: 0;
		width: calc(100% + 6em);
	}

	.project__img-wrapper {
		overflow: clip;
		width: 100%;
	}

	.project__img {
		min-width: 100%;
		min-height: 500px;

		background-position: top;
		background-size: contain;
		border-radius: 5px;
		transition: all 0.2s ease;
		cursor: pointer;
		margin-bottom: 40px;
		box-shadow: 0 3px 6px #24242417;
	}

	.project__img-wrapper:hover .project__img {
		transform: scale(1.075);
	}

	.project__descr {
		flex: 1;
	}

	@media (min-width: 768px) {
		h1 {
			font-size: 40px;
		}

		.section-hero {
			margin-bottom: 100px;
		}

		.hero {
			display: flex;
			justify-content: center;
			gap: 50px;
			padding: 100px 0;
		}

		.hero__photo-wrapper {
			width: 50%;
			margin-bottom: initial;
		}

		.hero__text {
			width: 50%;
		}

		.project {
			width: calc((100% / 2) - ((1 / 2) * 90px));
		}

		.project:not(:first-child, :nth-child(3n)):before {
			background: rgba(210, 215, 217, 0.75);
			content: "";
			display: block;
			height: calc(100% + 6em);
			left: -3em;
			position: absolute;
			top: 0;
			width: 1px;
		}
	}

	@media (min-width: 965px) {
		h1 {
			font-size: 50px;
		}

		.project {
			width: calc((100% / 3) - ((2 / 3) * 90px));
		}

		.project:not(:first-child, :nth-child(4n)):before {
			background: rgba(210, 215, 217, 0.75);
			content: "";
			display: block;
			height: calc(100% + 6em);
			left: -3em;
			position: absolute;
			top: 0;
			width: 1px;
		}
	}

	@media (min-width: 1400px) {
		.container {
			margin: 0 auto;
			max-width: 1400px;
		}
	}
</style>
