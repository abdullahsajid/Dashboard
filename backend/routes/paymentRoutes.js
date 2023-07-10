const express = require('express');
const router = express.Router();
const { handleRefund } = require('../controller/refundController');
router.post('/refund', handleRefund);


module.exports = router;