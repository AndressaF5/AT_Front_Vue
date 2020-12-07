import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import ListarHeroes from './components/ListarHeroes'
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
            path: '/listarHeroes',
            name: 'listarHeroes',
            component: ListarHeroes
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