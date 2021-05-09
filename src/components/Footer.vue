<template>
	<div class="btn">
		<img class="btn__icono" src="..\assets\Icono__PuñoRiot.png" alt="Icono Puño" />
		<button class="btn__boton">Vienvenido Invocador</button>
	</div>
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

	&:hover {
		transform: scale(1.1);
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
	}
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
}
@media (min-width: 1200px) {
}
@media (min-width: 2000px) {
}

/** 
* TODO:  ---------------------------------------------------------MEDIA QUERYS--------------------------------------------------
*/
</style>
