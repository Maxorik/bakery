<template>
    <section>
        <div class="nocontainer">
            <div class='products'>
                <div v-if='empty()'>Ваша корзина пуста</div>
                <div v-else class='grid'>
                    <div v-for='product in productsToOrder' class='product'>
                        <div>{{ product.name }}</div>
                        <img :src='product.photo' class='product-img'>
                        <div class='busket-change'>
                            <button class='btn-circle' @click='minuscount(product.id)'>-</button>
                            <div class='busket-product'> {{ product.count }} </div>
                            <button class='btn-circle' @click='pluscount(product.id)'>+</button>
                        </div>
                    </div>
                </div>
                <div>
                    Всего к оплате: {{ordersum}} рублей
                </div>
                <div class='btn-part'>
                    <router-link class='menu-route btn-route' to='/products'>Выбрать еще</router-link>
                    <router-link class='menu-route btn-route' to='/order'>Оформить заказ</router-link>
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
                allbake:'allBake',
                totalprice: 'totalPrice',
                ordersum:'orderSum'
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
            ...mapMutations('products',{
                setcount:'changeCount',
                pluscount:'plusCount',
                minuscount:'minusCount'
            }),
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
        margin: 2%;
        border:none;
        background-color: orange;
        border-radius: 100%;
        color:aliceblue;
        width: 20%;
        height: 25%;
        font-size: 23px;
        font-weight: 400;
    }
    
    .grid{
        width: 75vw;
        display: grid;
        grid-template-rows: repeat(3, 45%);
        grid-template-columns: repeat(4, 20%);
        grid-gap: 2vw;
    }
</style>