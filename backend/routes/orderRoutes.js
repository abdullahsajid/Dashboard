const express = require('express');
const { postOrder,getOrders,getSingleOrder,updateStatus } = require('../controller/orderController');
const router = express.Router();

router.post('/post-order',postOrder)
router.get('/get-orders',getOrders)
router.get('/get-single-order/:id',getSingleOrder)
router.put('/update-status/:id',updateStatus)

module.exports = router;