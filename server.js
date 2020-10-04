const express = require('express');
const app = express();
const dotenv = require('dotenv');

const PORT = 3000 || process.env.PORT;

app.get('/', (req, res) => {
    res.send("HOME PAGE");
})

app.listen(PORT, () => {
    console.log("server started on PORT:", PORT);
})