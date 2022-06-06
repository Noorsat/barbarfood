import { myAxios } from "."

export const getCategoryAndItems = async () => {
    const response = await myAxios.get("/api/categories?count=20")
    return response
}

export const getItemDetails = async (id) => {
    const response = await myAxios.get("/api/items/"+id)
    return response
}
