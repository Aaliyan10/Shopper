import React, { useState, useEffect } from "react";
import { fetchProductList } from "../../common/productList";
import Card from "../../common/Card/Card";
import "../../common/product_css/product.css";
import Filter from "../../common/SortBy/Filter";


const Products = () => {
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
 
  return (
    <div>
      <Filter products={products} setProducts={setProducts}/>
      <div id="container">
        {products.map((entry, index) => (
          <Card
            key={`products-${entry.id}`}
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

export default Products;
