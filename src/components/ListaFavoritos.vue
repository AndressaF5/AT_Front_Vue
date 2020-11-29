<template>
    <div id="container">
        <div class="cards">
            <b-card
                :key="hero.id_Marvel" v-for="hero in allHeroesList"
                :title="hero.name"
                :img-src="hero.image"
                :img-alt="hero.description"
                :id="hero.id_Marvel"
                img-top
                tag="article"
                style="max-width: 15rem;"
                class="mb-3 text-center"
            >
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
        methods: mapActions(["getListFavoritos"]),
        created() {
            this.getListFavoritos();
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