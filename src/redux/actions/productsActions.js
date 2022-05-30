export function fetchProducts(data){
  return {
    type:"FETCH_PRODUCTS",
    payload: data
  }
}

export function counterMinus(id){
  return {
    type:"COUNTER_MINUS",
    payload:id
  }
}

export function counterPlus(id){
  return{
    type:"COUNTER_PLUS",
    payload:id
  }
}