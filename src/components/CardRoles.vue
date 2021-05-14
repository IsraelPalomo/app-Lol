<template>
	<router-link to="/Campeones" class="enlace">
		<div class="cardRoles magos">
			<div class="cardRoles__izquierda">
				<img class="cardRoles__icono icono_magos" src="..\assets\Rol-Magos.png" alt="Rol Magos" />
				<h1>Mago</h1>
			</div>
			<div class="cardRoles__derecha">
				<p class="parrafo">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, et. Minima tempora
					veritatis ex quis deserunt dolores sit est laborum cum libero accusamus, soluta veniam
					quia, qui optio molestiae eius.
				</p>
			</div>
		</div>
	</router-link>
	<router-link to="/Campeones" class="enlace">
		<div class="cardRoles asesinos">
			<div class="cardRoles__izquierda">
				<img
					class="cardRoles__icono icono_magos"
					src="..\assets\Rol-Asesinos.png"
					alt="Rol Asesinos"
				/>
				<h1>Asesino</h1>
			</div>
			<div class="cardRoles__derecha">
				<p class="parrafo">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, et. Minima tempora
					veritatis ex quis deserunt dolores sit est laborum cum libero accusamus, soluta veniam
					quia, qui optio molestiae eius.
				</p>
			</div>
		</div>
	</router-link>
	<router-link to="/Campeones" class="enlace">
		<div class="cardRoles adc">
			<div class="cardRoles__izquierda">
				<img class="cardRoles__icono icono_magos" src="..\assets\Rol-Adc.png" alt="Rol Asesinos" />
				<h1>Tirador</h1>
			</div>
			<div class="cardRoles__derecha">
				<p class="parrafo">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, et. Minima tempora
					veritatis ex quis deserunt dolores sit est laborum cum libero accusamus, soluta veniam
					quia, qui optio molestiae eius.
				</p>
			</div>
		</div>
	</router-link>
	<router-link to="/Campeones" class="enlace">
		<div class="cardRoles luchadores">
			<div class="cardRoles__izquierda">
				<img
					class="cardRoles__icono icono_magos"
					src="..\assets\Rol-luchadores.png"
					alt="Rol Asesinos"
				/>
				<h1>Luchador</h1>
			</div>
			<div class="cardRoles__derecha ">
				<p class="parrafo">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, et. Minima tempora
					veritatis ex quis deserunt dolores sit est laborum cum libero accusamus, soluta veniam
					quia, qui optio molestiae eius.
				</p>
			</div>
		</div>
	</router-link>
	<router-link to="/Campeones" class="enlace">
		<div class="cardRoles soportes">
			<div class="cardRoles__izquierda">
				<img
					class="cardRoles__icono icono_magos"
					src="..\assets\Rol-soportes.png"
					alt="Rol Asesinos"
				/>
				<h1>Soporte</h1>
			</div>
			<div class="cardRoles__derecha">
				<p class="parrafo ">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, et. Minima tempora
					veritatis ex quis deserunt dolores sit est laborum cum libero accusamus, soluta veniam
					quia, qui optio molestiae eius.
				</p>
			</div>
		</div>
	</router-link>
	<router-link to="/Campeones" class="enlace">
		<div class="cardRoles tanques">
			<div class="cardRoles__izquierda">
				<img
					class="cardRoles__icono icono_magos"
					src="..\assets\Rol-Tanques.png"
					alt="Rol Asesinos"
				/>
				<h1>Tanque</h1>
			</div>
			<div class="cardRoles__derecha">
				<p class="parrafo">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, et. Minima tempora
					veritatis ex quis deserunt dolores sit est laborum cum libero accusamus, soluta veniam
					quia, qui optio molestiae eius.
				</p>
			</div>
		</div>
	</router-link>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.enlace {
	text-decoration: none;
}
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
		transform: scale(1.1);

		transition-duration: 1s;
		transition-timing-function: linear;
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
		margin-top: 5rem;
	}
	h1 {
		margin-bottom: 10rem;
		color: white;
		font-size: 3rem;
	}
}
.magos {
	background-image: url("../assets/Seccion-Roles-Malzahar.jpg");
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	background-position-y: top;
}
.asesinos {
	background-image: url("../assets/Seccion-Roles-asesinos.png");
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
}

.adc {
	background-image: url("../assets/Seccion-Roles-adc.jpg");
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
}

.luchadores {
	background-image: url("../assets/Seccion-Roles-luchadores.jpg");
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
}
.soportes {
	background-image: url("../assets/Seccion-Roles-soportes.jpg");
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
}
.tanques {
	background-image: url("../assets/Seccion-Roles-tanques.jpg");
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	background-position-y: top;
}

@media (max-width: 900px) {
	.parrafo {
		display: none;
	}
}
@media (max-width: 650px) {
	.magos {
		background-position-x: right;
		h1 {
			margin: 0;
		}
	}
	.asesinos {
		background-position-x: -100px;
	}
	.adc {
		background-position-x: center;
	}
	.luchadores {
		background-position-x: right;
	}
	.soportes {
		background-position-x: right;
	}
	.tanques {
		background-position-x: -150px;
	}
	.cardRoles {
		display: flex;
		justify-content: center;
		align-items: center;
		.cardRoles__izquierda {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-wrap: wrap;

			.icono_magos {
				margin: 2rem 6rem;
			}
		}
		.cardRoles__derecha {
			display: none;
		}
	}
}
@media (max-width: 400px) {
	.luchadores {
		background-position-x: -400px;
	}
	.soportes {
		background-position-x: -250px;
	}
	.tanques {
		background-position-x: -200px;
	}
}
</style>
