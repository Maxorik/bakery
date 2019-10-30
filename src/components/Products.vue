<template>
    <section>
        <div class="nocontainer">
            <div class='products-menu'>
                <div class='products-nav' v-on:click='productType=1'>Капкейки</div>
                <div class='products-nav' v-on:click='productType=2'>Маффины</div>
                <div class='products-nav-active' v-on:click='productType=3'>Кексы</div>
            </div>
            <div class='products' v-if='productType==2'>
                <div v-for='product in muffins' class='product-item'>
                    <div>{{ product.name }}</div>
                    <img :src='product.photo' class='product-img'>
                    <div>Цена: {{ product.price }} </div>
                    <div class='flex'>
                        <input type=text class='product-count' placeholder='Сколько штук?' v-model='product.count' v-on:input='setcount([product.id, product.count])'>
                        <button class='product-button btn-primary'
                                @click='add([product.id, product.count])'
                                >Взять</button>
                    </div>
                    <div class='flex'>
                        
                        <button class='product-button btn-warning' @click='remove(product.id); discount(product.id)'>Убрать</button>
                    </div>
                </div>
            </div>
            
            <div class='products' v-if='productType==1'>
                <div v-for='product in capcakes' class='product-item'>
                    <div>{{ product.name }}</div>
                    <img :src='product.photo' class='product-img'>
                    <div>Цена: {{ product.price }} </div>
                    <div class='flex'>
                        <input type=text class='product-count' placeholder='Сколько штук?' v-model='product.count' v-on:input='setcount([product.id, product.count])'>
                        <button class='product-button btn-primary' @click='add([product.id, product.count])'>Взять</button>
                    </div>
                    
                    <div class='flex'>
                       <button class='product-button btn-warning' @click='remove(product.id); discount(product.id)'>Убрать</button>
                    </div>
                </div>
            </div>
            
            <div class='products' v-if='productType==3'>
                <div v-for='product in rulets' class='product-item'>
                    <div>{{ product.name }}</div>
                    <img :src='product.photo' class='product-img'>
                    <div>Цена: {{ product.price }} </div>
                    <div class='flex'>
                        <input type=text class='product-count' placeholder='Сколько штук?' v-model='product.count' v-on:input='setcount([product.id, product.count])'>
                        <button class='product-button btn-primary' @click='add([product.id, product.count])'>Взять</button>
                    </div>
                    
                    <div class='flex'>
                        <button class='product-button btn-warning' @click='remove(product.id); discount(product.id)'>Убрать</button>
                    </div>
                </div>
            </div>
            
            <div class='btn-part'>
                <router-link class='menu-route btn-route' to='/busket'>В корзину</router-link>
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
                productType:1
            }
        },
        //запрашиваем у product.js каталог товаров
        computed:{
            ...mapGetters('products',{
                muffins: 'muffins',
                capcakes:'capcakes',
                rulets:'rulets',
                totalprice: 'totalPrice'
            })
        },
        
        //запрашиваем у busket.js действия с товарами
        methods:{
            ...mapMutations('busket',{
               add:'addToCart',
               remove:'removeFromCart'
            }),
            
           ...mapMutations('products',{
               setcount:'changeCount',
               discount:'discount'
            })
        }
    }
</script>