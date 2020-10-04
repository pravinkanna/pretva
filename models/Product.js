const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    "_id": {
        "$oid": mongoose.Schema.Types.ObjectId
    },
    "product_id": String,
    "product_name": String,
    "lead_time": String,
    "weight_gsm": String,
    "quantity": String,
    "price_rs": String,
    "buyer_name": String
})

module.exports = mongoose.model('Product', ProductSchema);
