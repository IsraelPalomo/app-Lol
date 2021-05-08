<template>
	<div>
		<video id="video" loop autoplay preload src="..\assets\Video__LeagueOfLegends.mp4"></video>
		<img class="logo" src="..\assets\Logotipo__LeagueOfLegends.png" alt="" />
	</div>
</template>

<script>
export default {};
</script>

<style>
#video {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: auto;
	z-index: -10;
	visibility: visible;
}
.logo {
	width: 20rem;
	margin-top: 5rem;
}
</style>
