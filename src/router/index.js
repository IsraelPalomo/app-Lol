import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{
		path: "/",
		name: "Inicio-LOL",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ "../views/Inicio-LOL.vue"),
	},
	{
		path: "/inicio-TFT",
		name: "Inicio-TFT",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ "../views/Inicio-TFT.vue"),
	},
	{
		path: "/inicio-LOR",
		name: "Inicio-LOR",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ "../views/Inicio-LOR.vue"),
	},
	{
		path: "/pagina-Lol",
		name: "Pagina-Lol",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ "../views/Pagina-Lol.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
