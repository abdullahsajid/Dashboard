import axios from 'axios';
const URL = 'http://localhost:3001/api/shipping';

const addShipping = async (shippingData) => {
    const response = await axios.post(`${URL}/post-shipping`,shippingData);
    return response.data;
}

// const getProducts = async () => {
//     const response = await axios.get(`${URL}/get-products`);
//     return response.data;
// }

export const shippingService = {
    addShipping
}


