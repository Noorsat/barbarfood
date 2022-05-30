import { myAxios } from "."

export const getPromotions = async () => {
    const response = await myAxios.get("/api/promotions")
    return response
}