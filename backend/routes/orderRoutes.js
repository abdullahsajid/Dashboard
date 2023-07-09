const express = require('express');
const { postOrder,getOrders } = require('../controller/orderController');
const router = express.Router();

router.post('/post-order',postOrder)
router.get('/get-orders',getOrders)

module.exports = router;