import Axios from 'axios';
import { CART_ADD_ITEM } from '../constants/cartConstants';

export const addToCart = (earringId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/earrings/${earringId}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      earring: data._id,
      qty,
    },
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};


