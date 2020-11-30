<template>
    <div>
        <b-row>
            <b-col>
                <b-img :src="hero.imagem" fluid :alt="hero.nomeHero"></b-img>
            </b-col>
            <b-col class="editarHero">
                <form v-on:submit.prevent="editarHero">
                    <div class="form-group">
                        <label for="newHero.NomeHero">Nome do herói</label>
                        <input 
                        type="text"
                        class="form-control"
                        id="nomeHero"
                        placeholder="Digite o nome do herói"
                        v-model="newHero.NomeHero">
                    </div>
                    <div class="form-group">
                        <label for="newHero.Inteligencia">Inteligência</label>
                        <input 
                        type="text"
                        class="form-control"
                        id="inteligencia"
                        placeholder="Digite o valor da inteligência"
                        v-model="newHero.inteligencia">
                    </div>
                    <div class="form-group">
                        <label for="newHero.Forca">Força</label>
                        <input 
                        type="text"
                        class="form-control"
                        id="forca"
                        placeholder="Digite o valor da força do herói"
                        v-model="newHero.Forca">
                    </div>
                    <div class="form-group">
                        <label for="newHero.Velocidade">Velocidade</label>
                        <input 
                        type="text"
                        class="form-control"
                        id="velocidade"
                        placeholder="Digite o valor da velocidade do herói"
                        v-model="newHero.Velocidade">
                    </div>
                    <div class="form-group">
                        <label for="newHero.Durabilidade">Durabilidade</label>
                        <input 
                        type="text"
                        class="form-control"
                        id="durabilidade"
                        placeholder="Digite o valor da durabilidade do herói"
                        v-model="newHero.Durabilidade">
                    </div>
                    <div class="form-group">
                        <label for="newHero.Poder">Poder</label>
                        <input 
                        type="text"
                        class="form-control"
                        id="poder"
                        placeholder="Digite o valor da poder do herói"
                        v-model="newHero.Poder">
                    </div>
                    <div class="form-group">
                        <label for="newHero.Combate">Combate</label>
                        <input 
                        type="text"
                        class="form-control"
                        id="combate"
                        placeholder="Digite o valor do combate do herói"
                        v-model="newHero.Combate">
                    </div>
                    <div class="form-group">
                        <label for="newHero.Editora">Editora</label>
                        <input 
                        type="text"
                        class="form-control"
                        id="editora"
                        placeholder="Digite a editora do herói"
                        v-model="newHero.Editora">
                    </div>
                    <div class="form-group">
                        <label for="newHero.Apelido">Apelido</label>
                        <input 
                        type="text"
                        class="form-control"
                        id="apelido"
                        placeholder="Digite o apelido do herói"
                        v-model="newHero.Apelido">
                    </div>
                    <div class="form-group">
                        <label for="newHero.IdentidadeSecreta">Identidade Secreta</label>
                        <input 
                        type="text"
                        class="form-control"
                        id="identidadeSecreta"
                        placeholder="Digite a identidade secreta do herói"
                        v-model="newHero.IdentidadeSecreta">
                    </div>

                    <div class="form-group">
                    <button class="btn btn-success">Finalizar edição</button>
                </div>
                </form>
            </b-col>
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
                    NomeHero: "",
                    Inteligencia: "",
                    Forca: "",
                    Velocidade: "",
                    Durabilidade: "",
                    Poder: "",
                    Combate: "",
                    Editora: "",
                    Apelido: "",
                    IdentidadeSecreta: ""
                },
            }
        },
        methods: {
            ...mapActions(["editarHeroListFav"]),
            editarHero() {
                console.log("EditarHero: Id = " + this.hero.idSuperHero, "NewHero = ", this.newHero)
                this.editarHeroListFav(this.hero.idSuperHero, this.newHero);
            }
        } 
    }
</script>

<style>
    .form-group input{
        width: 400px;
    }
</style>