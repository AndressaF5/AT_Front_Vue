import Vuex from 'vuex';
import Vue from 'vue';
import hero from './modules/hero';
import listaFavoritos from './modules/listaFavoritos'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        hero,
        listaFavoritos
    }
})