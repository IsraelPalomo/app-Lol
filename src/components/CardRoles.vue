<template>
	<div class="cardRoles">
		<div class="cardRoles__izquierda">
			<img class="cardRoles__icono icono_magos" src="..\assets\Rol-Magos.png" alt="Rol Magos" />
			<h1>Magos</h1>
		</div>
		<div class="cardRoles__derecha">
			<p class="parrafo">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, et. Minima tempora
				veritatis ex quis deserunt dolores sit est laborum cum libero accusamus, soluta veniam quia,
				qui optio molestiae eius.
			</p>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.cardRoles {
	background-color: rgb(101, 101, 102);
	width: 80%;
	height: 25rem;
	margin: 5rem auto;
	background-image: url("../assets/Seccion-Roles-Malzahar.jpg");
	background-size: cover;
	background-repeat: no-repeat;
	background-position-y: center;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	padding: 1rem;
	filter: grayscale(1);
	border-radius: 15px;

	&:hover {
		filter: grayscale(0);
	}
	.cardRoles__izquierda {
		display: flex;
		align-items: center;
		justify-content: left;
	}
	.cardRoles__derecha {
		display: flex;
		align-items: flex-end;
	}
	.parrafo {
		color: white;
		line-height: 1.5rem;
		margin: 0 2rem 2rem 0;
		text-align: right;
		background: rgb(17, 17, 17);
		padding: 2rem;
		border-radius: 15px;
	}

	.cardRoles__icono {
		width: 100px;
		margin: auto 2rem;
	}
	h1 {
		margin-bottom: 10rem;
		color: white;
		font-size: 3rem;
	}
}
</style>
