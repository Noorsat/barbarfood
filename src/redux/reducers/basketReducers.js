const initialState = {
    basket:[]
}

export const basketReducers = (state = initialState , action) => {
    switch (action.type){
        case "ADD_PRODUCT":
            return {...state, basket: [...state.basket,action.payload] }
        case "PLUS_COUNTER":
            return {
               ...state.basket.map(item => {
                   if (item.id === action.payload){
                        item.counter += 1; 
                   }
                   return item; 
               })     
            }
        case "MINUS_COUNTER":
        return {
            ...state.basket.map(item => {
                if (item.id === action.payload){
                    item.counter -= 1; 
                }
                return item; 
            })     
        }
        default:
            return state;   
    }
}
