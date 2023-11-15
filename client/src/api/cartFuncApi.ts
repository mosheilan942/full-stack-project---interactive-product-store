import axios from 'axios';

const API_URL = 'http://localhost:3000/category';



async function getAllProductFromCart(): Promise<any> {
    const response = await axios.get(`${API_URL}/`);
    return response.data;
}

async function getProductByID(id: string): Promise<any> {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
}
async function getProductByCategory(name: string): Promise<any> {
    const response = await axios.get(`${API_URL}/${name}`);
    return response.data;
}

export {
    getAllProductFromCart as getAllProduct,
    getProductByID,
    getProductByCategory
};