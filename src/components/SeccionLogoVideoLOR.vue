<template>
	<video
		class="videoFondo__LeagueOfLegends"
		loop
		autoplay
		preload
		src="..\assets\Video__LeagueOfRunaterra.mp4"
	></video>
	<img
		class="logotipo"
		src="..\assets\Logotipo__LeagueOfRunaterra.png"
		alt="Logotipo League Of Legends"
	/>
</template>

<script>
export default {};
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
	width: 20rem;
	margin-top: 30%;
}

/** 
* TODO:  ---------------------------------------------------------MEDIA QUERYS--------------------------------------------------
*/

@media (min-width: 400px) {
	.logotipo {
		width: 25rem;
	}
}
@media (min-width: 650px) {
	.logotipo {
		width: 30rem;
		margin-top: 40%;
	}
}
@media (min-width: 900px) {
	.logotipo {
		width: 35rem;
		margin-top: 43%;
	}
}
@media (min-width: 1200px) {
	.logotipo {
		width: 45rem;
		margin-top: 45%;
	}
}

/** 
* TODO:  ---------------------------------------------------------MEDIA QUERYS--------------------------------------------------
*/
</style>
