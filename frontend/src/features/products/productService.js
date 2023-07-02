import axios from 'axios';
const URL = 'http://localhost:3001/api/product';

const addProduct = async (productData) => {
    const response = await axios.post(`${URL}/add-product`,productData);
    return response.data;
}

export const productService = {
    addProduct,
}