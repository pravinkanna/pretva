const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')

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
app.use(cors())

//Routes
app.post('/products', async (req, res) => {
    const filter = req.body;
    const products = await Product.find(filter);
    res.send(products);
})

if (process.env.NODE_ENV === 'production') {
    // To use Production Build
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

//Server 
const PORT = 3002 || process.env.PORT;
app.listen(PORT, () => {
    console.log("server started on PORT:", PORT);
})