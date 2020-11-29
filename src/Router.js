import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import ListaFavoritos from './components/ListaFavoritos.vue';
import HeroDetail from './components/HeroDetail.vue'

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/listaFavoritos',
            name: 'ListaFavoritos',
            component: ListaFavoritos
        },
        {
            path: '/heroDetail/:id',
            name: 'heroDetail',
            component: HeroDetail
        }
    ]
})