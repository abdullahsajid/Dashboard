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


const authService = {
    registerUser,
    loginUser,
    sendResetMail
}

export default authService;