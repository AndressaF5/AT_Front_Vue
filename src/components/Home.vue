<template>
    <div>
        <b-container>
            <b-row>
                <h1>Título</h1>
            </b-row>

            <b-row>
                <ListarHeroes :listaFavoritos="listaFavoritos"/>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    import ListarHeroes from '@/components/ListarHeroes.vue'

    export default {
        name: 'Home',
        data() {
            return {
                listaFavoritos: []
            }
        },
        computed: {
            quantidadeNaListaFavoritos: function(){
                return this.listaFavoritos.length;
            }
        },
        components: {
            ListarHeroes,
        }
    }
</script>

<style>
    .container {
        font-family: 'Quicksand', sans-serif;
        margin-top: 40px;
    }

    .row {
        justify-content: center;
    }
</style>