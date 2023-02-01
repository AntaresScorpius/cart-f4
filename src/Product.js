import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {add} from './cartSlice';

function Product() {
  const products = useSelector((state) => state.cart.products);
  const allProducts = useSelector((state) => state.cart.all);
  // const allProducts = data.products;
  const dispatch = useDispatch();

  function addToCart(e, product) {
    console.log('Title is: ', product.title);
    const found = products.find(({id}) => id === product.id);
    if (found) {
      console.log('element already present');
      alert('Item already present in cart');
      return;
    }
    dispatch(add(product));
    console.log('products is: ', products);
  }

  return (
    <>
      <h1 style={{textAlign: 'center'}}>All Items</h1>
      <div className="product">
        {allProducts.map((product) => {
          return (
            <div key={product.id} className="product-item">
              <img
                src={product.thumbnail}
                width={300}
                height={150}
                alt="product"
              />
              <p>Title: {product.title}</p>
              <p>Price: {product.price}</p>
              <button
                className="btn-product"
                onClick={(e) => addToCart(e, product)}>
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Product;
