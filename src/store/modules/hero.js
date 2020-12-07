import axios from 'axios';

const state = {
    heroes: [],
    listPesquisa: []
};

const getters = {
    allHeroes: state => state.heroes,
    getListPesquisa: state => state.listPesquisa
};

const actions = {
    getAllHeroes({ commit }){
        var listHeroes = [];
        // faz a requisição com o verbo get
        for (let i = 0; i <= 19; i++) {
            var idAleatorio = Math.floor(Math.random() * (731 - 1)) + 1;
            axios.get(
                // nessa url 
                "https://superheroapi.com/api.php/3682544188473097/" + idAleatorio
             // quando a resposta chegar, recebe essa resposta como parâmetro e 
            ).then((response) => {
                // coloca os dados dessa resposta dentro do mutations getAllHeroes
                listHeroes.push(response.data);
            });
        }
        commit('getAllHeroes', listHeroes);
    },
    pesquisarHeroes({ commit }, gender, editora){
        var listResult = [];
        for (let i = 0; i <= 49; i++) {
            var idAleatorio = Math.floor(Math.random() * (731 - 1)) + 1;
            axios.get(
                "https://superheroapi.com/api.php/3682544188473097/" + idAleatorio
            ).then((response) => {
                console.log(response)
                // pesquisa pelo gender
                if((gender != null) && (editora == null)){
                    if(response.data.appearance.gender == gender){
                        listResult.push(response.data);
                    }
                }

                //pesquisa pelo editora
                if((gender == null) && (editora != null)){
                    if(response.data.biography.publisher == editora){
                        listResult.push(response.data);
                    }
                }

                // pesquisa pelos 2 valores
                if((gender != null) && (editora != null)){
                    if((response.data.appearance.gender == gender) && (response.data.biography.publisher == editora)){
                        listResult.push(response.data);
                    }
                }
            });
        }
        commit('pesquisaResult', listResult);
    },
    pesquisaNome({commit}, nome){
        axios.get(
            "https://superheroapi.com/api.php/3682544188473097/search/" + nome
        ).then((response) => {
            commit('pesquisaNomeResult', response.data.results)
        })
    }
}

// único lugar onde eu sou capaz de escrever no state
const mutations = {
    getAllHeroes: (state, listHeroes) => (state.heroes = listHeroes),
    pesquisaResult: (state, listResult) => (state.listPesquisa = listResult),
    pesquisaNomeResult: (state, data) => (state.listPesquisa = data)
};

export default {
    state,
    actions,
    mutations,
    getters,
}