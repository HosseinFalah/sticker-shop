import apiRequest from "../Config/Config";

// @desc Get All Products
// @route GET http://localhost:9000/products
export const getAllProducts = () => {
    return apiRequest.get('/stickers');
}