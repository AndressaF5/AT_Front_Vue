<template>
    <div>
        <b-row>
            <div>
                <b-col>
                    <h2> {{ hero.nomeHero }} </h2>
                    <b-img :src="hero.imagem" fluid :alt="hero.nomeHero"></b-img>
                </b-col>
            </div>
            <div style="padding-top: 80px;">
                <b-col class="editarHero">
                    <form v-on:submit.prevent="editarHero">

                        <div class="form-group">
                            <label for="newHero.Inteligencia">Inteligência</label>
                            <input 
                            type="number"
                            class="form-control"
                            id="inteligencia"
                            placeholder="Digite o valor da inteligência"
                            v-model="newHero.Inteligencia">
                        </div>
                        <div class="form-group">
                            <label for="newHero.Forca">Força</label>
                            <input 
                            type="number"
                            class="form-control"
                            id="forca"
                            placeholder="Digite o valor da força do herói"
                            v-model="newHero.Forca">
                        </div>
                        <div class="form-group">
                            <label for="newHero.Velocidade">Velocidade</label>
                            <input 
                            type="number"
                            class="form-control"
                            id="velocidade"
                            placeholder="Digite o valor da velocidade do herói"
                            v-model="newHero.Velocidade">
                        </div>
                        <div class="form-group">
                            <label for="newHero.Durabilidade">Durabilidade</label>
                            <input 
                            type="number"
                            class="form-control"
                            id="durabilidade"
                            placeholder="Digite o valor da durabilidade do herói"
                            v-model="newHero.Durabilidade">
                        </div>
                        <div class="form-group">
                            <label for="newHero.Poder">Poder</label>
                            <input 
                            type="number"
                            class="form-control"
                            id="poder"
                            placeholder="Digite o valor da poder do herói"
                            v-model="newHero.Poder">
                        </div>
                        <div class="form-group">
                            <label for="newHero.Combate">Combate</label>
                            <input 
                            type="number"
                            class="form-control"
                            id="combate"
                            placeholder="Digite o valor do combate do herói"
                            v-model="newHero.Combate">
                        </div>

                        <div class="form-group">
                            <button class="btn btn-success">Finalizar edição</button>
                        </div>
                    </form>
                </b-col>
            </div>
        </b-row>
    </div>
</template>

<script>
    import 'bootstrap/dist/css/bootstrap.css';
    import 'bootstrap-vue/dist/bootstrap-vue.css';
    import { mapActions } from 'vuex';

    export default {
        name: 'EditarHero',
        data() {
            return {
                hero: this.$route.params.hero,
                newHero: {
                    IdSuperHero: this.$route.params.id,
                    Inteligencia: "",
                    Forca: "",
                    Velocidade: "",
                    Durabilidade: "",
                    Poder: "",
                    Combate: "",
                },
            }
        },
        methods: {
            ...mapActions(["editarHeroListFav"]),
            editarHero() {
                this.editarHeroListFav(this.newHero);
            }
        } 
    }
</script>

<style scoped>
    .form-group input{
        width: 400px;
    }

    .row{
        padding: 50px;
    }
</style>