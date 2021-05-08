<template>
	<nav>
		<img
			class="logotipo__riotGames"
			src="..\assets\Logotipo__RiotGames.png"
			alt="Logotipo De Riot Games"
		/>
		<div class="iconosJuegos">
			<router-link to="/" class="iconosJuegos__icono">
				<img src="..\assets\Icono__LeagueOfLegends.png" alt="icono league of legends" />
			</router-link>
			<router-link to="/inicio-TFT" class="iconosJuegos__icono">
				<img src="..\assets\Icono__TeamfightTactics.png" alt="icono teamfight tactics" />
			</router-link>
			<router-link to="/inicio-cartas" class="iconosJuegos__icono">
				<img src="..\assets\Icono__LeagueOfRunaterra.png" alt="icono league of runaterra" />
			</router-link>
		</div>
	</nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
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
	.logotipo__riotGames {
		width: 20rem;
		height: 10rem;
	}
	.iconosJuegos {
		display: flex;
		justify-content: right;
		margin: 5rem 1.5rem 5rem auto;
		height: 160px;
		align-items: center;
		.iconosJuegos__icono {
			display: flex;
			justify-content: center;
			align-items: center;
			text-decoration: none;
			margin-top: 15rem;
			margin-bottom: 15rem;
		}
	}
}

/** 
* TODO:  ---------------------------------------------------------MEDIA QUERYS--------------------------------------------------
*/

@media (max-width: 700px) {
	nav {
		.logotipo__riotGames {
			display: none;
		}
		.iconosJuegos {
			width: 100%;
			margin-right: 0;
			justify-content: center;
		}
	}
}

/** 
* TODO:  ---------------------------------------------------------MEDIA QUERYS--------------------------------------------------
*/
</style>
