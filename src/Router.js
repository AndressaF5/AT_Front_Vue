import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import ListaFavoritos from './components/ListaFavoritos.vue';
import HeroDetail from './components/HeroDetail.vue'
import EditarHero from './components/EditarHero.vue'
import HeroDetailListFav from './components/HeroDetailListFav.vue'

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
        },
        {
            path: '/editarHero/:id',
            name: 'editarHero',
            component: EditarHero
        },
        {
            path: '/heroDetailListFav',
            name: 'heroDetailListFav',
            component: HeroDetailListFav
        }
    ]
})