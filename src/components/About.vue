<template>
    <section>
        <div class="about-here">
            <div class='busket-sum about-text'>
                <p style="text-indent:2em;">Наша пекарня принципиально не использует искусственные добавки и усилители вкуса при изготовлении продукции.</p>
                <p style="text-indent:2em;">Для своего производства мы выбираем только свежие и натуральные ингредиенты.</p>
                <p style="text-indent:2em;">Все наши изделия выпекаются в духовке, а не жарятся. Следовательно, в них нет канцерогенов, образующихся при длительном нагреве масла, и приносящих большой вред нашему организму.</p>
                <p style="text-indent:2em;">Кроме того, благодаря технологии выпечки и соблюдению температурного режима сохраняются витамины и полезные вещества.</p>
                
                <div class='what-btn'>
                    <router-link class='btn-route' to='/products'>Что же у нас есть?</router-link>
                </div>
            </div>
            
            
            <div class='about-img-d'>
                <img src='../img/about.jpg' class='about-img'>
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
        }
}
</script>
