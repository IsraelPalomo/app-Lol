import { createStore } from "vuex";

export default createStore({
	state: {
		infoAPI: null,
	},
	mutations: {
		getLol(state, payload) {
			state.infoAPI = payload;
		},
	},
	actions: {
		async callLol({ commit }) {
			const res = await fetch(
				"http://ddragon.leagueoflegends.com/cdn/11.9.1/data/en_US/champion.json"
			);
			const data = await res.json();
			console.log(data);
			commit("getLol", data);
		},
	},
	modules: {},
});
