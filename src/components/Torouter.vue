<template>
    <section>
        <div class="router">
            <div class='ajax-content'>
                <p>Router change would be here!</p>
                <router-view></router-view>
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

<style>
    .ajax-content{
        width:100%;
        border:2px solid #000;
        padding: 20px;
        text-align: center;
    }
</style>

