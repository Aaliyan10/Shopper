import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchProductList } from "../../common/productList";
import "./Landing.css";
import "../product_css/product.css";
import CartFunction from "./components/CartFunction";

const Landing = () => {
  const { id } = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 

  const [count, setCount] = useState(0);

  function addition() {
    setCount(count + 1);
  }
  function subtraction() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  useEffect(() => {
    fetchProductList().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return <div className="loader"></div>;
  }
  const foundProduct = products.reduce((acc, item) => {
    return item.id === parseInt(id) ? item : acc;
  }, null);
  

  const formattedPrice = foundProduct.price.toFixed(2);
  return (
    <main className="landing-container">
      <section className="landing-left">
        <img src={foundProduct.image} alt="" />
      </section>
      <section className="landing-right">
        <h1 id="title">{foundProduct.title}</h1>
        <p id="description">{foundProduct.description}</p>
        <p id="price">${formattedPrice}</p>
        <CartFunction count={count} add={addition} sub={subtraction} id={id}/>
      </section>
    </main>
  );
};
export default Landing;
