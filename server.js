const express = require('express');
const app = express();
const mongoose = require('mongoose');

//Mongoose model
const Product = require('./models/Product')

// Dotenv config
require('dotenv').config()

//Database config
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("Database Connected Successfully")
})

//Middlewares
app.use(express.json())

//Routes
app.post('/products', async (req, res) => {
    const filter = req.body;
    const products = await Product.find(filter);
    res.send(products);
})

//Server 
const PORT = 3001 || process.env.PORT;
app.listen(PORT, () => {
    console.log("server started on PORT:", PORT);
})