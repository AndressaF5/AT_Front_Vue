<template>
    <div>
        <div class="cards">
            <b-card
                :key="heroe.id" v-for="heroe in heroes"
                :title="heroe.name"
                :img-src="heroe.image"
                :img-alt="heroe.description"
                :id="heroe.id"
                img-top
                tag="article"
                style="max-width: 18rem;"
                class="mb-3 text-center"
            >

                <b-button href="#" @click="adicionarNaLista()" block variant="dark">Adicionar na lista</b-button>

            </b-card>
        </div>
    </div>
</template>

<script>
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'

    export default {
        name: 'Home',
        data() {
            return {
                heroes: [
                    {id: 1, name: 'Vision', description: 'The metal monstrosity called Ultron created the synthetic humanoid known as the Vision from the remains of the original android Human Torch of the 1940s to serve as a vehicle of vengeance against the Avengers.', image: 'http://i.annihil.us/u/prod/marvel/i/mg/9/d0/5111527040594.jpg'},
                    {id: 2, name: 'Thor', description: 'As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he is quite smart and compassionate.  He is self-assured, and he would never, ever stop fighting for a worthwhile cause.', image: 'http://i.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350.jpg'},
                    {id: 3, name: 'Spider-Man', description: 'Bitten by a radioactive spider, high school student Peter Parker gained the speed, strength and powers of a spider. Adopting the name Spider-Man, Peter hoped to start a career using his new abilities. Taught that with great power comes great responsibility, Spidey has vowed to use his powers to help people.', image: 'http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b'},
                    {id: 5, name: 'Hulk', description: 'Caught in a gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk. An all too often misunderstood hero, the angrier the Hulk gets, the stronger the Hulk gets.', image: 'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0.jpg'},
                ],
                listaFavoritos: []
            };
        },
        methods: {
            adicionarNaLista: function(){
                alert('Adicionado na lista');
            }
        }
    }
</script>

<style scoped>
    .cards{
        display: flex;
    }
</style>