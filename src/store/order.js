export default {
    namespaced: true,
    state: {
        inputs:[{
            name:'Ваше ФИО *',
            value:'',
            pattern: /^[а-яА-Я]{2,20}[ ][а-яА-Я]{2,20}$/,
            classes:''
        },
        {
            name:'Телефон *',
            value:'',
            pattern: /^[0-9]{6,14}$/,
            classes:''
        },
        {
            name:'E-mail *',
            value:'',
            pattern: /.*[@].*[.].+/,
            classes:''
        }]
    },
  mutations: { 
      validate(state, payload){
            console.log(payload);
            let target = payload[0];
            let key = payload[1];
            let pattern = state.inputs[key].pattern;
          
            if(!pattern.test(target.value)){
                state.inputs[key].classes = 'not-valid';
            }
            else{
                state.inputs[key].classes = 'valid';
            }
            }
  },
  actions: {},
  getters: {
      inputs(state){
          return state.inputs;
      }
      
  }
} 