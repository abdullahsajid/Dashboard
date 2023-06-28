const mongoose = require('mongoose');

const VisitorSchema = mongoose.Schema({
    month: {
        type: Number,
        required:true,
    },
    count: {
        type: Number,
        default:0,
    },
})

module.exports = mongoose.model('Visitors', VisitorSchema);