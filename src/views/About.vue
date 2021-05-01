<template>
	<div class="about">
		<img src="..\assets\League_of_Legends_logo.png" alt="" />
		<video id="video" loop autoplay preload muted src="..\assets\Video-Fondo.mp4"></video>
	</div>
</template>
<script>
export default {};
</script>
<style scoped>
#app {
	background: black;
}
#video {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: auto;
	z-index: -10;
	visibility: visible;
}
img {
	width: 20rem;
	margin-top: 5rem;
}
</style>
