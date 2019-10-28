<template>
    <section>
        <div class="nocontainer">
            <label>A: </label>
            <input type='text' v-model='price' class='num-calc'>
            
            <label>B: </label>
            <input type='text' v-model='product' class='num-calc'>
        
        </div>
    </section>
</template>

<script type='module'>
    import {mapGetters} from 'vuex';
    import {mapMutations} from 'vuex';
    
    export default {
        data () {
            return {
                
            }
        },

        computed: {
			...mapGetters([
				'price',
				'product'
			]),
            
            price: {
				get(){
					return this.$store.getters.price;
				},
				set(value){
					this.$store.commit('setPrice', value);
				}
			},
            
            product: {
				get(){
					return this.$store.getters.product;
				},
				set(value){
					this.$store.commit('setProduct', value);
				}
			}
		}
}
</script>

<style>
    .num-calc{
        width:40px;
        text-align: center;
    }
</style>
