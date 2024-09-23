import React from 'react'
import AddToCart from './AddToCart'
import Counter from './Counter'

const CartFunction = (props) => {
  return (
    <article className="cart-items">
          <Counter number={props.count} add={props.add} sub={props.sub}/>
         <AddToCart count={props.count} id={props.id}/>
        </article>
  )
}

export default CartFunction
