import React from "react";
import "./Search.css";
function Search() {
  return (
    <div className="search">
      <div className="search__path">
        <p>
          <span className="bold">Search</span>&nbsp;/&nbsp;Search Buyer Requirements
        </p>
      </div>

      <div className="search__filter">
        <div className="search__filter__button">
          <button className="button capsule-left">Search Supplier Products</button>
          <button className="button capsule-right selected">Search Buyer Requirements</button>
        </div>

        <div className="search__filter__dropdown">
          <p className="bold">Search Filters</p>
          <ul>
            <li>Product</li>
            <li>Quantity</li>
            <li>Cost </li>
            <li>Lead Time</li>
            <li>Rating</li>
            <li>Location</li>
            <button className="capsule">Apply Filters</button>
          </ul>
        </div>

        <div className="search__filter__textbox">
          <input type="text" placeholder="Search with Keywords" />
          <button className="capsule">Post Product Requirements</button>
        </div>

        <div className="search__filter__selectedFilter">
          <hr />
          <p>
            Search Filters : <span className="button capsule">Organic Jersey</span>
          </p>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Search;
