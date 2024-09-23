import React from "react";
import image from "../../assets/Home_img.jpg";
import "./Home.css";
import "../../common/product_css/product.css";
import { Link } from "react-router-dom";
import TopProducts from "./components/TopProducts";

const Home = () => {
  
  return (
    <main>
      <div className="home-container">
        <section className="home-left">
          <h1>Welcome to Shopper!</h1>
          <p>
            Discover our exquisite collection of men’s and women’s clothing,
            electronics, and jewelry, where elegance meets comfort. Embrace the
            latest trends and timeless classics, designed to make you look and
            feel fabulous.
          </p>
          <Link to="/Products">
            <button>Shop Now</button>
          </Link>
        </section>
        <section className="home-right">
          <img src={image} alt="" />
        </section>
      </div>
      <TopProducts />
    </main>
  );
};

export default Home;
