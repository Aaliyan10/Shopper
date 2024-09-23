import React, { useState, useEffect } from "react";
import { fetchProductList } from "../../../common/productList";
import Card from "../../../common/Card/Card";

const TopProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProductList().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return <div className="loader"></div>;
  }
  const sortedProducts = products.sort(
    (a, b) => b.rating.count - a.rating.count
  );
  const topThreeProducts = sortedProducts.slice(0, 3);

  return (
    <div className="topSellers">
      <h1 id="heading">Top Picks Just for You</h1>
      <div id="product_container">
        {topThreeProducts.map((entry, index) => (
          <Card
            key={`home-${entry.id}`}
            title={entry.title}
            imgUrl={entry.image}
            price={entry.price}
            rating={entry.rating}
            id={entry.id}
          />
        ))}
      </div>
    </div>
  );
};

export default TopProducts;
