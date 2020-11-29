import axios from 'axios';

const state = {
    heroes: []
};

const getters = {
    allHeroes: state => state.heroes,
};

const actions = {
    getAllHeroes({ commit }){
        // faz a requisição com o verbo get
        axios.get(
            // nessa url 
            "https://superheroapi.com/api.php/3682544188473097/search/flash"
         // quando a resposta chegar, recebe essa resposta como parâmetro e 
        ).then((response) => {
            // coloca os dados dessa resposta dentro do mutations getAllHeroes
            commit('getAllHeroes', response.data.results);
            console.log(response.data.results)
        });
    }
}

// único lugar onde eu sou capaz de escrever no state
const mutations = {
    getAllHeroes: (state, results) => (state.heroes = results)
};

export default {
    state,
    actions,
    mutations,
    getters,
}