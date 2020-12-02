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
                "apelido": "",
                "identidadeSecreta": hero.biography.full-name
            }
        ).then((response) => {
            console.log("Response", response + state)
        });
    },
    removerHeroListaFavoritos({ commit }, id){
        axios.delete(
            "http://localhost:57183/api/Heroes/deleteHeroListaFavoritos/?id=" + id
        ).then((response) => {
            console.log("Response", response);
            commit("removerHeroList", id);
        });
    },
    editarHeroListFav( { state }, hero){
        axios.post(
            "http://localhost:57183/api/Heroes/editarHeroListFav/?idSuperHero=" + hero.IdSuperHero, {
                "NomeHero" : hero.NomeHero == null || hero.NomeHero == "" ? null : hero.nomeHero,
                "Inteligencia" : hero.Inteligencia == null || hero.Inteligencia == "" ? null : hero.Inteligencia,
                "Forca" : hero.Forca == null || hero.Forca == "" ? null : hero.Forca,
                "Velocidade" : hero.Velocidade == null || hero.Velocidade == "" ? null : hero.Velocidade,
                "Durabilidade" : hero.Durabilidade == null || hero.Durabilidade == "" ? null : hero.Durabilidade,
                "Poder" : hero.Poder == null || hero.Poder == "" ? null : hero.Poder,
                "Combate" : hero.Combate == null || hero.Combate == "" ? null : hero.Combate,
                "Editora" : hero.Editora == null || hero.Editora == "" ? null : hero.Editora,
                "Apelido" : hero.Apelido == null || hero.Apelido == "" ? null : hero.Apelido
            }
        ).then((response) => {
            console.log("Response", response + state);
        });
    }
}

const mutations = {
    getListFav: (state, data) => (state.heroesFav = data),
    removerHeroList: (state, id) => (state.heroesFav =  state.heroesFav.filter(hero => hero.id != id))
}

export default {
    // listagem
    state,
    actions,
    getters,
    mutations
};