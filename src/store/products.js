import Vue from 'vue';
export default {
    namespaced: true,
    state: {
        muffins: getMuffins(),
        capcakes: getCapcakes(),
        rulets: getRulets(),
        allBake: allProducts() //товары всех категорий
    },
    mutations: {
        changeCount(state, payload){  //передаем массив из id и кол-ва
            let id = payload[0];
            let value = payload[1];
            for(let j=0; j<state.allBake.length; j++ ){
                let obj = state.allBake[j];
                if(obj.id === id){
                    obj.count = value;      //изменяем кол-во заказанного товара
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
		}
    }
}


function getMuffins(){
    return [
        {
            id: 1,
            name: 'muffin1',
            price: 200,
            photo: '../img/muf1.jpg',
            count:''
        },
        {
            id: 2,
            name: 'muffin2',
            price: 310,
            photo: '../img/muf2.jpg',
            count:''
        },
        {
            id: 3,
            name: 'muffin3',
            price: 180,
            photo: '../img/muf3.jpg',
            count:''
        }
    ]
}

function getCapcakes(){
    return [
        {
            id: 4,
            name: 'capcake1',
            price: 145,
            photo: '../img/cap1.jpg',
            count:''
        },
        {
            id: 5,
            name: 'capcake2',
            price: 210,
            photo: '../img/cap2.jpg',
            count:''
        },
        {
            id: 6,
            name: 'capcake3',
            price: 230,
            photo: '../img/cap3.jpg',
            count:''
        }
    ]
}

function getRulets(){
    return [
        {
            id: 7,
            name: 'rulet1',
            price: 300,
            photo: '../img/rulet1.jpg',
            count:''
        },
        {
            id: 8,
            name: 'rulet2',
            price: 340,
            photo: '../img/rulet2.jpg',
            count:''
        },
        {
            id: 9,
            name: 'rulet3',
            price: 380,
            photo: '../img/rulet3.jpg',
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