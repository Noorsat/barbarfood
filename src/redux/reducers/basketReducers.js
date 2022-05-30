const initialState = {
    basket:[]
}

export const basketReducers = (state = initialState , action) => {
    switch (action.type){
        case "CREATE_BASKET":
            return {
                ...state, basket: action.payload
            }
        case "ADD_PRODUCT":
            return {...state, basket: [...state.basket,action.payload] }
        default:
            return state;   
    }
}
