import axios from 'axios';

const URL = 'http://localhost:3001/api/users';

const registerUser = async (userData) => {
    const response = await axios.post(`${URL}/register`, userData);
    if (response.data) {
        localStorage.setItem('user',JSON.stringify(response.data));
    }
    return response;
}

const loginUser = async (userData) => { 
    const response = await axios.post(`${URL}/login`, userData);
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response;
}

const sendResetMail = async (userData) => { 
    const response = await axios.post(`${URL}/reset-password`, userData);
    return response;
}


const addNewUser = async(userData,token) => {
    const config = {
        headers: {
            Authorization:`Bearer ${token}`
        }
    }
    const response = await axios.post(`${URL}/add-new-user`,userData,config)
    return response.data;
}


const getAllUsers = async () => {
    const response = await axios.get(`${URL}/get-users`);
    return response.data;
}


const resetPassword = (token,id) => {
    let response = axios.post(`${URL}/reset-password/${token}`,id);
    return response.data;
}


const authService = {
    registerUser,
    loginUser,
    sendResetMail,
    addNewUser,
    getAllUsers,
    resetPassword
}

export default authService;