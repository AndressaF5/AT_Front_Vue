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
            </b-col>
            
        </b-row>
    </b-container>
</template>

<script>
export default {
  name: 'HeroDetail',
  data(){
    return { 
        id: this.$route.params.id.name,
        hero: this.$route.params.hero
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
