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

      <div className="search__by">
        <button>Search Supplier Products</button>
        <button>Search Buyer Requirements</button>
      </div>
    </div>
  );
}

export default Search;
