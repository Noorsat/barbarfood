import { myAxios } from "."

export const addToCart = async (token, data) => {
    const headers = {
        session: token,
        "Access-Control-Allow-Origin":"*",
        "Access-Control-Allow-Methods":"GET, PUT, POST",
        "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"
    } 
    const response = await myAxios.post("/api/cart", data, {
        headers: headers,      
    }).then((res) => {
        console.log("Response received: ", res )
    }).catch((err)  => {
        console.log("AXIOS ERROR: ", err)
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
