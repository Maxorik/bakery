<template>
    <section>
        <div class="nocontainer">
            <div class='products-menu'>
                <div class='products-nav' v-on:click='productType=1; hih($event.target)'>Капкейки</div>
                <div class='products-nav' v-on:click='productType=2; hih($event.target)'>Маффины</div>
                <div class='products-nav' v-on:click='productType=3; hih($event.target)'>Рулеты</div>
            </div>
            <div class='products' v-if='productType==2'>
                <div v-for='product in muffins' class='product-item'>
                    <div class='product-name'>{{ product.name }}</div>
                    <img :src='product.photo' class='product-img'>
                    <div class='product-name'>Цена: {{ product.price }} ₽ </div>
                    <div class='flex'>
                        <input type=text class='product-count' placeholder='Сколько штук?' v-model='product.count' v-on:input='setcount([product.id, product.count])'>
                        <button class='product-button'
                                @click='add([product.id, product.count])'
                                >Взять</button>
                    </div>
                    <div class='flex'>
                        
                        <button class='product-button btn-del' @click='remove(product.id); discount(product.id)'>Убрать</button>
                    </div>
                </div>
            </div>
            
            <div class='products' v-if='productType==1'>
                <div v-for='product in capcakes' class='product-item'>
                    <div class='product-name'>{{ product.name }}</div>
                    <img :src='product.photo' class='product-img'>
                    <div class='product-name'>Цена: {{ product.price }} ₽ </div>
                    <div class='flex'>
                        <input type=text class='product-count' placeholder='Сколько штук?' v-model='product.count' v-on:input='setcount([product.id, product.count])'>
                        <button class='product-button' @click='add([product.id, product.count])'>Взять</button>
                    </div>
                    
                    <div class='flex'>
                       <button class='product-button btn-del' @click='remove(product.id); discount(product.id)'>Убрать</button>
                    </div>
                </div>
            </div>
            
            <div class='products' v-if='productType==3'>
                <div v-for='product in rulets' class='product-item'>
                    <div class='product-name'>{{ product.name }}</div>
                    <img :src='product.photo' class='product-img'>
                    <div class='product-name'>Цена: {{ product.price }} ₽</div>
                    <div class='flex'>
                        <input type=text class='product-count' placeholder='Сколько штук?' v-model='product.count' v-on:input='setcount([product.id, product.count])'>
                        <button class='product-button' @click='add([product.id, product.count])'>Взять</button>
                    </div>
                    
                    <div class='flex'>
                        <button class='product-button btn-del' @click='remove(product.id); discount(product.id)'>Убрать</button>
                    </div>
                </div>
            </div>
            
            <div class='btn-part'>
                <router-link class='btn-route' to='/busket'>В корзину</router-link>
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
                productType:1,
                
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
            }),
            
            hih(target){
                let categorys = document.getElementsByClassName('products-nav');
                for(let i=0; i<categorys.length; i++){
                    categorys[i].classList.remove('products-nav-active');
                }
                target.classList.add('products-nav-active');
            }
        }
    }
                                      
</script>