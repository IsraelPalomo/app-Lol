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
	<router-link to="/pagina-Lol" class="btn">
		<img class="btn__icono" src="..\assets\Icono__PuñoRiot.png" alt="Icono Puño" />
		<button class="btn__boton">Vienvenido Invocador</button>
	</router-link>
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
.btn {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50%;
	margin: 10rem auto;
	text-decoration: none;

	&:hover {
		transform: scale(1.2);
		filter: drop-shadow(15px 15px 5px #ed2331);
		transition: linear 0.3s;
	}
	.btn__icono {
		width: 5rem;
	}
	.btn__boton {
		height: 2.4rem;
		width: 15rem;
		margin-left: -1rem;
		background-color: #ed2331;
		border: none;
		color: white;
		font-size: 0.7rem;
		font-family: "Newsreader", serif;
		font-weight: bold;
		line-height: 1rem;
		border-bottom: solid 4px black;
		border-radius: 0 0 0 15px;
	}
}
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
	.btn {
		.btn__boton {
			font-size: 1rem;
		}
	}
}
@media (min-width: 900px) {
	.logotipo {
		width: 30rem;
		margin-top: 50%;
	}
	.btn {
		.btn__icono {
			width: 7rem;
		}
		.btn__boton {
			height: 4rem;
			margin-left: -2rem;
		}
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
