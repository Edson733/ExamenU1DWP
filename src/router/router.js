import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
    //la ruta base
    {
        path: '/',
        redirect: '/inicio'
    },
    {
        path: '/',
        component: {
            render(c) {
                return c('router-view');
            },
        },
        children: [
            {
                path: '/inicio',
				name: 'inicio',
				component: () => import('../components/Inicio.vue')
            },
            {
                path: '/formulario',
				name: 'formulario',
				component: () => import('../components/Formulario.vue')
            },
            {
                path: '/paginacion',
				name: 'paginacion',
				component: () => import('../components/Paginacion.vue')
            },
        ]
    }
]

const router = new VueRouter({
    mode: 'history', // Use 'history' mode to remove the hash from the URL
    routes
})
export default router;