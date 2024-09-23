import React from 'react'

const Total = (props) => {
    const total = () => {
        let totalAmount = 0;
        props.cart.forEach((entry) => {
          const foundProduct = props.products.find((item) => item.id === parseInt(entry.id));
          if (foundProduct) {
            totalAmount += entry.quantity * foundProduct.price;
          }
        });
        return totalAmount;
      };
      const value=total();
  return (
    <div className='total'>
        <p><span id='text'>Subtotal:</span><span id='value'>${value.toFixed(2)}</span> </p>
        <p className='Fees'><span id='text'>Shipping Fees:</span><span id='value'>{value>=500?"Free Shipping":"$5.00"}</span></p>
        <p><span id='text'>Order Total:</span><span id='value'>${(value>=500?value:value+5).toFixed(2)}</span></p>
    </div>
  )
}

export default Total
