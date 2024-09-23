import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import "./Cart.css";
import { fetchProductList } from "../../common/productList";
import "../product_css/product.css";
import CartTable from "./components/CartTable";
import Total from "./components/Total";
const Cart = () => {
  const { id, quantity } = useParams();
  const [products, setProducts] = useState([]);
  const [remove,setRemove]=useState(false);
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const [loading, setLoading] = useState(true);
  const navigate=useNavigate();
  useEffect(() => {
    fetchProductList().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    if (id && quantity) {
      const existingItem = cart.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity = parseInt(quantity);
      } else {
        const newItem = { id, quantity: parseInt(quantity) };
        setCart((prevCart) => [...prevCart, newItem]);
      }
      navigate("/Cart", { replace: true }); 
    }
  }, [id,quantity]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function clearCart(){
    localStorage.clear();
    setCart([]);
  }
  function handleRemove(itemId){
    const newCart=cart.filter((entry)=>{
      return entry.id!=itemId;
    })
    setCart(newCart);
  }
  return (
    <div className="cart-container">
      {loading ? (
        <p className="loader"></p>
      ) : (
        <div>
          <CartTable cart={cart} product={products} onRemove={handleRemove}/>
          <button id="clearButton" onClick={clearCart}>Clear Cart</button>
          {cart.length>0 && <Total cart={cart} products={products}/>}
        </div>
      )}
    </div>
  );
};

export default Cart;