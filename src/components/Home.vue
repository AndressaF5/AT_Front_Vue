<template>
    <div>
        <ListarHeroes />
    </div>
</template>

<script>
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    import ListarHeroes from '@/components/ListarHeroes.vue'

    export default {
        name: 'Home',
        components: {
            ListarHeroes
        }
    }
</script>

<style scoped>

</style>