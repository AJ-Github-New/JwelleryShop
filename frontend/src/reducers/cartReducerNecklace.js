import { CART_ADD_ITEM_NECKLACE } from '../constants/cartConstantNecklace';

export const cartReducerNecklace = (state = { cartItemsNecklace: [] }, action) => {
    switch (action.type) {
      case CART_ADD_ITEM_NECKLACE:
        const item = action.payload;
        const existItem = state.cartItemsNecklace.find((x) => x.necklace === item.necklace);
        if (existItem) {
          return {
            ...state,
            cartItemsNecklace: state.cartItemsNecklace.map((x) =>
              x.necklace === existItem.necklace ? item : x
            ),
          };
        } else {
          return { ...state, cartItemsNecklace: [...state.cartItemsNecklace, item] };
        }
      default:
        return state;
    }
  };