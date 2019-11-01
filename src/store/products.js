import Vue from 'vue';
export default {
    namespaced: true,
    state: {
        muffins: getMuffins(),
        capcakes: getCapcakes(),
        rulets: getRulets(),
        allBake: allProducts(), //товары всех категорий
        orderSum:''
    },
    mutations: {
        changeCount(state, payload){  //передаем массив из id и кол-ва
            let id = payload[0];
            let value = payload[1];
            let pattern = /^[0-9]{1,4}$/;
                  
            for(let j=0; j<state.allBake.length; j++ ){
                let obj = state.allBake[j];
                let muf = state.muffins[j];
                let cap = state.capcakes[j];
                let rul = state.rulets[j];
                
                if(obj.id === id){
                    //замена всех НЕ чисел
                    if(!pattern.test(value)){
                        obj.count = value.replace(/[^\w\d]/g, '');
                    }
                    else{
                        obj.count = value;      //изменяем кол-во заказанного товара
                    }
                    
                    //обновление исходных массивов
                    check(id, state.muffins, obj.count);
                    check(id, state.capcakes, obj.count);
                    check(id, state.rulets, obj.count);
                  
                }
            }
        },
        
        plusCount(state, id){
            for(let j=0; j<state.allBake.length; j++ ){
                if(state.allBake[j].id === id){
                    +state.allBake[j].count++;
                    check(id, state.muffins, state.allBake[j].count);
                    check(id, state.capcakes, state.allBake[j].count);
                    check(id, state.rulets, state.allBake[j].count);
                }
            }
        },
        
        minusCount(state, id){
            for(let j=0; j<state.allBake.length; j++ ){
                if(state.allBake[j].id === id){
                    if(+state.allBake[j].count != 0){
                        +state.allBake[j].count--; 
                    }  
                    check(id, state.muffins, state.allBake[j].count);
                    check(id, state.capcakes, state.allBake[j].count);
                    check(id, state.rulets, state.allBake[j].count);
                }
            }
        },
        
        discount(state, id){
            for(let j=0; j<state.allBake.length; j++ ){
                if(state.allBake[j].id === id){
                    state.allBake[j].count = '';  
                    check(id, state.muffins, state.allBake[j].count);
                    check(id, state.capcakes, state.allBake[j].count);
                    check(id, state.rulets, state.allBake[j].count);
                }
            }
        }
    },
    actions: {},
    getters: {
        muffins(state){
			return state.muffins;
		},
        
        capcakes(state){
			return state.capcakes;
		},
        
        rulets(state){
			return state.rulets;
		},
        
        allBake(state){
			return state.allBake;
		},
        
        totalPrice(state){
			return state.totalPrice;
		},
        
        orderSum(state){
            let sum=0;
            for(let i=0; i<state.allBake.length; i++){
                if(state.allBake[i].count !== ''){
                    sum = sum+ +state.allBake[i].count * +state.allBake[i].price;
                }
            }
            return sum;
        }
    }
}

function check(id, arr, value){
    for(let i=0; i<arr.length; i++){
        if(arr[i].id == id){
            arr[i].count = value;
        }
    }
}


function getMuffins(){
    return [
        {
            id: 1,
            name: 'Ореховый взгляд',
            price: 200,
            photo: './img/muf1.jpg',
            count:''
        },
         {
            id: 11,
            name: 'Тающий на языке',
            price: 220,
            photo: './img/muf4.jpg',
            count:''
        },
        {
            id: 2,
            name: 'Кофейный рай',
            price: 310,
            photo: './img/muf2.jpg',
            count:''
        },
        {
            id: 3,
            name: 'Ваниль богов',
            price: 180,
            photo: './img/muf3.jpg',
            count:''
        }
    ]
}

function getCapcakes(){
    return [
        {
            id: 14,
            name: 'Твоя вишенка',
            price: 245,
            photo: './img/cap4.jpg',
            count:''
        },
        {
            id: 4,
            name: 'Нежная звезда',
            price: 145,
            photo: './img/cap1.jpg',
            count:''
        },
        {
            id: 5,
            name: 'Малиновый фреш',
            price: 210,
            photo: './img/cap2.jpg',
            count:''
        },
        {
            id: 6,
            name: 'Сладкий август',
            price: 230,
            photo: './img/cap3.jpg',
            count:''
        }
    ]
}

function getRulets(){
    return [
        {
            id: 7,
            name: 'Это клубника!',
            price: 300,
            photo: './img/rulet1.jpg',
            count:''
        },
        {
            id: 8,
            name: 'Следы на луне',
            price: 340,
            photo: './img/rulet2.jpg',
            count:''
        },
        {
            id: 18,
            name: 'Вечер с корицей',
            price: 350,
            photo: './img/rulet4.jpg',
            count:''
        },
        {
            id: 9,
            name: 'Ореховый ролл',
            price: 380,
            photo: './img/rulet3.jpg',
            count:''
        }
    ]
}

function allProducts(){
    let all = [];
    for(let i=0; i<getMuffins().length; i++){
        all.push(getMuffins()[i]);
    }
    for(let i=0; i<getCapcakes().length; i++){
        all.push(getCapcakes()[i]);
    }
    for(let i=0; i<getRulets().length; i++){
        all.push(getRulets()[i]);
    }
    
    return all;
}