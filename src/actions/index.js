const getProducts = () => {
  return (dispatch) => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "GET_PRODUCTS", payload: data });
      });
  };
};

const addToCart = (id) => {
  return {
    type: "ADD_TO_CART",
    payload: id,
  };
};

const deleteCartItem = (id) => {
  return {
    type: "DELETE_CART_ITEM",
    payload: id,
  };
};

const increaseCartItem = (id) => {
  return {
    type: "INC_CART_ITEM",
    payload: id,
  };
};

const decreaseCartItem = (id) => {
  return {
    type: "DEC_CART_ITEM",
    payload: id,
  };
};

const updateTotal = (amount) => {
  return {
    type: "UPDATE_TOTAL",
    payload: amount,
  };
};

const toggleCart = () => {
  return {
    type: "TOGGLE_CART",
  };
};

const placeOrder = (obj) => {
  return {
    type: "PLACE_ORDER",
    payload: obj,
  };
};

export {
  getProducts,
  addToCart,
  deleteCartItem,
  increaseCartItem,
  decreaseCartItem,
  updateTotal,
  toggleCart,
  placeOrder,
};
