<template>
    <b-row id="container">
        <div class="cards">
            <b-card
                :key="hero.id" v-for="hero in allHeroes"
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
</template>

<script>
    import 'bootstrap/dist/css/bootstrap.css';
    import 'bootstrap-vue/dist/bootstrap-vue.css';
    import { mapActions, mapGetters } from 'vuex';

    export default {
        name: 'ListarHeroes',
        computed: mapGetters(["allHeroes"]),
        methods: {
            ...mapActions([
                "getAllHeroes",
                "addHeroListaFav"]),
            adicionarNaLista(hero) {
                this.addHeroListaFav(hero);
            },
        },
        created() {
            this.getAllHeroes();
        },
        
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