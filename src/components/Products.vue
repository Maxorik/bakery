<template>
    <section>
        <div class="nocontainer">
            <div class='products-menu'>
                <p class='products-nav' v-on:click='productType=1'>Маффины</p>
                <p class='products-nav' v-on:click='productType=2'>Капкейки</p>
                <p class='products-nav' v-on:click='productType=3'>Кексы</p>
            </div>
            <div class='products' v-if='productType==1'>
                <div v-for='product in muffins' class='product-item'>
                    <div>{{ product.name }}</div>
                    <img :src='product.photo' class='product-img'>
                    <div>Цена: {{ product.price }} </div>
                    <div class='flex'>
                        <input type=text class='product-count' placeholder='Сколько штук?' v-model='product.count' v-on:input='setcount([product.id, product.count])'>
                        <button class='product-button btn-primary'
                                @click='add(product.id)'
                                >Взять</button>
                    </div>
                    <div class='flex'>
                        
                        <button class='product-button btn-warning' @click='remove(product.id)'>Убрать</button>
                    </div>
                </div>
            </div>
            
            <div class='products' v-if='productType==2'>
                <div v-for='product in capcakes' class='product-item'>
                    <div>{{ product.name }}</div>
                    <img :src='product.photo' class='product-img'>
                    <div>Цена: {{ product.price }} </div>
                    <div class='flex'>
                        <input type=text class='product-count' placeholder='Сколько штук?' v-model='product.count' v-on:input='setcount([product.id, product.count])'>
                        <button class='product-button btn-primary' @click='add(product.id)'>Взять</button>
                    </div>
                    
                    <div class='flex'>
                        <button class='product-button btn-warning' @click='remove(product.id)'>Убрать</button>
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
                        <button class='product-button btn-primary' @click='add(product.id)'>Взять</button>
                    </div>
                    
                    <div class='flex'>
                        <button class='product-button btn-warning' @click='remove(product.id)'>Убрать</button>
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
                rulets:'rulets'
            })
        },
        
        //запрашиваем у busket.js действия с товарами
        methods:{
            ...mapMutations('busket',{
                add:'addToCart',
                remove:'removeFromCart'
            }),
            
           ...mapMutations('products',{
                setcount:'changeCount'
            })
        }
}
</script>

<style>
    .container{
        display: flex;
        margin: 4%;
    }

    .flex{
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
    }
    
    .products{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    .product-item{
        margin-right: 15px;
        width: 33%;
        padding: 10px;
    }
    
    .product-img{
        width:100%;
        height: auto;
    }
    
    .product-count{
        width:64%;
        text-align: center;
    }
    
    .products-menu{
        display: flex;
        flex-direction: row;
    }
    
    .products-nav{
        margin: 0 10px 10px 0;
    }
    
    .product-button{
        width:35%;
        text-align: center;
    }
    
    .btn-warning{
        margin-left: 65%;
    }
    
    .btn-part{
        width: 100%;
        text-align: center;
        margin: 0 auto;
        margin-top: 20px;
    }
    
    .btn-route{
        background-color: aqua;
        color:aliceblue;
        font-size: 22px;
    }
</style>