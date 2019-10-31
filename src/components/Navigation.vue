<template>
    <section>
        <div class="router">        
            <div class='menu-part'>
                <router-link v-for='(item, index) in pages'
                             :key='index'
                             class='menu-route'
                             :to='item.url'
                             active-class='nav-active'
                             >
                    {{ item.name }}
                </router-link>
                
            </div>
        </div>
    </section>
</template>

<script type='module'>
    import {mapGetters} from 'vuex';
    
    export default {
        data () {
            return {
                pages:[
                {
                    name:'О нас',
                    fa:'',
                    url:'/about'
                },
                {
                    name:'Товары',
                    fa:'',
                    url:'/products'
                },
                {
                    name:'Корзина',
                    fa:'',
                    url:'/busket'
                },
                {
                    name:'Заказ',
                    fa:'',
                    url:'/order'
                }
                ]
            }
        }
}
</script>
