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
                    url:'/about'
                },
                {
                    name:'Товары',
                    url:'/products'
                },
                {
                    name:'Корзина',
                    url:'/busket'
                },
                {
                    name:'Заказ',
                    url:'/order'
                }
                ]
            }
        }
}
</script>

<style>
    .menu-part{
        display: flex;
        flex-direction: column;
        font-size: 22px;
        padding: 5px;
        transition: background-color 1s color 1s;
        text-decoration: none;
    }
    
    .menu-route{
        text-decoration: none;
        padding: 5px;
        transition: background-color 1s color 1s;
    }
    
    .menu-route:hover, .nav-active, .menu-route:link{
        text-decoration: none;
    }
    
    .nav-active{
        background-color: aqua;
        color:aliceblue;
        padding: 5px;
        transition: background-color 1s color 1s;
    }
</style>