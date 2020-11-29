<template>
    <b-container>
        <b-row></b-row> 
        <b-row>
            <b-col>
                <b-img :src="hero.image" fluid :alt="hero.name"></b-img>
            </b-col>
            <b-col>
                <h1>{{ hero.name }}</h1>
                <h3> <span>Descrição : </span>{{ hero.description }}</h3>

            </b-col>
            
        </b-row>
    </b-container>
</template>

<script>
export default {
  name: 'HeroDetail',
  data(){
    return { 
        id : this.$route.params.id.name,
        hero : this.$route.params.hero
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
