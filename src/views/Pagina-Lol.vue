<template>
	<Nav />
	<div class="contenedor">
		<img class="contenedor__img" src="..\assets\Imagen__Header--Akali.png" alt="Imagen Akali" />
		<header class="contenedor__header">
			<h1 class="titulo">Elije Tu Rol</h1>
		</header>
		<img class="contenedor__img" src="..\assets\Imagen__Header--Yasuo.png" alt="Imagen Yasuo" />
	</div>
	<main>
		<CardRoles />
	</main>
</template>

<script>
import CardRoles from "../components/CardRoles";

import Nav from "../components/Nav";
export default {
	components: {
		CardRoles,
		Nav,
	},
};
</script>

<style lang="scss" scoped>
body {
	background: rgb(45, 45, 46);
	margin: 0;
	padding: 0;
}

.contenedor {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 1rem;
	.contenedor__img {
		width: 20rem;
		filter: drop-shadow(15px 15px 20px black);
	}
	.contenedor__header {
		height: 10rem;
		width: 80%;
		margin: 0 auto;
		display: flex;
		align-content: center;
		justify-content: center;
		.titulo {
			color: black;
			display: block;
			text-align: center;
			margin: auto auto;
			font-family: serif;
			font-size: 3rem;
			margin: 5rem;
			text-shadow: 10px 10px 15px black;
			text-align: center;
			background: #d22a37;
			padding-bottom: 6rem;
			padding-top: 2rem;
			padding-right: 2rem;
			padding-left: 2rem;
			border-radius: 15px;
		}
	}
}

/** 
* TODO:  ---------------------------------------------------------MEDIA QUERYS--------------------------------------------------
*/

@media (max-width: 2000px) {
}
@media (max-width: 1200px) {
	.contenedor__img {
		display: none;
	}
}
@media (max-width: 900px) {
}
@media (max-width: 650px) {
	.contenedor {
		justify-content: center;
	}
}
@media (max-width: 450px) {
	.contenedor {
		.contenedor__header {
			margin: 0;
			.titulo {
				font-size: 2rem;
				padding: 1rem;
				margin: 80px 0 0 0;
			}
		}
	}
}

/** 
* TODO:  ---------------------------------------------------------MEDIA QUERYS--------------------------------------------------
*/
</style>
