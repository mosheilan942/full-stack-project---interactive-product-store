import React from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3000/user';



async function getUser(id: string): Promise<any> {
  const response = await axios.get(`${API_URL}/${id}`); 
  return response.data;
}


async function signupUser(user: any): Promise<any> {
  console.log(user);
  const config = {
    method: 'post',
    maxBodyLength: Infinity,
    url:`${API_URL}/reg`,
    headers: { 
      'Content-Type': 'application/json'
    },
    data : user
  };
    const response = await axios.request(config);
    console.log(response);
    return response
}

async function loginUser(user: any): Promise<any> {
  console.log(user);
  const config = {
    method: 'post',
    maxBodyLength: Infinity,
    url:`${API_URL}/login`,
    headers: { 
      'Content-Type': 'application/json'
    },
    data : user
  };
    const response = await axios.request(config);
    console.log(response);
    return response
}

async function logoutUser(user: any): Promise<any> {
  const response = await axios.post(`${API_URL}/logout`, user);
  return response.data;
}
export {
  getUser,
  signupUser,
  loginUser,
  logoutUser
};