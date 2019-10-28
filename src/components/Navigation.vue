<template>
    <section>
        <div class="router">
            <div class='nav'>
                <p><router-link to='/busket'>Вернуться на busket</router-link></p>
                <p><router-link to='/sales'>Вернуться на sales</router-link></p>
            </div>
        
            <div> Навигация удобная (расширяемый объект):
                <router-link v-for='(item, index) in pages'
                             :key='index'
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
                    name:'Числа',
                    url:'/sales'
                },
                {
                    name:'Результат',
                    url:'/busket'
                },
                {
                    name:'404',
                    url:'*'
                }
                ]
            }
        }
}
</script>

<style>
    .nav{
        display: flex;
        color:darkcyan;
    }
    
    .nav p{
        margin: 10px;
        border: 1px solid darkcyan;
    }
    
    .nav-active{
        background-color: aqua;
        color:aliceblue;
        padding: 2px;
        transition: background-color 1s color 1s;
    }
</style>