<template>
    <div>
        <div id="divPesquisa">
            <b-form-input class="form" :disabled="gender !== null || editora !== null" v-model="nome" placeholder="Digite um nome"></b-form-input>
            <b-form-select class="form" :disabled="nome !== null" v-model="gender" :options="options1"></b-form-select>
            <b-form-select class="form" :disabled="nome !== null" v-model="editora" :options="options2"></b-form-select>
            <b-button class="form" v-on:click="pesquisarHero()">Pesquisar</b-button>
        </div>
        <b-row style="padding-top: 40px">
            <div class="cards">
                <b-card
                    :key="hero.id" v-for="hero in getListPesquisa"
                    :title="hero.name"
                    :img-src="hero.image.url"
                    :img-alt="hero.name"
                    :id="hero.id"
                    img-top
                    tag="article"
                    style="max-width: 15rem;"
                    class="mb-3 text-center"
                >
          
                    <b-card-text>
                        <router-link tag="a" :to="{name: 'heroDetail', params: {id : hero.id , hero: hero}}"> + Detalhes</router-link>
                    </b-card-text>

                    <b-button href="#" v-on:click="adicionarNaLista(hero)" block variant="dark">Adicionar na lista</b-button>
                </b-card>
            </div>
        </b-row>
    </div>
</template>

<script>
    import 'bootstrap/dist/css/bootstrap.css';
    import 'bootstrap-vue/dist/bootstrap-vue.css';
    import { mapActions, mapGetters } from 'vuex';

    export default{
        name: 'Pesquisa',
        data() {
            return {
                gender: null,
                editora: null,
                nome: null,
                options1: [
                    {value: 'Female', text: 'Feminino'},
                    {value: 'Male', text: "Masculino"}
                ],
                options2: [
                    {value: 'DC Comics', text: 'DC'},
                    {value: 'Marvel Comics', text: 'Marvel'}
                ]
            }
        },
        methods: {
            ...mapActions([
                "addHeroListaFav",
                "pesquisarHeroes",
                "pesquisaNome"]),
            adicionarNaLista(hero) {
                this.addHeroListaFav(hero);
            },
            pesquisarHero(){
                if(this.nome !== null){
                    this.pesquisaNome(this.nome)
                    this.nome = null
                }else{
                    this.pesquisarHeroes(this.gender, this.editora)
                    this.gender = null
                    this.editora = null
                }
            }
        },
        computed: mapGetters(["getListPesquisa"]),
    }
</script>

<style>
    .cards {
        display: flex;
        flex-wrap: inherit;
        justify-content: space-around;
    }

    #divPesquisa{
        padding-top: 20px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
    }

    .form{
        width: 500px;
        margin-bottom: 12px;
    }

</style>