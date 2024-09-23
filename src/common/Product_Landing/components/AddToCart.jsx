import React from 'react'
import { Link } from 'react-router-dom'

const AddToCart = (props) => {
  return (
    <Link to={props.count>0?`/Cart/${props.id}/${props.count}`:`/Product/${props.id}`}>
    <button className="addition">
      <i className="fa-solid fa-cart-shopping "></i>
      <span>Add to cart</span>
    </button>
  </Link>
  )
}

export default AddToCart
