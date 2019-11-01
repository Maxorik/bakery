<template>
    <section>
        <div class='checklist'>
        <div class="anketa">
            <div v-for='(value, index) in inputs' :key='index'>
                <label :class='value.classes'>{{ value.name }}</label><br>
                <input type="text" v-on:input='valid( [$event.target, index])' class='anketa-input auto'>
            </div>
            <div class='order-date'>
                <label>Когда хотите забрать? *</label><br>
                <input type='date' class='anketa-input'>
                <input type='time' class='anketa-input time' name='time'>
            </div>
            <label>Промокод</label>
            <input type='text' class='anketa-input'>
            <label>Комментарий к заказу</label>
            <textarea type='text' class='anketa-input'></textarea>
        
            <p>* - обязательные к заполнению поля</p>
            <button class='btn-route'>Оформить заказ</button>
        </div>
        <div class='order-total'>
            <p class='busket-sum'>Ваш заказ:</p>
            <div v-if='productsToOrder.length == 0' class='check btn-marg'>
                <p style='margin-bottom:10px;'>Пока что вы ничего не заказали</p><br>
                <router-link class='btn-route' to='/products'>К кексикам! </router-link>
            </div>
            <div class='checkTotal' v-else><table>
                <tr>
                    <td class='check-head'>Наименование</td>
                    <td class='check-head'>Количество</td>
                    <td class='check-head'>Сумма</td>
                </tr>
                <tr v-for='value in productsToOrder'>
                    <td class='check'>{{value.name}}</td>
                    <td class='check'>{{value.count}}</td>
                    <td class='check'>{{value.price * value.count}} ₽</td>
                </tr>
            </table>
                <p class='total-sum'>
                    Итоговая сумма заказа: {{ ordersum }} ₽
                </p>
            </div>
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
        },
        
        computed:{
            ...mapGetters('order',{
                inputs:'inputs'
            }),
            
            ...mapGetters('products',{
                allBake:'allBake',
                ordersum: 'orderSum'
            }),
            
            ...mapGetters('busket',{
                productsList: 'productsToOrder'
            }),
            
            //фильтр массива всех товаров, чтобы получить только заказанные
            productsToOrder(){
                return this.allBake.filter((elem) =>{
                    return this.productsList.indexOf(elem.id) !== -1;
                })
            }
        },
        
        methods:{
            ...mapMutations('order',{
                valid:'validate'
            })
        }
}
</script>
