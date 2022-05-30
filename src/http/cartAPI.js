import { myAxios } from "."

export const addToCart = async (token, data) => {
    const headers = {
        session: token,
        "Access-Control-Allow-Origin":"*",
        "Access-Control-Allow-Methods":"GET,HEAD,OPTIONS,POST,PUT",
        "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"
    } 
    const response = await myAxios.post("/api/cart", data, {
        headers: headers,
    })
    return response
}

export const createOrder = async (token,data) => {
    const headers = {
        session: token,
        "Access-Control-Allow-Origin":"*",
        'Content-Type': 'text/plain'
    }
    const response = await myAxios.post("/api/order", data,  {
        headers:headers
    })
    return response
}
