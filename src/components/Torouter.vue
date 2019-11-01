<template>
    <section>
        <div class="router">
            <transition name="routeThePart"
                        enter-active-class = "animated pulse">
                <router-view></router-view>
            </transition>
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

