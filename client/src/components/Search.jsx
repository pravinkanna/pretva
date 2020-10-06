import React, { useState } from "react";
import "./Search.css";
import fetchProducts from "../apis/fetchProducts";

function Search(props) {
  const [productNameList, setProductNameList] = useState([""]);
  const [leadTimeList, setLeadTimeList] = useState([""]);
  const [weightGsmList, setWeightGsmList] = useState([""]);
  const [quantityList, setQuantityList] = useState([""]);
  const [priceList, setPriceList] = useState([""]);
  const [selectedFiltersList, setSelectedFiltersList] = useState([]);

  const handleBuyerNameChange = (e) => {
    props.filters.setBuyerName(e.target.value);
  };

  const handleProductNameChange = (e) => {
    props.filters.setProductName(e.target.value);
    const newSelectedFilterList = selectedFiltersList;
    newSelectedFilterList[0] = e.target.value;
    setSelectedFiltersList(newSelectedFilterList);
  };

  const handleLeadTimeChange = (e) => {
    props.filters.setLeadTime(e.target.value);
    const newSelectedFilterList = selectedFiltersList;
    newSelectedFilterList[1] = e.target.value;
    setSelectedFiltersList(newSelectedFilterList);
  };

  const handleWeightGsmChange = (e) => {
    props.filters.setWeightGsm(e.target.value);
    const newSelectedFilterList = selectedFiltersList;
    newSelectedFilterList[2] = e.target.value;
    setSelectedFiltersList(newSelectedFilterList);
  };

  const handleQuantityChange = (e) => {
    props.filters.setQuantity(e.target.value);
    const newSelectedFilterList = selectedFiltersList;
    newSelectedFilterList[3] = e.target.value;
    setSelectedFiltersList(newSelectedFilterList);
  };

  const handlePriceChange = (e) => {
    props.filters.setPrice(e.target.value);
    const newSelectedFilterList = selectedFiltersList;
    newSelectedFilterList[4] = e.target.value;
    setSelectedFiltersList(newSelectedFilterList);
  };

  const handleFindBuyer = async () => {
    const result = await fetchProducts({ buyerName: props.filters.buyerName });
    updateLists(result);
    props.setFetchedProducts(result.data);
  };

  const handleApplyFilter = async () => {
    const result = await fetchProducts(props.filters);
    updateLists(result);
    props.setFetchedProducts(result.data);
  };

  const handleReset = async () => {
    const result = await fetchProducts({ buyerName: props.filters.buyerName });
    updateLists(result);
    setSelectedFiltersList([]);
    props.filters.setProductName(undefined);
    props.filters.setLeadTime(undefined);
    props.filters.setWeightGsm(undefined);
    props.filters.setQuantity(undefined);
    props.filters.setPrice(undefined);
    props.setFetchedProducts(result.data);
  };

  const updateLists = (result) => {
    let productNamesSet = new Set();
    let leadTimeSet = new Set();
    let weightGsmSet = new Set();
    let quantitySet = new Set();
    let priceSet = new Set();

    result.data.forEach((item) => {
      productNamesSet.add(item["product_name"]);
      leadTimeSet.add(item["lead_time"]);
      weightGsmSet.add(item["weight_gsm"]);
      quantitySet.add(item["quantity"]);
      priceSet.add(item["price_rs"]);
    });

    setProductNameList(productNamesSet);
    setLeadTimeList(leadTimeSet);
    setWeightGsmList(weightGsmSet);
    setQuantityList(quantitySet);
    setPriceList(priceSet);
  };

  return (
    <div className="search">
      <div className="search__path">
        <p>
          <span className="bold">Search</span>&nbsp;/&nbsp;Search Buyer Requirements
        </p>
      </div>

      <div className="search__filter">
        <div className="search__filter__button">
          <button className="capsule-left">Search Supplier Products</button>
          <button className="capsule-right selected">Search Buyer Requirements</button>
        </div>

        <div className="search__filter__textbox">
          <input type="text" placeholder="Enter Buyer Name" onChange={handleBuyerNameChange} value={props.buyerName} />
          <button className="capsule" onClick={handleFindBuyer}>
            Find Buyer
          </button>
        </div>

        <div className="search__filter__dropdown">
          <p className="bold">Search Filters</p>
          <ul>
            <li className="dropdown">
              <select id="productName" className="dropbtn" onChange={handleProductNameChange} value="Product">
                <option key={0} value="Product" hidden>
                  Product
                </option>

                {[...productNameList].sort().map((item, index) => {
                  return (
                    <option key={index + 1} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </li>
            <li className="dropdown">
              <select id="leadTime" className="dropbtn" onChange={handleLeadTimeChange} value="Lead Time">
                <option value={undefined} hidden>
                  Lead&nbsp;Time
                </option>
                {[...leadTimeList]
                  .sort((a, b) => Number(a) - Number(b))
                  .map((item, index) => {
                    return (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    );
                  })}
              </select>
            </li>
            <li className="dropdown">
              <select className="dropbtn" onChange={handleWeightGsmChange} value="Weight GSM">
                <option value={undefined} hidden>
                  Weight&nbsp;GSM
                </option>
                {[...weightGsmList]
                  .sort((a, b) => Number(a) - Number(b))
                  .map((item, index) => {
                    return (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    );
                  })}
              </select>
            </li>
            <li className="dropdown">
              <select className="dropbtn" onChange={handleQuantityChange} value="Quantity">
                <option value={undefined} hidden>
                  Quatity
                </option>
                {[...quantityList]
                  .sort((a, b) => Number(a) - Number(b))
                  .map((item, index) => {
                    return (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    );
                  })}
              </select>
            </li>
            <li className="dropdown">
              <select className="dropbtn" onChange={handlePriceChange} value="Price">
                <option value={undefined} hidden>
                  Price
                </option>
                {[...priceList]
                  .sort((a, b) => Number(a) - Number(b))
                  .map((item, index) => {
                    return (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    );
                  })}
              </select>
            </li>

            <button className="capsule" onClick={handleApplyFilter}>
              Apply Filters
            </button>
          </ul>
        </div>

        <div className="search__filter__selectedFilter">
          <hr />
          <p>
            Search Filters :
            {[...selectedFiltersList].map((item, index) => {
              if (item)
                return (
                  <span key={index} className="button capsule">
                    {item}
                  </span>
                );
              else return "";
            })}
            <span style={{ display: selectedFiltersList.length > 0 ? "" : "none" }} className="button capsule clear" onClick={handleReset}>
              Clear All&nbsp;&#10006;
            </span>
          </p>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Search;
