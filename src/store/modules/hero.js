import axios from 'axios';

const state = {
    heroes: []
};

const getters = {
    allHeroes: state => state.heroes,
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
                console.log(listHeroes);
            });
        }
        commit('getAllHeroes', listHeroes);
    }
}

// único lugar onde eu sou capaz de escrever no state
const mutations = {
    getAllHeroes: (state, listHeroes) => (state.heroes = listHeroes)
};

export default {
    state,
    actions,
    mutations,
    getters,
}