<template>
    <section>
        <div class='flex'>
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
            <button class='btn-primary'>Оформить заказ</button>
        </div>
        <div class='order-total'>
            <p>Ваш заказ:</p>
            <div v-if='productsToOrder.length == 0'>
                Пока что вы ничего не заказали
            </div>
            <div  v-else><table>
                <tr>
                    <td>Наименование</td>
                    <td>Количество</td>
                    <td>Сумма</td>
                </tr>
                <tr v-for='value in productsToOrder'>
                    <td>{{value.name}}</td>
                    <td>{{value.count}}</td>
                    <td>{{value.price * value.count}}</td>
                </tr>
            </table>
                <p>
                    Итоговая сумма заказа: {{ ordersum }}
                </p>
            </div>
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
