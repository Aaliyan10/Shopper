import React from "react";

const CartTable = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {props.cart.length > 0 ? (
          props.cart.map((entry, index) => {
            const foundProduct = props.product.reduce((acc, item) => {
              return item.id === parseInt(entry.id) ? item : acc;
            }, null);
            if (!foundProduct) {
              return <tr key={index + "error"}></tr>;
            }

            return (
              <tr key={foundProduct.id}>
                <td className="product-info">
                  <img src={foundProduct.image} alt="" />
                  <span id="title">{foundProduct.title}</span>
                </td>
                <td>${foundProduct.price.toFixed(2)}</td>
                <td>{entry.quantity}</td>
                <td>${(entry.quantity * foundProduct.price).toFixed(2)}</td>
                <td>
                  <i
                    className="fa-solid fa-trash"
                    id="trash-icon"
                    onClick={() => {
                      props.onRemove(foundProduct.id);
                    }}
                  ></i>
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan="5">
              <p>No items in cart</p>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default CartTable;
