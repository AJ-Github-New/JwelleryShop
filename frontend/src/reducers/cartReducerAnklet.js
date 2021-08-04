import { CART_ADD_ITEM_ANKLET } from '../constants/cartConstantAnklet';

export const cartReducerAnklet= (state = { cartItemsAnklet: [] }, action) => {
    switch (action.type) {
      case CART_ADD_ITEM_ANKLET:
        const item = action.payload;
        const existItem = state.cartItemsAnklet.find((x) => x.anklet === item.anklet);
        if (existItem) {
          return {
            ...state,
            cartItemsAnklet: state.cartItemsAnklet.map((x) =>
              x.anklet === existItem.anklet ? item : x
            ),
          };
        } else {
          return { ...state, cartItemsAnklet: [...state.cartItemsAnklet, item] };
        }
      default:
        return state;
    }
  };