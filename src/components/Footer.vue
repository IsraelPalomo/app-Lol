<template>
	<div class="redesSociales">
		<h1 class="redesSociales__titulo">Redes Sociales</h1>
		<div class="containerIconos">
			<i class=" redesSociales__icono fab fa-github-alt"></i>
			<i class="redesSociales__icono fab fa-linkedin"></i>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.redesSociales {
	background-color: #8f171f;
	margin-top: 15rem;

	padding: 5rem 2rem 5rem 2rem;
	.redesSociales__titulo {
		color: white;
		text-decoration: underline;
		font-weight: normal;
		margin-bottom: 2rem;
		font-size: 1rem;
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

/**
* TODO:  ---------------------------------------------------------MEDIA QUERYS--------------------------------------------------
*/

@media (min-width: 400px) {
}
@media (min-width: 650px) {
}
@media (min-width: 900px) {
}
@media (min-width: 1200px) {
}
@media (min-width: 2000px) {
}

/**
* TODO:  ---------------------------------------------------------MEDIA QUERYS--------------------------------------------------
*/
</style>
