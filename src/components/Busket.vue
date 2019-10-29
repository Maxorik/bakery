<template>
    <section>
        <div class="nocontainer">
            <div class='products'>
                <div v-if='empty()'>Ваша корзина пуста</div>
                <div v-else>
                    <div v-for='product in productsToOrder'>
                        <div>{{ product.name }}</div>
                        <img :src='product.photo' class='product-img'>
                        <div class='busket-change'>
                            <button class='btn-circle'>-</button>
                            <div class='busket-product'> {{ product.count }} </div>
                            <button class='btn-circle'>+</button>
                        </div>
                    </div>
                </div>
            </div>
        
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
        
        computed:{
            ...mapGetters('products',{
                muffins: 'muffins',
                capcakes:'capcakes',
                rulets:'rulets',
                allbake:'allBake'
            }),
            
            ...mapGetters('busket',{
                productsList: 'productsToOrder'
            }),
            
            //фильтр массива всех товаров, чтобы получить только заказанные
            productsToOrder(){
                return this.allbake.filter((elem) =>{
                    return this.productsList.indexOf(elem.id) !== -1;
                })
            }
        },
        
        methods:{
            empty(){ //корзина пуста или нет
                if(this.productsList.length<1) return true;
                else return false
            }
        }
}
</script>

<style>
    .busket-change{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .busket-product{
        font-size: 23px;
    }
    
    .btn-circle{
        margin: 15px;
        border:none;
        background-color: orange;
        border-radius: 100%;
        color:aliceblue;
        width: 35px;
        height: 35px;
        font-size: 23px;
        font-weight: 400;
    }
</style>