import React from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3000/users';



async function getAllProduct(): Promise<any> {
    const response = await axios.get(`${API_URL}/`);
    return response.data;
}

async function getProductByID(id: string): Promise<any> {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
}

export {
    getAllProduct,
    getProductByID,
};