const express = require('express');
const {
    errorHandler
} = require('./middlewares/errorMiddleware');
const connectDB = require('./config/connect.js')
require('dotenv').config();
require('colors');
const cors = require('cors')
const port = process.env.PORT;
const app = express();
const path = require('path');
// Serve the static files from the React build directory
app.use(express.static(path.join(__dirname, 'frontend/build')));

// allow cross site requests
app.use(cors());
// connect to the database

connectDB()
// get the data from the body
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))
// handle user routes
app.use('/api/users', require('./routes/userRoutes'))
// handle reset password
app.use('/api/users/reset-password', require('./routes/resetPasswordRoute'))
// handle the visitor routes
app.use('/api/visitors/', require('./routes/visitorRoutes'))
// handle the category routes
app.use('/api/category/', require('./routes/categoryRoutes'))
// handle the product routes
app.use('/api/product/', require('./routes/productRoutes'))
// handle the order routes
app.use('/api/order/', require('./routes/orderRoutes'))
// handle the payment 
app.use('/api/payments/', require('./routes/paymentRoutes'));
// check for errors
app.use(errorHandler)

// Serve the React app for any other requests
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});



app.listen(port, () => console.log(`server started on port:${port}`))