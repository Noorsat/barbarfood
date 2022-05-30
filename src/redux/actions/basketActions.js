export function createBasket(data){
    return {
        type:"CREATE_BASKET",
        payload: data
    }
}

export function addProduct(product){
    return {
        type:"ADD_PRODUCT",
        payload:product
    }
}
