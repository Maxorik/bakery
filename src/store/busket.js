export default {
    namespaced: true,
    state: {
        productsToOrder:[]  //массив список заказанных товаров
    },
    //Добавление и удаление из корзины
    mutations: {
        addToCart(state, payload){
            let id = payload[0];
            let val = payload[1];
            console.log(val);
            if(state.productsToOrder.indexOf(id) === -1 && +val>0){ //проверка на уникальность товара
                state.productsToOrder.push(id);
            }
        },
        
        removeFromCart(state, id){
            let y = state.productsToOrder.indexOf(id); //позиция удаляемого товара в массиве корзины
            state.productsToOrder.splice(y,1);
        }
    },
    actions: {},
    getters: {
        productsToOrder(state){
			return state.productsToOrder;
		}
    }
} 