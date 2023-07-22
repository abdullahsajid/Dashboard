import axios from 'axios';
const URL = `${process.env.REACT_APP_BASE_URL}/product`;

const addProduct = async (productData) => {
    const response = await axios.post(`${URL}/add-product`,productData);
    return response.data;
}

const getProducts = async () => {
    const response = await axios.get(`${URL}/get-products`);
    return response.data;
}

export const productService = {
    addProduct,
    getProducts
}