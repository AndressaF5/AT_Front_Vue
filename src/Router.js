import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import ListaFavoritos from './components/ListaFavoritos.vue';
import HeroDetail from './components/HeroDetail.vue'
import EditarHero from './components/EditarHero.vue'
import Pesquisa from './components/Pesquisa.vue'

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/listaFavoritos',
            name: 'listaFavoritos',
            component: ListaFavoritos
        },
        {
            path: '/heroDetail/:id',
            name: 'heroDetail',
            component: HeroDetail
        },
        {
            path: '/editarHero',
            name: 'editarHero',
            component: EditarHero
        },
        {
            path: '/pesquisar',
            name: 'pesquisar',
            component: Pesquisa
        }
    ]
})