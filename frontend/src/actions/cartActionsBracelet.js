import Axios from 'axios'
import { CART_ADD_ITEM_BRACELET } from '../constants/cartConstantBracelet';

export const addBraceletToCart = (braceletId, qty) => async (dispatch, getState) => {
    const { data } = await Axios.get(`/api/bracelets/${braceletId}`);
    dispatch({
      type: CART_ADD_ITEM_BRACELET ,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        bracelet: data._id,
        qty,
      },
    });
    localStorage.setItem('cartItemsBracelet', JSON.stringify(getState().cartBracelet.cartItemsBracelet));
  };

