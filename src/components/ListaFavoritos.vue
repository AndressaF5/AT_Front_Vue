<template>
  <b-row id="container">
    <div class="cards">
      <b-row id="listaVazia" v-if="allHeroesList.length == 0">
        <h3>Lista Vazia</h3>
        <br>
        <b-button href="#" v-on:click="paginaListarHeroes()">Listar herois</b-button>
        <br>
        <b-button href="#" v-on:click="paginaPesquisar()">Pesquisar herois</b-button>
      </b-row>

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
          <p>Inteligência: {{hero.inteligencia}}</p>
          <p>Força: {{hero.forca}}</p>
          <p>Velocidade: {{hero.velocidade}}</p>
          <p>Durabilidade: {{hero.durabilidade}}</p>
          <p>Poder: {{hero.poder}}</p>
          <p>Combate: {{hero.combate}}</p>
        </b-card-text>
          
        <b-card-text>
          <router-link tag="a" :to="{name: 'editarHero', params: {id: hero.idSuperHero, hero: hero}}">Editar heroi</router-link>
        </b-card-text>
          
        <b-button href="#" v-on:click="removerDaLista(hero.idSuperHero)" block variant="danger">Remover da lista</b-button>
      </b-card>
    </div>
  </b-row>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css';
  import 'bootstrap-vue/dist/bootstrap-vue.css';
  import { mapActions, mapGetters } from 'vuex';

  export default {
      name: 'ListaFavoritos',
      computed: mapGetters(["allHeroesList"]),
      methods: {
        ...mapActions(["getListFavoritos", "removerHeroListaFavoritos"]),
          
        removerDaLista(idSuperHero){
          this.removerHeroListaFavoritos(idSuperHero);
          window.setTimeout(() => {
            this.getListFavoritos()
          }, 1000);
        },
        paginaListarHeroes(){
          this.$router.push('/listarHeroes')
        },
        paginaPesquisar(){
          this.$router.push('/pesquisar');
        }
      },
      created() {
        this.getListFavoritos();
      },
  }
</script>

<style scoped>
  .cards{
    display: flex;
    flex-wrap: inherit;
    justify-content: space-around;
    padding: 50px;
  }

  .row {
    justify-content: center;
  }

  p{
    text-align: left;
    font-size: 25px;
  }

  #listaVazia{
    flex-direction: column;
  }
</style>