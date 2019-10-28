export default {
    state: {
        price:12,
        product:11
    },
  mutations: {
      setPrice(state, val){
			state.price = val;
      },
      
      setProduct(state, val){
			state.product = val;
      }
  },
  actions: {},
  getters: {
      price(state){
          return state.price
      },
      
      product(state){
          return state.product
      },
      
      totalPlus(state){
          return +state.price+(+state.product)
      },
      
      totalMinus(state){
          return +state.price-(+state.product)
      },
      
      totalMultiplication(state){
          return +state.price*(+state.product)
      },
      
       totalDivision(state){
          return +state.price/(+state.product)
      },
      
  }
} 