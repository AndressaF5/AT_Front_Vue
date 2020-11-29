import axios from 'axios';

const state = {
    heroesFav: []
};

// onde é acessado o state
const getters = {
    // tudo o que ele faz é olhar o state e devolver todos os heroes da lista
    allHeroesList: state => state.heroesFav,
}

const actions = {
    getListFavoritos({ commit }) {
        axios.get(
            "http://localhost:57183/api/Heroes/getListaHeroes"
        ).then((response) => {
            console.log(response.data)
            commit('getListFav', response.data)
        });
    }
}

const mutations = {
    getListFav: (state, data) => (state.heroesFav = data)
}

export default {
    // listagem
    state,
    actions,
    getters,
    mutations
};