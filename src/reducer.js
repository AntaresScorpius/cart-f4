const initialState = {
  products: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'add':
      console.log('inside add');
      return {
        products: state.products.concat(action.payload),
      };
    case 'remove':
      console.log('inside remove');
      return {
        products: state.products.concat(action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
