import React from "react";
import "./Products.css";
function ProductsList(props) {
  const products = props.fetchedProducts;
  if (products) {
    return (
      <div className="products">
        {[...products].map((item, index) => {
          return (
            <div key={index} className="products__item">
              <p className="product__item__property id">
                <span className="bold colored">Product&nbsp;ID:</span>&nbsp; {item.product_id}
              </p>
              <p className="product__item__property buyerName">
                <span className="bold colored">Buyer&nbsp;Name:</span>&nbsp; {item.buyer_name}
              </p>
              <p className="product__item__property productName">
                <span className="bold colored">Product&nbsp;Name:</span>&nbsp; {item.product_name}
              </p>
              <p className="product__item__property leadTime">
                <span className="bold colored">Lead&nbsp;Iime:</span>&nbsp; {item.lead_time}
              </p>
              <p className="product__item__property weightGsm">
                <span className="bold colored">Weight&nbsp;GSM:</span>&nbsp; {item.weight_gsm}
              </p>
              <p className="product__item__property quantity">
                <span className="bold colored">Quantity</span>&nbsp; {item.quantity}
              </p>
              <p className="product__item__property price">
                <span className="bold colored">Price</span> {item.price_rs}
              </p>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

export default ProductsList;
