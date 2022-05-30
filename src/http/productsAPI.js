import { myAxios } from "."

export const getCategoryAndItems = async () => {
    const response = await myAxios.get("/api/categories")
    return response
}

export const getItemDetails = async (id) => {
    const response = await myAxios.get("/api/items/"+id)
    return response
}
