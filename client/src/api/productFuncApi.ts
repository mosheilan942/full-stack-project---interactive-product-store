import axios from 'axios';

const API_URL = 'http://localhost:3000/category';



async function getAllCategories(): Promise<any> {
    const response = await axios.get(`${API_URL}/categories`);
    return response.data;
}
async function getTopData(): Promise<any> {
    const response = await axios.get(`${API_URL}/getTopFive`);
    return response.data;
}

async function getAllProduct(): Promise<any> {
    const response = await axios.get(`${API_URL}/`);
    return response.data;
}

async function getSearchProduct(nameCategory: string, filter: string): Promise<any> {
    const response = await axios.get(`${API_URL}/${nameCategory}/search${filter}`);
    return response.data;
}

async function getFilterProduct(nameCategory: string, filter: string): Promise<any> {
    const response = await axios.get(`${API_URL}/${nameCategory}/filter${filter}`);
    return response.data;
}

async function getOrderProductByAlphabetical(nameCategory: string, order: string): Promise<any> {
    const response = await axios.get(`${API_URL}/${nameCategory}/alphabetical${order}`);
    return response.data;
}

async function getProductByID(id: string): Promise<any> {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
}
async function getProductByCategory(nameCategory: string): Promise<any> {
    const response = await axios.get(`${API_URL}/${nameCategory}`);
    return response.data;
}

export {
    getAllProduct,
    getSearchProduct,
    getFilterProduct,
    getOrderProductByAlphabetical,
    getProductByID,
    getProductByCategory,
    getAllCategories,
    getTopData
};