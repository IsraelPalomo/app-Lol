<template>
	<nav>
		<img
			class="logotipo__riotGames"
			src="..\assets\Logotipo__RiotGames.png"
			alt="Logotipo De Riot Games"
		/>
		<div class="iconosJuegos">
			<router-link to="/" class="iconosJuegos__icono">
				<img
					class="icono"
					src="..\assets\Icono__LeagueOfLegends.png"
					alt="icono league of legends"
				/>
			</router-link>
			<router-link to="/inicio-TFT" class="iconosJuegos__icono">
				<img
					class="icono"
					src="..\assets\Icono__TeamfightTactics.png"
					alt="icono teamfight tactics"
				/>
			</router-link>
			<router-link to="/inicio-cartas" class="iconosJuegos__icono">
				<img
					class="icono"
					src="..\assets\Icono__LeagueOfRunaterra.png"
					alt="icono league of runaterra"
				/>
			</router-link>
		</div>
	</nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
nav {
	width: 100%;
	height: 5rem;
	background: rgb(34, 34, 34);
	display: flex;
	justify-content: space-between;

	.logotipo__riotGames {
		width: 9rem;
		height: 5rem;
	}
	.iconosJuegos {
		.iconosJuegos__icono {
			.icono {
				width: 4rem;
				height: 4rem;
				margin-top: 0.5rem;
			}
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
			justify-content: center;
			align-items: center;
			.iconosJuegos__icono {
				.icono {
					gap: 2rem;
				}
			}
		}
	}
}
@media (min-width: 1200px) {
	nav {
		height: 7rem;
		.logotipo__riotGames {
			width: 12rem;
			height: 7rem;
		}
		.iconosJuegos {
			.iconosJuegos__icono {
				.icono {
					width: 6rem;
					height: 6rem;
				}
			}
		}
	}
}

/** 
* TODO:  ---------------------------------------------------------MEDIA QUERYS--------------------------------------------------
*/
</style>
