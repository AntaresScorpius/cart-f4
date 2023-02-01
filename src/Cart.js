import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {remove, checkout} from './cartSlice';

function Cart() {
  const products = useSelector((state) => state.cart.products);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();
  function removeFromCart(e, product) {
    dispatch(remove(product));
  }

  function checkoutCart() {
    dispatch(checkout());
  }

  useEffect(() => {
    console.log('carts ', products);
  });
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>My Cart</h1>
      <div className="container">
        <div className="cart">
          {products?.map((product) => {
            return (
              <div key={product.id} className="cart-item">
                <img
                  src={product.thumbnail}
                  width={300}
                  height={150}
                  alt="cart"
                />
                <p>Title: {product.title}</p>
                <p>Price: {product.price}</p>
                <button
                  className="btn-product"
                  onClick={(e) => removeFromCart(e, product)}>
                  Remove to Cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="checkout">
        <table>
          <tbody>
            <tr>
              <th colSpan={2}>Name</th>
              <th>Price</th>
            </tr>
            {products?.map((product) => {
              return (
                <tr key={product.title}>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <hr />
        <p>Total : {total}</p>
        <hr />
        <button className="btn-checkout" onClick={checkoutCart}>
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
