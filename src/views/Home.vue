<template>
	<div class="home"></div>
</template>

<script>
import { createApp } from "vue";
// @ is an alias to /src
import { mapState, mapActions } from "vuex";
export default {
	name: "Home",
	components: {},
	computed: {
		...mapState(["infoAPI"]),
	},
	methods: {
		...mapActions(["callLol"]),
	},
	created() {
		this.callLol();
	},
};
</script>
<style>
body {
	background-color: "white";
}
</style>
