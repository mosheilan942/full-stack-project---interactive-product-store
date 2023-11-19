import axios from 'axios';

const API_URL = 'http://localhost:3000/category';



async function getAllProductFromCart(id: string): Promise<any> {
    const response = await axios.get(`${API_URL}/Cart/get/${id}`);
    return response.data;
}
async function addProductToCartByID(productID: string, userID: string): Promise<any> {
    try{
        const response = await axios.get(`http://localhost:3000/category/Cart/Add/${userID}/${productID}`);
        return "add success";
    } catch {
        return "add failed";
    }
}

async function lessProductToCartByID(productID: string, userID: string): Promise<any> {
    try{
        const response = await axios.get(`http://localhost:3000/category/Cart/lower/${userID}/${productID}`);
        return "add success";
    } catch {
        return "add failed";
    }
}

async function getProductByID(id: string): Promise<any> {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
}
// async function getAmountProductFromCart(id: string): Promise<any> {
//     const response = await axios.get(`${API_URL}/cart/amount/${id}`);
//     return response.data;
// }
async function getProductByCategory(name: string): Promise<any> {
    const response = await axios.get(`${API_URL}/${name}`);
    return response.data;
}

export {
    // getAmountProductFromCart,
    lessProductToCartByID,
    getAllProductFromCart,
    addProductToCartByID,
    getProductByID,
    getProductByCategory
};