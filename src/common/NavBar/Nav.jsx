import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./Nav.css";

function Nav() {
  const [isClicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(!isClicked);
  }

  return (
    <header>
      <Link to="/Home">
        <div className="logo">
          <img src={logo} alt="" />
          SHOPPER
        </div>
      </Link>
      <nav>
        <ul className={isClicked ? "menu_active" : ""} id="options">
          <li>
            <NavLink to="/Home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Products">All Products</NavLink>
          </li>
          <li>
            <details>
              <summary>Categories</summary>
              <ul>
                <li>
                  <NavLink to="/Men">Men</NavLink>
                </li>
                <li>
                  <NavLink to="/Women">Women</NavLink>
                </li>
                <li>
                  <NavLink to="/Electronics">Electronics</NavLink>
                </li>
                <li>
                  <NavLink to="/Jewelery">Jewelery</NavLink>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <NavLink to="/Contact">Contact Us</NavLink>
          </li>
        </ul>
        <Link to={"/Cart"}>
          <i className="fa-solid fa-cart-shopping icon"></i>
        </Link>
        {isClicked && (
          <span onClick={handleClick} className="cross">
            <i className="fa-solid fa-x"></i>
          </span>
        )}
        <span
          onClick={handleClick}
          className={isClicked ? "menu disappear" : "menu"}
        >
          <i className="fa-solid fa-bars icon"></i>
        </span>
      </nav>
    </header>
  );
}

export default Nav;