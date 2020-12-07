import axios from 'axios';

const state = {
    heroesFav: []
};

const getters = {
    allHeroesList: state => state.heroesFav,
}

const actions = {
    getListFavoritos({ commit }) {
        axios.get(
            "http://localhost:57183/api/Heroes/getListaHeroes"
        ).then((response) => {
            commit('getListFav', response.data)
        });
    },
    addHeroListaFav( { state }, hero) {
        axios.post(
            "http://localhost:57183/api/Heroes/adicionarHeroNaListaFavoritos", {
                "idSuperHero": hero.id,
                "nomeHero": hero.name,
                "imagem": hero.image.url,
                "inteligencia": hero.powerstats.intelligence,
                "forca": hero.powerstats.strength,
                "velocidade": hero.powerstats.speed,
                "durabilidade": hero.powerstats.durability,
                "poder": hero.powerstats.power,
                "combate": hero.powerstats.combat,
                "editora": hero.biography.publisher,
                "apelido": hero.biography.aliases,
                "identidadeSecreta": hero.biography.full-name
            }
        ).then((response) => {
            console.log("Response", response + state);
        });
    },
    removerHeroListaFavoritos({ commit }, id){
        axios.delete(
            "http://localhost:57183/api/Heroes/deleteHeroListaFavoritos/?id=" + id
        ).then((response) => {
            console.log(response)
            commit('removerHeroList', id);
        });
    },
    editarHeroListFav( { commit }, hero){
        axios.post(
            "http://localhost:57183/api/Heroes/editarHeroListFav/?idSuperHero=" + hero.IdSuperHero, {
                "Inteligencia" : hero.Inteligencia == null || hero.Inteligencia == "" ? null : hero.Inteligencia,
                "Forca" : hero.Forca == null || hero.Forca == "" ? null : hero.Forca,
                "Velocidade" : hero.Velocidade == null || hero.Velocidade == "" ? null : hero.Velocidade,
                "Durabilidade" : hero.Durabilidade == null || hero.Durabilidade == "" ? null : hero.Durabilidade,
                "Poder" : hero.Poder == null || hero.Poder == "" ? null : hero.Poder,
                "Combate" : hero.Combate == null || hero.Combate == "" ? null : hero.Combate,
            }
        ).then((response) => {
            console.log("Commit: " + commit, response);
        });
    }
}

const mutations = {
    getListFav: (state, data) => (state.heroesFav = data)
}

export default {
    state,
    actions,
    getters,
    mutations
};