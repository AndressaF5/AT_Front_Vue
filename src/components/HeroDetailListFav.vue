<template>
    <b-container>
        <b-row></b-row> 
        <b-row>
            <b-col>
                <b-img :src="hero.imagem" fluid :alt="hero.nomeHero"></b-img>
            </b-col>
            <b-col>
                <h1>{{ hero.nomeHero }}</h1>
                <h3> <span>Inteligência: </span>{{ hero.inteligencia }}</h3>
                <h3> <span>Força: </span>{{ hero.forca }}</h3>
                <h3> <span>Velocidade: </span>{{ hero.velocidade }}</h3>
                <h3> <span>Durabilidade: </span>{{ hero.durabilidade }}</h3>
                <h3> <span>Poder: </span>{{ hero.poder }}</h3>
                <h3> <span>Combate: </span>{{ hero.combate }}</h3>
                <h3> <span>Editora: </span>{{ hero.editora }}</h3>
                <h3> <span>Identidade Secreta: </span>{{ hero.identidadeSecreta }}</h3>
            </b-col>
            
        </b-row>
    </b-container>
</template>

<script>
export default {
  name: 'HeroDetailListFav',
  data(){
    return { 
        id: this.$route.params.id,
        hero: this.$route.params.hero
    }
  }
}
</script>

<style>
</style>
