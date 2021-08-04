import { CART_ADD_ITEM_NECKLACE } from '../constants/cartConstantNecklace';
import Axios from 'axios'

export const addNecklaceToCart = (necklaceId, qty) => async (dispatch, getState) => {
    const { data } = await Axios.get(`/api/necklaces/${necklaceId}`);
    dispatch({
      type: CART_ADD_ITEM_NECKLACE ,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        necklace: data._id,
        qty,
      },
    });
    localStorage.setItem('cartItemsNecklace', JSON.stringify(getState().cartNecklace.cartItemsNecklace));
  };

