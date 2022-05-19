export function addProduct(product){
    return {
        type:"ADD_PRODUCT",
        payload:product
    }
}

export function plusCounter(id){
    return {
        type: "PLUS_COUNTER",
        payload:id
    }
}

export function minusCounter(id){
    return {
        type: "MINUS_COUNTER",
        payload:id
    }
}