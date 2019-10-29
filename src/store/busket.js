export default {
    namespaced: true,
    state: {
        productsToOrder:[]  //массив список заказанных товаров
    },
    //Добавление и удаление из корзины
    mutations: {
        addToCart(state, id){
            if(state.productsToOrder.indexOf(id) === -1){ //проверка на уникальность товара
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