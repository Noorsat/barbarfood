import { myAxios } from "."

export const addToCart = async (token, data) => {
    const headers = {
	session: token
    } 
    const response = await myAxios.post("/api/cart/", data, {
        headers: headers
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
    }
    const response = await myAxios.post("/api/order", data,  {
        headers:headers
    })
    return response
}
