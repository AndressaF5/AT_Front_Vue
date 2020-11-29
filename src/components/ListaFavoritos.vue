<template>
    <div id="container">
        <b-row>
            <h2>Lista de Favoritos</h2>
        </b-row>
        <div class="cards">
            <b-card
                :key="hero.idSuperHero" v-for="hero in allHeroesList"
                :title="hero.nomeHero"
                :img-src="hero.imagem"
                :img-alt="hero.editora"
                :id="hero.idSuperHero"
                img-top
                tag="article"
                style="max-width: 15rem;"
                class="mb-3 text-center"
            >
                <b-card-text>
                    <router-link tag="a" :to="{name: 'heroDetailListFav', params: {id: hero.idSuperHero , hero: hero}}">+ Detalhes</router-link>
                </b-card-text>

                <b-card-text>
                    <router-link tag="a" :to="{name: 'editarHero', params: {id : hero.id , hero: hero}}">Editar heroi</router-link>
                </b-card-text>

                <b-button href="#" @click="removerDaLista(hero)" block variant="danger">Remover da lista</b-button>

            </b-card>
        </div>
    </div>
</template>

<script>
    import 'bootstrap/dist/css/bootstrap.css';
    import 'bootstrap-vue/dist/bootstrap-vue.css';
    import { mapActions, mapGetters } from 'vuex';

    export default {
        name: 'ListaFavoritos',
        computed: mapGetters(["allHeroesList"]),
        methods: mapActions(["getListFavoritos"], ["removerHeroListaFavoritos"]),
        created() {
            this.getListFavoritos();
        },
        removerDaLista: function(hero){
            this.removerHeroListaFavoritos(hero.id);
        }
    }
</script>

<style>
    .cards {
        display: flex;
        flex-wrap: inherit;
        justify-content: space-around;
    }
    .card:hover {
      transform: scale(1.05);
    }
</style>