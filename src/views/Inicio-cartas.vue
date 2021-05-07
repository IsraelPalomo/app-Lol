<template>
	<div class="about">
		<nav>
			<img class="iconoNav" src="..\assets\Logotipo__RiotGames.png" alt="Logotipo De Riot Games" />

			<div class="iconLOL">
				<router-link to="/" class="linkImg">
					<img src="..\assets\Icono__LeagueOfLegends.png" alt="" />
				</router-link>
				<router-link to="/inicio-TFT" class="linkImg">
					<img src="..\assets\Icono__TeamfightTactics.png" alt="" />
				</router-link>
				<router-link to="/inicio-cartas" class="linkImg">
					<img src="..\assets\Icono__LeagueOfRunaterra.png" alt="" />
				</router-link>
			</div>
		</nav>
		<div>
			<img class="logo" src="..\assets\Logotipo__LeagueOfRunaterra.png" alt="" />
		</div>
		<video id="video" loop autoplay preload src="..\assets\Video__LeagueOfRunaterra.mp4"></video>
		<router-link to="/home" class="linkImg">
			<img class="icono" src="..\assets\Icono__PuñoRiot.png" alt="Icono__PuñoRiot" />
			<button class="btn-puño">Vienvenido Invocador</button>
			<img class="pingui" src="..\assets\Icono__PinguinoTFT.png" alt="Icono__PinguinoTFT" />
		</router-link>
		<h4>Redes sociales creador</h4>

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
.pingui {
	width: 15rem;
	margin-left: 5rem;
}
nav {
	position: absolute;
	width: 100%;
	height: 150px;
	z-index: 10;
	background: #000000;
	top: 0px;
	color: rgb(8, 8, 8);
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.iconLOL {
	display: flex;

	justify-content: right;
	margin: 5rem 1.5rem 5rem auto;
	height: 160px;
	align-items: center;
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
.linkImg {
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	margin-top: 15rem;
	margin-bottom: 15rem;
}
.btn-puño {
	width: 20rem;
	height: 6.3rem;
	margin-left: -2.6rem;
	color: white;
	text-decoration: none;
	background-color: rgb(39, 38, 38);
	font-family: "New Tegomin", serif;
	font-size: 1.3rem;
	border: none;
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
	width: 7rem;
	height: 7rem;
	margin: 0;
	margin-right: -1rem;
	z-index: 0;
}
.iconoNav {
	width: 20rem;
	height: 10rem;
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
		width: 40rem;
		margin-top: 10rem;
	}
	.icono {
		width: 25rem;
		margin-top: 3rem;
	}
}
@media (max-width: 700px) {
	.pingui {
		display: none;
	}
	.iconoNav {
		display: none;
	}
	.iconLOL {
		display: flex;
		justify-content: center;
		margin: 2rem auto 5rem auto;
	}
	.logo {
		margin-top: 10rem;
	}
	#video {
		margin-top: 7rem;
	}
	.btn-puño {
		width: 14rem;
		height: 6.3rem;
		margin-left: -2.6rem;
		color: white;
		text-decoration: none;
		background-color: rgb(39, 38, 38);
		font-family: "New Tegomin", serif;
		font-size: 1rem;
		border: none;
		text-align: right;
	}
}
@media (min-width: 900px) {
	.logo {
		width: 50rem;
		margin-top: 16rem;
	}
	.icono {
		width: 30rem;
		margin-top: 6rem;
	}
	.btn-puño {
		text-align: center;
	}
}

@media (min-width: 1200px) {
	.logo {
		width: 40rem;
		max-width: 50rem;
		margin-top: 45rem;
	}
	.icono {
		width: 45rem;
		margin-top: 0rem;
	}
}
@media (min-width: 2000px) {
	img.logo {
		width: 100rem;
		margin-top: 60rem;
	}
	.icono {
		width: 65rem;
		margin-top: 6rem;
	}
	.btn-puño {
		width: 30rem;
		height: 9rem;
		margin-left: -3.3rem;
		color: white;
		text-decoration: none;
		background-color: rgb(39, 38, 38);
		font-family: "New Tegomin", serif;
		font-size: 2.5rem;
		border: none;
		text-align: right;
	}
	h4 {
		color: white;
		font-family: "New Tegomin", serif;
		font-size: 2.5rem;
	}
	.icon {
		font-size: 5rem;
	}
	img.icono {
		width: 10rem;
		height: 10rem;
		margin: 0;
		margin-right: -1rem;
		z-index: 0;
	}
}
</style>
