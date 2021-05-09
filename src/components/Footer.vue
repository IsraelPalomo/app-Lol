<template>
	<router-link to="/pagina-Lol" class="btn">
		<img class="btn__icono" src="..\assets\Icono__PuñoRiot.png" alt="Icono Puño" />
		<button class="btn__boton">Vienvenido Invocador</button>
	</router-link>

	<div class="redesSociales">
		<h1 class="redesSociales__titulo">Redes Sociales</h1>
		<div class="containerIconos">
			<i class=" redesSociales__icono fab fa-github-alt"></i>
			<i class="redesSociales__icono fab fa-linkedin"></i>
		</div>
	</div>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="svg__footer">
		<path
			fill="#ed2331"
			fill-opacity="1"
			d="M0,64L48,74.7C96,85,192,107,288,133.3C384,160,480,192,576,181.3C672,171,768,117,864,117.3C960,117,1056,171,1152,202.7C1248,235,1344,245,1392,250.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
		></path>
	</svg>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.btn {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50%;
	margin: 5rem auto;
	text-decoration: none;

	&:hover {
		transform: scale(1.2);
		filter: drop-shadow(15px 15px 15px #ed2331);
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
.redesSociales {
	margin-bottom: 5rem;
	.redesSociales__titulo {
		color: white;
		text-decoration: underline;
		font-weight: normal;
		margin-bottom: 2rem;
		font-size: 1rem;
		margin-top: 10rem;
	}
	.containerIconos {
		display: flex;
		justify-content: center;
		gap: 2rem;
		.redesSociales__icono {
			color: white;
			font-size: 1.5rem;
		}
	}
}

.svg__footer {
	margin: -8px -8px -4rem -8px;
}

/** 
* TODO:  ---------------------------------------------------------MEDIA QUERYS--------------------------------------------------
*/

@media (min-width: 400px) {
}
@media (min-width: 650px) {
	.btn {
		.btn__boton {
			font-size: 1rem;
		}
	}
	.svg__footer {
		display: none;
	}
}
@media (min-width: 900px) {
	.btn {
		.btn__icono {
			width: 7rem;
		}
		.btn__boton {
			height: 4rem;
			margin-left: -2rem;
		}
	}
	.redesSociales {
		.redesSociales__titulo {
			font-size: 1.5rem;
		}
		.containerIconos {
			.redesSociales__icono {
				font-size: 2rem;
			}
		}
	}
}
@media (min-width: 1200px) {
}
@media (min-width: 2000px) {
}

/** 
* TODO:  ---------------------------------------------------------MEDIA QUERYS--------------------------------------------------
*/
</style>
