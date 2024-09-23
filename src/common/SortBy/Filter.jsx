import React from "react";
import "../../common/product_css/product.css";

const Filter = (props) => {
  
  function handleRadioChange(event) {
    const name = event.target.value;
    var sortedProducts = [...props.products];
    switch (name) {
      case "price_asc":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "price_desc":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case "rating_asc":
        sortedProducts.sort((a, b) => a.rating.rate - b.rating.rate);
        break;
      case "rating_desc":
        sortedProducts.sort((a, b) => b.rating.rate - a.rating.rate);
        break;
    }
   props.setProducts(sortedProducts);
  }
  return (
    <details className="filter">
      <summary>Sort By</summary>
      <div className="sort-options">
        <input
          onChange={handleRadioChange}
          type="radio"
          id="price-asc"
          name="sort"
          value="price_asc"
        />
        <label htmlFor="price-asc">Price: Low to High</label>
        <br />

        <input
          onChange={handleRadioChange}
          type="radio"
          id="price-desc"
          name="sort"
          value="price_desc"
        />
        <label htmlFor="price-desc">Price: High to Low</label>
        <br />

        <input
          onChange={handleRadioChange}
          type="radio"
          id="rating-asc"
          name="sort"
          value="rating_asc"
        />
        <label htmlFor="rating-asc">Rating: Low to High</label>
        <br />

        <input
          onChange={handleRadioChange}
          type="radio"
          id="rating-desc"
          name="sort"
          value="rating_desc"
        />
        <label htmlFor="rating-desc">Rating: High to Low</label>
        <br />
      </div>
    </details>
  );
};

export default Filter;
