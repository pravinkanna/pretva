const axios = require('axios');

export default async function fetchProducts(filters) {
    try {
        //Converting into string
        if (filters.buyerName) filters.buyerName = String(filters.buyerName);
        if (filters.leadTime) filters.leadTime = String(filters.leadTime);
        if (filters.price) filters.price = String(filters.price);
        if (filters.productName) filters.productName = String(filters.productName);
        if (filters.quantity) filters.quantity = String(filters.quantity);
        if (filters.weightGsm) filters.weightGsm = String(filters.weightGsm);

        //Fetching Result
        const result = await axios.post('/products', {
            "product_name": filters.productName,
            "lead_time": filters.leadTime,
            "weight_gsm": filters.weightGsm,
            "quantity": filters.quantity,
            "price_rs": filters.priceRs,
            "buyer_name": filters.buyerName
        });
        return result;
    } catch (error) {
        console.log(error);
    }
}

