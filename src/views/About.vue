<template>
	<div class="about">
		<nav>
			<img class="icono" src="..\assets\icono.png" alt="" />
			<img src="..\assets\icon-lol.png" alt="" />
			<img src="..\assets\icon-tft.png" alt="" />
			<img src="..\assets\icon-lolR.png" alt="" />
		</nav>
		<div>
			<img class="logo" src="..\assets\League_of_Legends_logo.png" alt="" />
		</div>
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
nav {
	position: absolute;
	width: 100%;
	height: 150px;
	z-index: 10;
	background: #000000;
	top: 0px;
	color: white;
}
nav h4 {
	font-size: 2rem;
	color: #d22a37;
}
nav img {
	color: white;
	width: 80px;
	height: 80px;
}
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
img.icono {
	width: 25rem;
	height: 12rem;
	margin: 0;
}
.icono:hover {
	transform: scale(1.1);
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
@media (min-width: 700px) {
	.logo {
		width: 35rem;
		margin-top: 15rem;
	}
	.icono {
		width: 25rem;
		margin-top: 3rem;
	}
}
@media (min-width: 900px) {
	.logo {
		width: 40rem;
		margin-top: 25rem;
	}
	.icono {
		width: 30rem;
		margin-top: 6rem;
	}
}

@media (min-width: 1200px) {
	.logo {
		width: 100%;
		max-width: 50rem;
		margin-top: 35rem;
	}
	.icono {
		width: 35rem;
		margin-top: 6rem;
	}
}
@media (min-width: 2000px) {
	.logo {
		width: 100rem;
		margin-top: 65rem;
	}
	.icono {
		width: 65rem;
		margin-top: 6rem;
	}
}
</style>
