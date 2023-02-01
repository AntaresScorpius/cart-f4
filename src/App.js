import './App.css';
import Navigation from './Navigation';
import Product from './Product';
import Cart from './Cart';
import {Routes, Route} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {save} from './cartSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log('rec data', data);
        dispatch(save(data));
      });
  }, []);
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Product />}></Route>
        <Route path="cart" element={<Cart />}></Route>
      </Routes>
    </>
  );
}

export default App;
