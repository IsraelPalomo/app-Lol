<template>
	<div class="about">
		<img class="logo" src="..\assets\League_of_Legends_logo.png" alt="" />
		<video id="video" loop autoplay preload muted src="..\assets\Video-Fondo.mp4"></video>
		<router-link to="/home" class="linkImg">
			<img class="icono" src="..\assets\icono.png" alt=""
		/></router-link>
		<h4>Vienvenido Invocador</h4>

		<i class=" icon fab fa-github-alt"></i>
		<i class=" icon fab fa-linkedin"></i>
		<div class="container" style="height: 150px; overflow: hidden;">
			<svg
				class="svg"
				viewBox="0 0 500 150"
				preserveAspectRatio="none"
				style="height: 100%; width: 100%;"
			>
				<path
					d="M-0.90,149.30 C-0.90,146.34 -0.90,150.29 500.00,49.99 L500.00,150.00 L-3.15,152.26 Z"
					style="stroke: none; fill: #D22A37;"
				></path>
			</svg>
		</div>
	</div>
</template>
<script>
export default {};
</script>
<style>
body {
	background: black;
	margin: 0;
	padding: 0;
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
.btn {
	font-family: "New Tegomin", serif;
	background: #d22a37;
	color: white;
	border: none;
	height: 3rem;
	font-size: 1rem;
	border-radius: 15px;
}
.logo {
	width: 20rem;
	margin-top: 5rem;
}
.icono {
	width: 15rem;
	margin-top: 3rem;
}
.icono:hover {
	transform: scale(1.3);
}
h4 {
	color: white;
	font-family: "New Tegomin", serif;
	font-size: 1rem;
}
.icon {
	color: white;
	font-size: 2rem;
	margin: 1rem;
}
</style>
