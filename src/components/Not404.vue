<template>
    <section>
        <div class="router">
            <p style='font-size:45px; color: blue'>
                Страница не найдена :(
            </p>
            
            <div style='width:100%; text-align:center'>
                <router-link to='/busket'>Вернуться на главную</router-link>
            </div>
        
        </div>
    </section>
</template>

<script type='module'>
    import {mapGetters} from 'vuex';
    
    export default {
        data () {
            return {
                
            }
        }
}
</script>

