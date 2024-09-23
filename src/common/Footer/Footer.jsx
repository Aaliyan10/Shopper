import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <section className="contact-info">
        <h2>Contact Info</h2>
        <ul>
          <li>
            <strong>Email Address:</strong> support@shopper.com
          </li>
          <li>
            <strong>Phone Number:</strong> +1 (555) 123-4567
          </li>
          <li>
            <strong>Address:</strong> 123 Market St, Suite 500, Cityville, CA
            90210.
          </li>
        </ul>
      </section>
      <section className="shipping-features">
        <h2>Shipping Features</h2>
        <ul>
          <li>Free shipping on orders over $500</li>
          <li>Real-time order tracking via email</li>
          <li>International shipping at competitive rates</li>
        </ul>
      </section>
      <section className="return-features">
        <h2>Return Features</h2>
        <ul>
          <li>Full refund on eligible items</li>
          <li>Free return shipping available</li>
          <li>Easy returns within 30 days</li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
