const AsyncHandler = require('express-async-handler');
const Order = require('../models/orderModel');


const postOrder = AsyncHandler(async (req, res) => {
    const { user,product } = req.body;
    // find the category
        
        const order = await Order.create({
            user,product
        });
        res.status(200).json(order)
    
});
const getOrders = AsyncHandler(async(req,res)=>{
    const orders = await Order.find();
    res.json(orders);
})

module.exports = {
    postOrder,
    getOrders
}