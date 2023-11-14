import React from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3000/user';



async function getUser(id: string): Promise<any> {
  const response = await axios.get(`${API_URL}/${id}`); 
  return response.data;
}

async function createUser(user: any): Promise<any> {
  const response = await axios.post(`${API_URL}/signup`, user);
  return response.data;
}

async function loginUser(user: any): Promise<any> {
  console.log(user);
  const config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `${API_URL}/login`,
    headers: { 
      'Content-Type': 'application/json'
    },
    data : user
  };
  const response = await axios.request(config);
  return response.data;
}

async function logoutUser(user: any): Promise<any> {
  const response = await axios.post(`${API_URL}/logout`, user);
  return response.data;
}
export {
  getUser,
  createUser,
  loginUser,
  logoutUser
};