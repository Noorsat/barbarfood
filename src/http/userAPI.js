import { myAxios } from "."

export const userToken = async () => {
    const response = await myAxios.post('/api/actualize/')
    return response
}

export const getToken = async (token) => {
    const headers = {
        session: token
    }
    const response = await myAxios.get('/api/actualize/', {
        headers:headers
    })
    return response;
}