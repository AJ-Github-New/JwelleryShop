import { CART_ADD_ITEM_BRACELET } from '../constants/cartConstantBracelet';

export const cartReducerBracelet= (state = { cartItemsBracelet: [] }, action) => {
    switch (action.type) {
      case CART_ADD_ITEM_BRACELET:
        const item = action.payload;
        const existItem = state.cartItemsBracelet.find((x) => x.bracelet === item.bracelet);
        if (existItem) {
          return {
            ...state,
            cartItemsBracelet: state.cartItemsBracelet.map((x) =>
              x.bracelet === existItem.bracelet ? item : x
            ),
          };
        } else {
          return { ...state, cartItemsBracelet: [...state.cartItemsBracelet, item] };
        }
      default:
        return state;
    }
  };