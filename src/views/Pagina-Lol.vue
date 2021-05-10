<template>
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
export default {
	components: {
		CardRoles,
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
			color: #d22a37;
			display: block;
			text-align: center;
			margin: auto auto;
			font-family: serif;
			font-size: 5rem;
			margin: 5rem;
			text-shadow: 10px 10px 15px black;
		}
	}
}
</style>
