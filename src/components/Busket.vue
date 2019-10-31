<template>
    <section>
        <div class="nocontainer">
            <div class='busket-sum' v-if='empty()'>
                <p>Ваша корзина пуста</p><br>
                <div class='takeme'>
                    <img src='../img/takeme4.png' class='takeme-img'>
                    <p>Возьми меня с собой!</p>
                    <router-link class='btn-route' to='/products'>Выбрать</router-link>
                </div>
            </div>
            <div v-else class='grid'>
                <div v-for='product in productsToOrder'>
                    <div class='product-name'>{{ product.name }}</div>
                    <img :src='product.photo' class='product-img'>
                    <div class='busket-change'>
                        <button class='btn-circle' @click='minuscount(product.id)'>-</button>
                        <div class='busket-product'> {{ product.count }} </div>
                        <button class='btn-circle' @click='pluscount(product.id)'>+</button>
                    </div>
                </div>
            </div>
            <div>
                <p v-if='!empty()' class='busket-sum'>Всего к оплате: {{ordersum}} рублей</p>
            </div>
            <div class='btn-part'>
                <router-link class='btn-route' to='/products' v-if='!empty()'>Выбрать еще</router-link>
                <router-link class='btn-route' to='/order' v-if='!empty()'>Оформить заказ</router-link>
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
