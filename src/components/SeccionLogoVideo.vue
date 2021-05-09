<template>
	<video
		v-if="numeroPaginas === '1'"
		class="videoFondo__LeagueOfLegends"
		loop
		autoplay
		preload
		src="..\assets\Video__LeagueOfLegends.mp4"
	></video>
	<video
		v-if="numeroPaginas === '2'"
		class="videoFondo__LeagueOfLegends"
		loop
		autoplay
		preload
		src="..\assets\Video__LeagueOfRunaterra.mp4"
	></video>
	<video
		v-if="numeroPaginas === '3'"
		class="videoFondo__LeagueOfLegends"
		loop
		autoplay
		preload
		src="..\assets\Video__TeamfightTatics.mp4"
	></video>
	<img
		v-if="numeroPaginas == '1'"
		class="logotipo"
		src="..\assets\Logotipo__LeagueOfLegends.png"
		alt="Logotipo League Of Legends"
	/>
	<img
		v-if="numeroPaginas == '2'"
		class="logotipo"
		src="..\assets\Logotipo__LeagueOfRunaterra.png"
		alt="Logotipo League Of Legends"
	/>
	<img
		v-if="numeroPaginas == '3'"
		class="logotipo"
		src="..\assets\Logotipo__TeamfightTactics.png"
		alt="Logotipo League Of Legends"
	/>
</template>

<script>
export default {
	data() {
		return {};
	},
	props: ["numeroPaginas"],
};
</script>

<style lang="scss" scoped>
.videoFondo__LeagueOfLegends {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: auto;
	z-index: -10;
	visibility: visible;
	margin-top: 6.5rem;
}
.logotipo {
	width: 15rem;
	margin-top: 45%;
}

/** 
* TODO:  ---------------------------------------------------------MEDIA QUERYS--------------------------------------------------
*/

@media (min-width: 400px) {
	.logotipo {
		width: 20rem;
	}
}
@media (min-width: 650px) {
	.logotipo {
		width: 25rem;
	}
}
@media (min-width: 900px) {
	.logotipo {
		width: 30rem;
		margin-top: 50%;
	}
}
@media (min-width: 1200px) {
	.logotipo {
		width: 35rem;
		margin-top: 53%;
	}
}
@media (min-width: 2000px) {
	.logotipo {
		width: 50rem;
		margin-top: 53%;
	}
}

/** 
* TODO:  ---------------------------------------------------------MEDIA QUERYS--------------------------------------------------
*/
</style>
