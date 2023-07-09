import axios from 'axios';
const URL = "http://localhost:3001/api/order";

const postOrder = async (orders) => {
    const response = await axios.post(`${URL}/post-order`, orders);
    return response.data;
}

const getOrders = async () => {
    const response = await axios.get(`${URL}/get-orders`);
    return response.data;
}
const orderService = {
    postOrder,
    getOrders
}


export default orderService