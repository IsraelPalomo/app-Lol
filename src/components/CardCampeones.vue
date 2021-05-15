<template>
	<div class="contenedor">
		<div class="cardCampeon" v-for="(campeon, index) in objeto" :key="index">
			<h1>{{ campeon.name }}</h1>
			<h2>{{ campeon.tags[0] }}</h2>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			objeto: [],
		};
	},
	methods: {
		async callCampeon() {
			try {
				const res = await fetch(
					"http://ddragon.leagueoflegends.com/cdn/11.10.1/data/en_US/champion.json"
				);
				const data = await res.json();

				console.log(data.data);

				let campeones = data.data;

				this.objeto = campeones;
			} catch (error) {
				console.log(error);
			}
		},
	},
	created() {
		this.callCampeon();
	},
};
</script>

<style lang="scss" scoped>
.contenedor {
	padding: 5rem;
	display: flex;
	flex-wrap: wrap;
	gap: 5rem;
	justify-content: space-between;
	.cardCampeon {
		width: 20rem;
		height: 30rem;
		background-color: white;
		h1 {
			margin-top: 99%;
		}
	}
}
</style>
