import Axios from 'axios'
import { CART_ADD_ITEM_ANKLET } from '../constants/cartConstantAnklet';

export const addAnkletToCart = (ankletId, qty) => async (dispatch, getState) => {
    const { data } = await Axios.get(`/api/anklets/${ankletId}`);
    dispatch({
      type: CART_ADD_ITEM_ANKLET ,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        anklet: data._id,
        qty,
      },
    });
    localStorage.setItem('cartItemsAnklet', JSON.stringify(getState().cartAnklet.cartItemsAnklet));
  };


