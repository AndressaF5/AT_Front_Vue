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
    },
    addHeroListaFav(hero) {
        console.log("Hero", hero);
        axios.post(
            "http://localhost:57183/api/Heroes/adicionarHeroNaListaFavoritos", {
                data: {
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
            }
        ).then((response) => {
            console.log("Response", response)
        });
    },
    removerHeroListaFavoritos(id){
        axios.delete(
            "http://localhost:57183/api/Heroes/deleteHeroListaFavoritos/" + id
        ).then((response) => {
            console.log("Response", response);
        });
    },
    editarHeroListFav(id, hero){
        axios.post(
            "http://localhost:57183/api/Heroes/editarHeroListFav/" + id, {
                data: {
                    "NomeHero" : hero.nomeHero,
                    "Inteligencia" : hero.inteligencia,
                    "Forca" : hero.forca,
                    "Velocidade" : hero.velocidade,
                    "Durabilidade" : hero.durabilidade,
                    "Poder" : hero.poder,
                    "Combate" : hero.combate,
                    "Editora" : hero.editora,
                    "Apelido" : hero.apelido
                }
            }
        ).then((response) => {
            console.log("Response", response);
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