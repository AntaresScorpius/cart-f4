import {createSlice} from '@reduxjs/toolkit';
// import {data} from './data';
export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    all: [],
    total: 0,
  },
  reducers: {
    save: (state, action) => {
      state.all = action.payload.products;
    },
    add: (state, action) => {
      console.log('inside add slice', action.payload);
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      // const item = action.payload;
      // const found = state.products.find(({id}) => id === action.payload.id);
      // if (found) {
      //   console.log('element already present');
      //   return;
      // }
      state.products.push(action.payload);
      state.total += action.payload.price;
    },
    remove: (state, action) => {
      console.log('remove reducer');
      const item = action.payload;
      const found = state.products.filter((product) => product.id !== item.id);
      state.products = found;
      state.total -= item.price;
    },
    checkout: (state, action) => {
      console.log('checkout reducer');
      state.products = [];
      state.total = 0;
    },
  },
});

export const {add, remove, checkout, save} = cartSlice.actions;

export default cartSlice.reducer;
