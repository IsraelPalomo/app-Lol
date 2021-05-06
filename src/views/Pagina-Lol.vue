<template>
	<div class="contenedor__header">
		<img class="img__header" src="..\assets\Akali.png" alt="Imagen Akali" />
		<header>
			<h1 class="titulo">Elije Tu Faccion</h1>
		</header>
		<img class="img__header" src="..\assets\Yasuo.png" alt="Imagen Yasuo" />
	</div>
	<main>
		<img class="img__SVG" src="..\assets\SVG.png" alt="SVG__imagen" />

		<section class=" seccion seccion__magos"></section>
		<section class=" seccion seccion__magos"></section>
		<section class=" seccion seccion__magos"></section>
		<section class=" seccion seccion__magos"></section>
		<section class=" seccion seccion__magos"></section>
	</main>
</template>

<script>
export default {};
</script>

<style>
body {
	background: rgb(45, 45, 46);
	margin: 0;
	padding: 0;
}

//! Header

header {
	height: 10rem;
	width: 80%;
	margin: 0 auto;
	display: flex;
	align-content: center;
	justify-content: center;
}
.contenedor__header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 1rem;
	background-color: rgb(101, 101, 102);
}
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
.img__header {
	width: 24rem;
	filter: drop-shadow(15px 15px 20px black);
}

//! MAIN

main {
	margin: 0;
}
.img__SVG {
	width: 100%;
	height: 10rem;
	margin-top: -0.5rem;
}
.seccion {
	background-color: rgb(101, 101, 102);
	width: 100%;
	height: 25rem;
	margin: 1rem 0;
}
</style>
