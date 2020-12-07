<template>
    <b-container>
        <b-row>
            <b-col>
                <b-img :src="hero.image.url" fluid :alt="hero.name"></b-img>
            </b-col>
            <b-col>
                <h1>{{ hero.name }}</h1>
                <h3> <span>Inteligência: </span>{{ hero.powerstats.intelligence }}</h3>
                <h3> <span>Força: </span>{{ hero.powerstats.strength }}</h3>
                <h3> <span>Velocidade: </span>{{ hero.powerstats.speed }}</h3>
                <h3> <span>Durabilidade: </span>{{ hero.powerstats.durability }}</h3>
                <h3> <span>Poder: </span>{{ hero.powerstats.power }}</h3>
                <h3> <span>Combate: </span>{{ hero.powerstats.combat }}</h3>
                <h3> <span>Editora: </span>{{ hero.biography.publisher }}</h3>
                <h3> <span>Identidade Secreta: </span>{{ hero.biography.full-name }}</h3>

                <br>

                <b-col>
                    <b-button href="#" v-on:click="adicionarNaLista(hero)" block variant="success">Adicionar na lista</b-button>
                </b-col>

                <br>

                <b-col>
                    <router-link :to="{name: 'home'}">
                        <b-button block variant="dark">Voltar</b-button>
                    </router-link>
                </b-col>
            </b-col>
            
        </b-row>
    </b-container>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
      name: 'HeroDetail',
      methods: {
          ...mapActions(["addHeroListaFav"]),
          
          adicionarNaLista(hero){
            this.addHeroListaFav(hero);
          },
      },
      data(){
        return { 
            id: this.$route.params.id.name,
            hero: this.$route.params.hero
        }
      }
    }
</script>
