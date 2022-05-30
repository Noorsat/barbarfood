const initialState = {
  products:[]
}

export const productsReducers  = (state = initialState, action) => {
  switch (action.type){
    case "FETCH_PRODUCTS" : 
      return {...state, products: action.payload}
    case "COUNTER_MINUS":
      return {
        ...state, products: { ...state.products, results: state.products.results.map(category => {
          return {...category, items: category.items.map(product => {
            if (product.id === action.payload){
              product.counter = product.counter - 1;
            } 
            return product;
          })
        }})}}
      case "COUNTER_PLUS":
        return {
          ...state, products: { ...state.products, results: state.products.results.map(category => {
            return {...category, items: category.items.map(product => {
              if (product.id === action.payload){
                product.counter = product.counter + 1;
              } 
              return product;
            })
          }})}}
    default : 
      return state;
  }
}
